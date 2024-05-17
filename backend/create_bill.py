import json
import boto3
import random
import time
from decimal import Decimal, ROUND_HALF_UP


class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super(DecimalEncoder, self).default(obj)


def generate_bill_id(dynamodb):
    table = dynamodb.Table("GroupBill")
    while True:
        bill_id = str(random.randint(1000, 9999))
        response = table.get_item(Key={"bill_id": bill_id})
        if "Item" not in response:
            return bill_id


def lambda_handler(event, context):
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("GroupBill")

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    try:
        if "body" in event:
            body = json.loads(event["body"])
        else:
            body = event
    except (TypeError, json.JSONDecodeError) as e:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps("Bad Request: Invalid JSON format"),
        }

    required_fields = [
        "bill_creator",
        "bill_total",
        "total_members",
        "bill_description",
        "password",
    ]
    if not all(field in body for field in required_fields):
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps("Bad Request: Missing required fields"),
        }

    bill_creator = body["bill_creator"]
    bill_total = Decimal(str(body["bill_total"]))
    total_members = body["total_members"]
    bill_individual = (bill_total / total_members).quantize(
        Decimal("0.00"), rounding=ROUND_HALF_UP
    )
    bill_description = body["bill_description"]
    password = body["password"]
    history = {}
    ttl = int(time.time()) + 86400

    bill_id = generate_bill_id(dynamodb)

    try:
        table.put_item(
            Item={
                "bill_id": bill_id,
                "bill_creator": bill_creator,
                "bill_total": bill_total,
                "bill_individual": bill_individual,
                "total_members": total_members,
                "bill_description": bill_description,
                "password": password,
                "history": history,
                "ttl": ttl,
            }
        )
        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps(
                {"message": "Bill created", "bill_id": bill_id},
                cls=DecimalEncoder,
            ),
        }
    except Exception as e:
        print(str(e))
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"message": "Error creating bill", "error": str(e)}),
        }

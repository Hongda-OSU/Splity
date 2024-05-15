import json
import boto3
from decimal import Decimal


class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super(DecimalEncoder, self).default(obj)


def lambda_handler(event, context):
    try:
        if "body" in event:
            body = json.loads(event["body"])
        else:
            body = event
    except (TypeError, json.JSONDecodeError) as e:
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "Invalid JSON format", "error": str(e)}),
        }

    if "bill_id" not in body or "password" not in body:
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "Missing bill_id or password"}),
        }

    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("GroupBill")

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    bill_id = body["bill_id"]
    password = body["password"]

    try:
        res = table.get_item(Key={"bill_id": bill_id})
        bill = res.get("Item")
        if not bill:
            return {
                "statusCode": 404,
                "body": json.dumps({"message": "Bill not found"}),
            }

        if bill["password"] != password:
            return {
                "statusCode": 401,
                "body": json.dumps({"message": "Incorrect password"}),
            }

        bill_info = {
            "bill_creator": bill.get("bill_creator"),
            "bill_description": bill.get("bill_description"),
            "individual_price": bill.get("individual_price"),
        }

        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps(bill_info, cls=DecimalEncoder),
        }
    except Exception as e:
        print(str(e))
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"message": "Authentication fail", "error": str(e)}),
        }

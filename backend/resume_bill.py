import json
import boto3
import time
from decimal import Decimal


class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super(DecimalEncoder, self).default(obj)


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
            "body": json.dumps({"message": "Invalid JSON format", "error": str(e)}),
        }

    if "bill_id" not in body or "resume_code" not in body:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"message": "Missing bill_id or resume_code"}),
        }

    bill_id = body["bill_id"]
    resume_code = body["resume_code"]

    try:
        res = table.get_item(Key={"bill_id": bill_id})
        bill = res.get("Item")
        if not bill:
            return {
                "statusCode": 404,
                "headers": headers,
                "body": json.dumps({"message": "Bill not found"}),
            }

        current_time = int(time.time())
        if "ttl" in bill and bill["ttl"] < current_time:
            return {
                "statusCode": 401,
                "headers": headers,
                "body": json.dumps({"message": "Bill has expired"}),
            }

        if bill["resume_code"] != resume_code:
            return {
                "statusCode": 401,
                "headers": headers,
                "body": json.dumps({"message": "Incorrect resume code"}),
            }

        bill_info = {
            "password": bill.get("password"),
            "ttl": int(bill.get("ttl")),
        }

        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps(bill_info),
        }
    except Exception as e:
        print(str(e))
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"message": "Error resuming bill", "error": str(e)}),
        }

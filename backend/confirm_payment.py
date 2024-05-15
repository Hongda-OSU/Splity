import json
import boto3
from datetime import datetime, timezone, timedelta
from decimal import Decimal


def lambda_handler(event, context):
    try:
        if "body" in event:
            body = json.loads(event["body"])
        else:
            body = event

        bill_id = body["bill_id"]
        password = body["password"]
        bill_payer = body["bill_payer"]
        bill_amount = Decimal(str(body["bill_amount"]))
    except KeyError as e:
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "Missing required field", "error": str(e)}),
        }
    except (TypeError, json.JSONDecodeError) as e:
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "Invalid input format", "error": str(e)}),
        }

    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("GroupBill")

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Headers": "Content-Type",
    }

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

        history = bill.get("history", {})

        if bill_payer in history:
            return {
                "statusCode": 400,
                "body": json.dumps({"message": "Payment already made for this member"}),
            }

        current_time = datetime.now(timezone(timedelta(hours=-5)))

        history[bill_payer] = {
            "amount": bill_amount,
            "date": current_time.strftime("%Y-%m-%d %H:%M:%S"),
        }

        table.update_item(
            Key={"bill_id": bill_id},
            UpdateExpression="SET history = :val",
            ExpressionAttributeValues={":val": history},
        )

        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({"message": f"Payment completed for {bill_payer}"}),
        }
    except Exception as e:
        print(str(e))
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps(
                {"message": "Error processing payment", "error": str(e)}
            ),
        }

import json
import boto3


def lambda_handler(event, context):
    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table("GroupBill")

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    try:
        if (
            "queryStringParameters" in event
            and "bill_id" in event["queryStringParameters"]
        ):
            bill_id = event["queryStringParameters"]["bill_id"]
        else:
            return {
                "statusCode": 400,
                "headers": headers,
                "body": json.dumps("Missing required query parameters"),
            }

        res = table.get_item(Key={"bill_id": bill_id})
        bill = res.get("Item")

        if not bill:
            return {
                "statusCode": 404,
                "headers": headers,
                "body": json.dumps("Bill does not exist"),
            }

        history = bill.get("history", {})

        payment_history = []
        for payer, details in history.items():
            payment_history.append(
                {
                    "payer": payer,
                    "amount": float(details["amount"]),
                    "date": details["date"],
                }
            )

        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({"history": payment_history}),
        }

    except Exception as e:
        print(str(e))
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps(
                {"message": "Error querying payment history", "error": str(e)}
            ),
        }

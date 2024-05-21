import json
import boto3
from datetime import datetime, timezone, timedelta
from decimal import Decimal

dynamodb = boto3.resource("dynamodb")
connections_table = dynamodb.Table("SplityWebSocketConnection")
endpoint_url = "https://9wjcu78y9i.execute-api.us-east-2.amazonaws.com/production"


class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super(DecimalEncoder, self).default(obj)


def send_message(connection_id, message):
    client = boto3.client("apigatewaymanagementapi", endpoint_url=endpoint_url)
    try:
        client.post_to_connection(
            ConnectionId=connection_id, Data=json.dumps(message, cls=DecimalEncoder)
        )
        print(f"Message sent to {connection_id}: {message}")
    except Exception as e:
        print(f"Failed to send message to {connection_id}: {e}")


def lambda_handler(event, context):
    for record in event["Records"]:
        if record["eventName"] in ["INSERT", "MODIFY"]:
            new_image = record["dynamodb"]["NewImage"]
            history = new_image.get("history", {}).get("M", {})
            bill_id = new_image.get("bill_id", {}).get("S")

            if not history or not bill_id:
                continue

            latest_payer, latest_entry = max(
                history.items(), key=lambda x: x[1]["M"]["date"]["S"]
            )
            latest_info = {
                "payer": latest_payer,
                "amount": float(latest_entry["M"]["amount"]["N"]),
                "date": latest_entry["M"]["date"]["S"],
            }

            message = {"action": "update", "data": latest_info}
            connections = connections_table.scan(
                FilterExpression="bill_id = :bill_id",
                ExpressionAttributeValues={":bill_id": bill_id},
            ).get("Items", [])

            for connection in connections:
                connection_id = connection["connection_id"]
                send_message(connection_id, message)

    return {"statusCode": 200, "body": "Messages sent."}

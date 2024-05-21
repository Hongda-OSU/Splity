import json
import boto3

dynamodb = boto3.resource("dynamodb")
connections_table = dynamodb.Table("SplityWebSocketConnection")


def lambda_handler(event, context):
    connection_id = event["requestContext"]["connectionId"]
    body = json.loads(event["body"])

    if body.get("action") == "set_bill_id" and "bill_id" in body:
        bill_id = body["bill_id"]
        connections_table.update_item(
            Key={"connection_id": connection_id},
            UpdateExpression="SET bill_id = :bill_id",
            ExpressionAttributeValues={":bill_id": bill_id},
        )
        return {"statusCode": 200, "body": "bill_id set"}

    return {"statusCode": 400, "body": "Invalid request"}

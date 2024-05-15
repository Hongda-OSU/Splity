import json
import boto3

dynamodb = boto3.resource("dynamodb")
connections_table = dynamodb.Table("SplityWebSocketConnection")


def lambda_handler(event, context):
    connection_id = event["requestContext"]["connectionId"]
    connections_table.delete_item(Key={"connection_id": connection_id})
    return {"statusCode": 200, "body": "Disconnected"}

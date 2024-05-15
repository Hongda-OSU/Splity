import json
import boto3

WEBSOCKET_API_ENDPOINT = (
    "wss://9wjcu78y9i.execute-api.us-east-2.amazonaws.com/production/"
)
client = boto3.client("apigatewaymanagementapi", endpoint_url=WEBSOCKET_API_ENDPOINT)
dynamodb = boto3.resource("dynamodb")
connections_table = dynamodb.Table("SplityWebSocketConnection")


def lambda_handler(event, context):
    for record in event["Records"]:
        if record["eventName"] in ["INSERT", "MODIFY"]:
            new_image = record["dynamodb"]["NewImage"]
            message = {"action": "update", "data": new_image}
            connection_ids = get_all_connection_ids()
            for connection_id in connection_ids:
                send_message(event, connection_id, message)
    return {"statusCode": 200}


def get_all_connection_ids():
    response = connections_table.scan()
    return [item["connection_id"] for item in response["Items"]]


def send_message(event, connection_id, message):
    try:
        client.post_to_connection(ConnectionId=connection_id, Data=json.dumps(message))
    except client.exceptions.GoneException:
        connections_table.delete_item(Key={"connection_id": connection_id})

    for record in event["Records"]:
        if record["eventName"] in ["INSERT", "MODIFY"]:
            new_image = record["dynamodb"]["NewImage"]
            message = {"action": "update", "data": new_image}
            connection_ids = get_all_connection_ids()
            for connection_id in connection_ids:
                send_message(connection_id, message)
    return {"statusCode": 200}

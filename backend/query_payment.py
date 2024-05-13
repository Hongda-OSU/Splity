import json
import boto3
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('PaymentSessions')
    
    session_id = event['session_id']
    password = event['password']

    try:
        response = table.get_item(Key={'session_id': session_id})
        item = response.get('Item')
        if not item:
            return {'statusCode': 404, 'body': json.dumps('Session not found')}

        if item['password'] != password:
            return {'statusCode': 401, 'body': json.dumps('Unauthorized: Incorrect password')}

        payment_info = {
            'session_id': session_id,
            'bill_description': item.get('bill_description', {}),
            'history': item.get('history', {})
        }

        return {
            'statusCode': 200,
            'body': json.dumps(payment_info)
        }
    except ClientError as e:
        print(e.response['Error']['Message'])
        return {
            'statusCode': 500,
            'body': json.dumps('Error accessing payment information')
        }

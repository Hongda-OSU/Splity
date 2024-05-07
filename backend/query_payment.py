import json
import boto3
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    # Connect to DynamoDB
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('PaymentSessions')
    
    # Get data from the event
    session_id = event['session_id']
    password = event['password']

    try:
        # Retrieve the session item from DynamoDB
        response = table.get_item(Key={'session_id': session_id})
        item = response.get('Item')
        if not item:
            return {'statusCode': 404, 'body': json.dumps('Session not found')}

        # Check if the provided password matches the one in the database
        if item['password'] != password:
            return {'statusCode': 401, 'body': json.dumps('Unauthorized: Incorrect password')}

        # Prepare the information to be returned
        payment_info = {
            'session_id': session_id,
            'bill_description': bill_description, 
            'history': item.get('history', {})
        }

        # Return success message
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

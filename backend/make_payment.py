import json
import boto3
from botocore.exceptions import ClientError
from datetime import datetime

def lambda_handler(event, context):
    # Connect to DynamoDB
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('PaymentSessions')
    
    # Get data from the event
    session_id = event['session_id']
    provided_password = event['password']
    member_name = event['member_name']

    try:
        # Retrieve the session item from DynamoDB
        response = table.get_item(Key={'session_id': session_id})
        item = response.get('Item')
        # Check if there is a related session id recorded
        if not item:
            return {'statusCode': 404, 'body': json.dumps('Session not found')}

        # Check if the provided password matches the one in the database
        if item['password'] != provided_password:
            return {'statusCode': 401, 'body': json.dumps('Unauthorized: Incorrect password')}

        # Update the date and status in the history for the member
        if member_name in item['history']:
            return {'statusCode': 404, 'body': json.dumps('Payment already made')}
        else:
            history = item.get('history', {})
            history[member_name] = {
                'date': datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                'status': 'completed'
            }
        
        # Update the item in DynamoDB
        table.update_item(
            Key={'session_id': session_id},
            UpdateExpression='SET history = :val',
            ExpressionAttributeValues={':val': member_history}
        )
        
        # Return success message to FE
        return {
            'statusCode': 200,
            'body': json.dumps(f'Payment completed successfully for {member_name}')
        }
    except ClientError as e:
        print(e.response['Error']['Message'])
        return {
            'statusCode': 500,
            'body': json.dumps('Error processing payment')
        }


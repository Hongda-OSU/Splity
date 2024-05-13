import json
import boto3
from botocore.exceptions import ClientError
from datetime import datetime, timezone, timedelta

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('PaymentSessions')
    
    session_id = event['session_id']
    provided_password = event['password']
    member_name = event['member_name']

    try:
        response = table.get_item(Key={'session_id': session_id})
        item = response.get('Item')
        if not item:
            return {'statusCode': 404, 'body': json.dumps('Session not found')}

        if item['password'] != provided_password:
            return {'statusCode': 401, 'body': json.dumps('Unauthorized: Incorrect password')}

        history = item.get('history', {})
        
        if member_name in history:
            return {'statusCode': 400, 'body': json.dumps('Payment already made for this member')}
        
        current_time = datetime.now(timezone(timedelta(hours=-5)))
        
        history[member_name] = {
            'date': current_time.strftime("%Y-%m-%d %H:%M:%S"),
            'status': 'completed'
        }
        
        table.update_item(
            Key={'session_id': session_id},
            UpdateExpression='SET history = :val',
            ExpressionAttributeValues={':val': history}
        )
        
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
import json
import boto3
from botocore.exceptions import ClientError
import random
from decimal import Decimal

def generate_unique_id(dynamodb):
    table = dynamodb.Table('PaymentSessions')
    while True:
        unique_id = str(random.randint(1000, 9999))
        try:
            response = table.get_item(Key={'session_id': unique_id})
            if 'Item' not in response:
                return unique_id
        except ClientError as e:
            print(e.response['Error']['Message'])
            raise

def lambda_handler(event, context):
    # Connect to DynamoDB
    dynamodb = boto3.resource('dynamodb')
    
    # Generate a unique session ID
    session_id = generate_unique_id(dynamodb)
    
    # Get data from the event
    team_leader = event['team_leader']
    total_price = Decimal(event['total_price'])
    password = event['password']
    member_count = event['num_members']
    bill_description = event["bill_description"]

    # Calculate individual member amount
    individual_amount = total_price / member_count if member_count else 0

    # Initialize the history as placeholder
    history = {}
    
    # Put the item in the DynamoDB table
    table = dynamodb.Table('PaymentSessions')
    try:
        table.put_item(Item={
            'session_id': session_id,
            'team_leader': team_leader,
            'total_price': total_price,
            'password': password,
            'member_count': member_count,
            'bill_description': bill_description,
            'history': history
        })
        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'Session created successfully',
                'session_id': session_id 
            })
        }
    except ClientError as e:
        print(e.response['Error']['Message'])
        return {
            'statusCode': 500,
            'body': json.dumps('Error creating session')
        }

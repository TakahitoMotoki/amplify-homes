import json
import datetime
import boto3
from boto3.dynamodb.conditions import Key, Attr
import random, string

# DynamoDB object
dynamoDB = boto3.resource('dynamodb')

# Table for fetchRental
rentalTable = dynamoDB.Table('Rental-j2gchw5g4zhf5nhp4oq4w3sgaq-devi')

def handler(event, context):
    rental_id = event["pathParameters"]["proxy"]
    
    # Rentalテーブルのスキャン 
    try:
        output = rentalTable.query(
            KeyConditionExpression=Key("id").eq(rental_id)  
        )
    except Exception as e:
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('Error:' + str(e))
        }
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(str(output))
    }


import json
import datetime
import boto3
from boto3.dynamodb.conditions import Key, Attr
import random, string

# DynamoDB object
dynamoDB = boto3.resource('dynamodb')

# Table for fetchRental
rentalTable = dynamoDB.Table('Rental-devi')

def handler(event, context):
    # Attr('proceeding') のMax, Min設定
    MIN_PROCEEDING = 1
    MAX_PROCEEDING = 4

    # event: String を payload: JSON に変換
    user_id = str(event["pathParameters"]["proxy"])
    
    output = {}

    # user_id(Partition Key)を使ってRentalテーブルをスキャン 
    try:
        # queryData_Farm = farmTable.scan()
        queryData_Rental = rentalTable.query(
            KeyConditionExpression=Key("user_id").eq(user_id),
            FilterExpression=Attr("proceeding").between(MIN_PROCEEDING, MAX_PROCEEDING)
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

    # 抽出したデータを加工し、outputに格納
    for data in queryData_Rental["Items"]:
        output[data["id"]] = {
            "id"                  : str(data["id"]),
            "farm_id"             : str(data["farm_id"]),
            "vegetable_id"        : str(data["vegetable_id"]),
            "proceeding"          : str(data["proceeding"]),
            "cost_plan"           : str(data["cost_plan"]),
            "init_soilmeasurement": str(data["init_soilmeasurement"]),
            "alias"               : str(data["alias"]),
            "start_ts"            : str(data["start_ts"])
        }

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(output)
    }

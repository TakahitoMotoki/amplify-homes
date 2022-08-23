import json
import datetime
import boto3
from boto3.dynamodb.conditions import Key, Attr
import random, string

# DynamoDB Object
dynamoDB = boto3.resource('dynamodb')

# DynamoDB Client
dynamoDBClient = boto3.client("dynamodb")

# Table for createRental
farmTable = dynamoDB.Table('Farm-j2gchw5g4zhf5nhp4oq4w3sgaq-devi')

# createRental: Generate random string
def randomStr(n):
      return ''.join(random.choices(string.ascii_letters + string.digits, k=n))

# createRental: Generate ID for DynamoDB
def genIDForDynamoDB():
    # ID Example: d6a72ed7-d439-4f61-8047-2c5a26ad9146
    return randomStr(8) + '-' + randomStr(4) + '-' + randomStr(4) + '-' + randomStr(4) + '-' + randomStr(12)

def handler(event, context):
    # event: String を payload: JSON に変換
    payload     = json.loads(event["body"])

    # Rental作成のためのデータ抽出
    tableName   = "Rental-devi"
    ID          = genIDForDynamoDB().lower()
    now         = datetime.datetime.now()
    startTime_N = int(now.timestamp())
    startTime_S = str(now.strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3]) + "Z"
    userID      = payload['user_id']
    farmID      = payload['farm_id']
    costPlan    = payload['cost_plan']
    alias       = payload['alias']

    # Rentalの新しいデータ作成
    newRecord = {
        "id": {
            "S": str(ID)
        },
        "alias": {
            "S": str(alias)
        },
        "cost_plan": {
            "N": str(int(costPlan))
        },
        "createdAt": {
            "S": str(startTime_S)
        },
        "end_ts": {
            "N": "0"
        },
        "farm_id": {
            "S": str(farmID)
        },
        "init_soilmeasurement": {
            "BOOL": False
        },
        "proceeding": {
            "N": "1"
        },
        "result_harvest": {
            "N": "0"
        },
        "result_rank": {
            "S": "N/A"
        },
        "start_ts": {
            "N": str(startTime_N)
        },
        "updatedAt": {
            "S": str(startTime_S)
        },
        "user_id": {
            "S": str(userID)
        },
        "vegetable_id": {
            "S": ""
        },
        "_deleted": {
            "BOOL": False
        },
        "_lastChangedAt": {
            "N": str(startTime_N)
        },
        "_ttl": {
            "N": str(startTime_N)
        },
        "_version": {
            "N": "2"
        },
        "__typename": {
            "S": "Rental"
        }
    }

    # Rentalデータの作成
    try:
        dynamoDBClient.put_item(TableName=tableName, Item=newRecord)
    except Exception as e:
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('Error: ' + str(e))
        }
        
    # Farmテーブルのis_availableをFalseに変更する
    try:
        option = {
            'Key': {'id': str(farmID)},
            'UpdateExpression': 'set #is_available = :is_available',
            'ExpressionAttributeNames': {
                '#is_available': 'is_available'
            },
            'ExpressionAttributeValues': {
                ':is_available': False
            }
        }
        farmTable.update_item(**option)
    except Exception as e:
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('Error: ' + str(e))
        }
        
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(newRecord)
    }

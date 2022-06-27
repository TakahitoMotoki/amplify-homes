import json
import datetime
import boto3

# =+=+=+= DynamoDB Settings =+=+=+= #
dynamoDB = boto3.resource('dynamodb')
farmTable = dynamoDB.Table('Farm-j2gchw5g4zhf5nhp4oq4w3sgaq-devi')
farmComTable = dynamoDB.Table('FarmCom-j2gchw5g4zhf5nhp4oq4w3sgaq-devi')

def handler(event, context):
    print('received event:')
    print(event)

    output = {}
    
    try:
        queryData = farmTable.scan()
    except Exception as e:
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps(str(e))
        }

    for data in queryData["Items"]:
        if data["is_available"]:
            output[data["id"]] = {
                "name": str(data["name"]),
                "length": str(data["length"]),
                "width": str(data["width"]),
                "area": str(data["area"]),
                "farmcom_id": str(data["farmcom_id"])
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

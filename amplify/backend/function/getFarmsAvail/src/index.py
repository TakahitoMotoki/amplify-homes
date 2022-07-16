import json
import datetime
import boto3

# =+=+=+= DynamoDB Settings =+=+=+= #
dynamoDB = boto3.resource('dynamodb')
farmTable = dynamoDB.Table('Farm-j2gchw5g4zhf5nhp4oq4w3sgaq-devi')
farmComTable = dynamoDB.Table('FarmCom-j2gchw5g4zhf5nhp4oq4w3sgaq-devi')

def handler(event, context):
    output = { "farm": {}, "farmcom": {}}
    farmComIDList = []

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
            'body': json.dumps('Error in getFarmAvail')
        }

    for data in queryData["Items"]:
        if data["is_available"]:
            output["farm"][data["id"]] = {
                "name": str(data["name"]),
                "length": str(data["length"]),
                "width": str(data["width"]),
                "area": str(data["area"]),
                "farmcom_id": str(data["farmcom_id"])
            }
            
            if data["farmcom_id"] not in farmComIDList: 
                farmComIDList.append(data["farmcom_id"])

    for farmComID in farmComIDList:
        queryData = farmComTable.query(
            KeyConditionExpression = Key('id').eq(farmComID) 
        )
    
        output["farmcom"][farmComID] = {
            "temperature": str(queryData["Items"][0]["temperature"]),
            "humidity": str(queryData["Items"][0]["humidity"]),
            "precipitation": str(queryData["Items"][0]["precipitation"]),
            "vol_of_sunshine": str(queryData["Items"][0]["vol_of_sunshine"])
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


import json
import datetime
import boto3

# =+=+=+= DynamoDB Settings =+=+=+= #
dynamoDB = boto3.resource('dynamodb')
farmTable = dynamoDB.Table('Farm-j2gchw5g4zhf5nhp4oq4w3sgaq-devi')
farmComTable = dynamoDB.Table('FarmCom-j2gchw5g4zhf5nhp4oq4w3sgaq-devi')

def handler(event, context):
    output = {}
    availFarmList = {}
    farmComIDList = []
 
    # Farmテーブルのスキャン 
    try:
        queryData_Farm = farmTable.scan()
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
       
    for data in queryData_Farm["Items"]:
        # FarmがAvailableだった場合、1.farmComIDListへの追加、2.FarmComIDごとのAvail Farmsリスト作成
        if data["is_available"]:
            farmComID = data["farmcom_id"]
            # 1.farmComIDListへの追加
            if data["farmcom_id"] not in farmComIDList: 
                farmComIDList.append(farmComID)
                availFarmList[farmComID] = {}
            
            #2.FarmComIDごとのavailFarmList作成
            availFarmList[farmComID][data["id"]] = {
                "id": str(data["id"]),
                "name": str(data["name"]),
                "fee": str(1500), # <== TEST ==>
                "last_used": str("2022-12-17") # <== TEST ==>
            }

    try:
        queryData_FarmCom = farmComTable.scan()
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

    for data in queryData_FarmCom["Items"]:
        farmComID = data["id"]
        if farmComID in farmComIDList:
            output[farmComID] = {
                "name": str(data["name"]),
                "temperature": str(data["temperature"]),
                "humidity": str(data["humidity"]),
                "precipitation": str(data["precipitation"]),
                "vol_of_sunshine": str(data["vol_of_sunshine"]),
                "country": str(data["country"]),
                "city": str(data["city"]),
                "address": str(data["address"]),
                "is_organic": str(data["is_organic"]),
                "avail_farms": availFarmList[farmComID]
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


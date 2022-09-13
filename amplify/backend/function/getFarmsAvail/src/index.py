import json
import datetime
import boto3

# =+=+=+= DynamoDB Settings =+=+=+= #
dynamoDB = boto3.resource('dynamodb')
farmTable = dynamoDB.Table('Farm-j2gchw5g4zhf5nhp4oq4w3sgaq-devi')
farmComTable = dynamoDB.Table('FarmCom-j2gchw5g4zhf5nhp4oq4w3sgaq-devi')

# getFarmAvail 220906
def handler(event, context):
    # Case 1. Nullの場合はFarmComテーブルを検索
    # Case 2. 値がある場合はFarmテーブルのうちAvailableを検索
    if event["pathParameters"] is None:
        CASE = 1
    else:
        FARMCOM_ID = str(event["pathParameters"]["proxy"])
        CASE = 2
        
    output = {}

    # テーブルのスキャン
    try:
        if CASE == 1:
            # Case 1. FarmComテーブルのスキャン 
            queryData_FarmCom = farmComTable.scan()
        elif CASE == 2:
            # Case 2. Farmテーブルのスキャン 
            queryData_Farm = farmTable.scan()
        else:
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
                },
                'body': json.dumps('[getFarmAvail] - ERROR: CASE is not set!')
            }
    except Exception as e:
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('[getFarmAvail] - ERROR: Table scan is failed!')
        }
    
    # Case 1. FarmComリスト作成   
    if CASE == 1:
        for data in queryData_FarmCom["Items"]:
            farmcom_id = data["id"]
            
            output[farmcom_id] = {
                "name"           : str(data["name"]),
                "temperature"    : str(data["temperature"]),
                "humidity"       : str(data["humidity"]),
                "precipitation"  : str(data["precipitation"]),
                "vol_of_sunshine": str(data["vol_of_sunshine"]),
                "country"        : str(data["country"]),
                "city"           : str(data["city"]),
                "address"        : str(data["address"]),
                "is_organic"     : str(data["is_organic"]),
                "farm_number"    : str(data["farm_number"]),
                "avail_number"   : str(data["avail_number"]),
                "base_price"     : str(data["base_price"]),
            }
            
    # Case 2. AvailableなFarmリスト作成   
    if CASE == 2:        
        for data in queryData_Farm["Items"]:
            if FARMCOM_ID == data["farmcom_id"]:
                if data["is_available"]:
                    output[data["id"]] = {
                        "name"             : str(data["name"]),
                        "length"           : str(data["length"]),
                        "width"            : str(data["width"]),
                        "area"             : str(data["area"]),
                        "base_price_number": str(data["base_price_number"]),                    
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

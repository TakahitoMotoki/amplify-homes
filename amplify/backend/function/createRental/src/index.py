import json

def handler(event, context):
    user_id = context.identity.cognito_identity_pool_id

    test_item = {
        "event": str(event),
        "user_id": str(user_id)
    }

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(test_item)
    }

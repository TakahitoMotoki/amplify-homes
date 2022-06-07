// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Farm, FarmCom } = initSchema(schema);

export {
  Farm,
  FarmCom
};
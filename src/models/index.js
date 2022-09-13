// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Farm, FarmCom } = initSchema(schema);

export {
  User,
  Farm,
  FarmCom
};
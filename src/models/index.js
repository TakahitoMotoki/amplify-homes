// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rental, User, Farm, FarmCom } = initSchema(schema);

export {
  Rental,
  User,
  Farm,
  FarmCom
};
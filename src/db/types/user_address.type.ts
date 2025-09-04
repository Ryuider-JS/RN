import { Tables, TablesInsert, TablesUpdate } from '../database.type';
import { CamelCaseObject } from './utils';

export type TSUserAddress = Tables<'user_address'>;
export type TCUserAddress = CamelCaseObject<TSUserAddress>;
export type TSCreateUserAddress = TablesInsert<'user_address'>;
export type TCCreateUserAddress = CamelCaseObject<TSCreateUserAddress>;
export type TSUpdateUserAddress = TablesUpdate<'user_address'>;
export type TCUpdateUserAddress = CamelCaseObject<TSUpdateUserAddress>;

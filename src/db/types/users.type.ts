import { Tables, TablesInsert, TablesUpdate } from '../database.type';
import { CamelCaseObject } from './utils';

export type TSUser = Tables<'users'>;
export type TCUser = CamelCaseObject<TSUser>;
export type TSCreateUser = TablesInsert<'users'>;
export type TCCreateUser = CamelCaseObject<TSCreateUser>;
export type TSUpdateUser = TablesUpdate<'users'>;
export type TCUpdateUser = CamelCaseObject<TSUpdateUser>;

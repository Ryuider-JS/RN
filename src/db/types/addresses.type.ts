import { Tables, TablesInsert, TablesUpdate } from '../database.type';
import { CamelCaseObject } from './utils';

export type TSAddress = Tables<'addresses'>;
export type TCAddress = CamelCaseObject<TSAddress>;
export type TSCreateAddress = TablesInsert<'addresses'>;
export type TCCreateAddress = CamelCaseObject<TSCreateAddress>;
export type TSUpdateAddress = TablesUpdate<'addresses'>;
export type TCUpdateAddress = CamelCaseObject<TSUpdateAddress>;

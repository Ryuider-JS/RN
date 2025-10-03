import { TCAuthUser } from '@/db/types/users.type';

export interface IProfileLoginCommon {
  data: TCAuthUser | null | undefined;
}

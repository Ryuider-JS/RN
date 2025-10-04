import { TCUser } from '@/db/types/users.type';

export interface IProfileLoginCommonProps {
  data: TCUser | null | undefined;
}

export interface IUserGetUserProps {
  kakaoId: string;
}

export interface IUseGetUserResults extends IProfileLoginCommonProps {
  isLoading: boolean;
}

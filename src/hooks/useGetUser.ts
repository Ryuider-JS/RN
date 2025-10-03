import { useGetAuthUserQuery } from '@/queries/useGetAuthUserQuery';
import { useGetUserWithKakaoIdQuery } from '@/queries/useGetUserWithKakaoIdQuery';
import { IUseGetUserResults } from '@/types/profile.type';

export const useGetUser = (): IUseGetUserResults => {
  const { data: authUserData, isLoading: authUserLoading } =
    useGetAuthUserQuery();
  console.log(authUserData);

  const { data, isLoading: userWithKakaoIdLoading } =
    useGetUserWithKakaoIdQuery(authUserData?.user_metadata.provider_id);

  return { data, isLoading: authUserLoading || userWithKakaoIdLoading };
};

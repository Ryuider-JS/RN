import { useGetAuthUserQuery } from '@/queries/useGetAuthUserQuery';
import { useGetUserWithIdQuery } from '@/queries/useGetUserWithIdQuery';
import { IUseGetUserResults } from '@/types/profile.type';

export const useGetUser = (): IUseGetUserResults => {
  const { data: authUserData, isLoading: authUserLoading } =
    useGetAuthUserQuery();

  const { data, isLoading: userWithKakaoIdLoading } = useGetUserWithIdQuery(
    authUserData?.user_metadata.user_id,
  );

  return { data, isLoading: authUserLoading || userWithKakaoIdLoading };
};

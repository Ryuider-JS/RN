import { useQuery } from '@tanstack/react-query';

import { TCUser } from '@/db/types/users.type';
import { getUserWithKakaoId } from '@/repository/user.repository';

export const useGetUserWithKakaoIdQuery = (kakaoId?: string) => {
  return useQuery<TCUser | null>({
    queryKey: ['user', kakaoId],
    queryFn: async () => {
      return getUserWithKakaoId(kakaoId!);
    },
    enabled: !!kakaoId,
  });
};

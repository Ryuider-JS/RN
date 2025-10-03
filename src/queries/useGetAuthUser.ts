import { useQuery } from '@tanstack/react-query';

import { TCAuthUser } from '@/db/types/users.type';
import { getAuthUser } from '@/repository/auth.repository';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const useGetAuthQuery = () => {
  return useQuery<TCAuthUser | null>({
    queryKey: ['auth'],
    queryFn: async () => {
      await delay(1000); // 1초 지연
      return getAuthUser();
    },
  });
};

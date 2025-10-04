import { useQuery } from '@tanstack/react-query';

import { TCUser } from '@/db/types/users.type';
import { getUserWithId } from '@/repository/user.repository';

export const useGetUserWithIdQuery = (id?: string) => {
  return useQuery<TCUser | null>({
    queryKey: ['user', id],
    queryFn: async () => {
      return getUserWithId('id', id!);
    },
    enabled: !!id,
  });
};

import { User } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';

import { getAuthUser } from '@/repository/auth.repository';

export const useGetAuthUserQuery = () => {
  return useQuery<User | null>({
    queryKey: ['auth'],
    queryFn: async () => {
      return getAuthUser();
    },
    staleTime: Infinity,
  });
};

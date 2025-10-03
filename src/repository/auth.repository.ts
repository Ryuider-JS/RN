import { TCAuthUser } from '@/db/types/users.type';
import { snakeToCamelObject } from '@/db/types/utils';
import { supabase } from '@/libs/supabase';

export const getAuthSession = async () => {
  const { data } = await supabase.auth.getSession();

  console.log(data);
};

export const getAuthUser = async (): Promise<TCAuthUser | null> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return snakeToCamelObject(user);
};

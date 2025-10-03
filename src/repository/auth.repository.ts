import { User } from '@supabase/supabase-js';

import { supabase } from '@/libs/supabase';

export const getAuthSession = async () => {
  const { data } = await supabase.auth.getSession();

  console.log(data);
};

export const getAuthUser = async (): Promise<User> => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    throw error;
  }
  return user;
};

export const updateSessionData = async (user_id: string) => {
  await supabase.auth.updateUser({
    data: {
      user_id,
    },
  });
};

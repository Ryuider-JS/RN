import { User } from '@supabase/supabase-js';

import { supabase } from '@/libs/supabase';

export const getAuthSession = async () => {
  const { data } = await supabase.auth.getSession();

  console.log(data);
};

export const getAuthUser = async (): Promise<User | null> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

// export const updateSessionDataWithAdmin = async (userId: string) => {
//   const user = await getAuthUser();
//   const { error } = await supabase.auth.admin.updateUserById(userId, {
//     ...user,
//     user_metadata: {
//       ...user?.user_metadata,
//       user_id: userId,
//     },
//   });
// };

import { AuthTokenResponse } from '@supabase/supabase-js';

import { TCCreateUser, TCUser, TSUser } from '@/db/types/users.type';
import { camelToSnakeObject, snakeToCamelObject } from '@/db/types/utils';
import { supabase } from '@/libs/supabase';

export const getUserWithKakaoId = async (
  kakaoId: string,
): Promise<TCUser | null> => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('kakao_id', kakaoId)
      .maybeSingle<TSUser | null>();
    if (error) {
      throw error;
    }
    return snakeToCamelObject(data);
  } catch (error) {
    console.error('getUserWithKakaoId', error);
    return null;
  }
};

export const getSignInWithKakaoId = async (
  token: string,
): Promise<AuthTokenResponse> => {
  return await supabase.auth.signInWithIdToken({
    provider: 'kakao',
    token,
  });
};

export const createUser = async (userData: TCCreateUser): Promise<string> => {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert(camelToSnakeObject(userData))
      .select('id')
      .single<{ id: string }>();
    if (error) throw error;
    return data.id;
  } catch (error) {
    console.error('createUser', error);
    return '';
  }
};

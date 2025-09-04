import { TCCreateUserAddress } from '@/db/types/user_address.type';
import { camelToSnakeObject } from '@/db/types/utils';
import { supabase } from '@/libs/supabase';

export const createUserAddress = async (
  userAddressJoinArray: TCCreateUserAddress[],
): Promise<boolean | null> => {
  try {
    const { error } = await supabase
      .from('user_address')
      .insert(camelToSnakeObject(userAddressJoinArray));
    if (error) {
      throw error;
    }
    return true;
  } catch (error) {
    console.error('createUserAddress', error);
    return null;
  }
};

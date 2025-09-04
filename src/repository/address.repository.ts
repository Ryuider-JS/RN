import { TCCreateAddress } from '@/db/types/addresses.type';
import { camelToSnakeObject } from '@/db/types/utils';
import { supabase } from '@/libs/supabase';

export const createAddress = async (
  userAddressData: TCCreateAddress[],
): Promise<number[]> => {
  const { data, error } = await supabase
    .from('addresses')
    .insert(camelToSnakeObject(userAddressData))
    .select('id');

  if (error) {
    return [];
  }
  return data.map(({ id }) => id);
};

import { Text, View } from 'react-native';

import { IProfileLoginCommonProps } from '@/types/profile.type';

const ProfileLoginCommon = ({ data }: IProfileLoginCommonProps) => {
  console.log(data);
  return data ? <View /> : <Text>2</Text>;
};

export default ProfileLoginCommon;

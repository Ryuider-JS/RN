import { Text, View } from 'react-native';

import { IProfileLoginCommonProps } from '@/types/profile.type';

const ProfileLoginCommon = ({ data }: IProfileLoginCommonProps) => {
  console.log(data);
  // Todo: session에 DB User PK 저장하기
  return data ? <View /> : <Text>2</Text>;
};

export default ProfileLoginCommon;

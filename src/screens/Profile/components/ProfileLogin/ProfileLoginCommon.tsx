import { Image, Text, View } from 'react-native';

import { IProfileLoginCommonProps } from '@/types/profile.type';

const ProfileLoginCommon = ({ data }: IProfileLoginCommonProps) => {
  return data ? (
    <View className="flex-row items-center">
      <Image
        source={{ uri: data.profileImageUrl ?? '' }}
        className="rounded-full size-14"
      />
      <Text>{data.name}</Text>
    </View>
  ) : (
    <Text>2</Text>
  );
};

export default ProfileLoginCommon;

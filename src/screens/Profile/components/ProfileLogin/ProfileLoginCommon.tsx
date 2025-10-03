import { Image, Text, View } from 'react-native';

import { PText } from '@/components/fonts';
import Icon from '@/components/icons';
import { IProfileLoginCommonProps } from '@/types/profile.type';

const ProfileLoginCommon = ({ data }: IProfileLoginCommonProps) => {
  const uri =
    !data || !data.profileImageUrl || data.profileImageUrl.includes('default');
  return data ? (
    <View className="flex-row gap-6">
      {!uri ? (
        <Image
          source={{ uri: data.profileImageUrl ?? '' }}
          className="rounded-full size-14"
        />
      ) : (
        <View className="justify-center items-center bg-orange-300 rounded-full size-14">
          <Icon name="account" size={24} color={'#ffedd5'} />
        </View>
      )}
      <View className="flex-row">
        <PText className="text-2xl font-semibold">{data.name}</PText>
        <PText className="text-2xl">님 반갑습니다</PText>
      </View>
    </View>
  ) : (
    <Text>2</Text>
  );
};

export default ProfileLoginCommon;

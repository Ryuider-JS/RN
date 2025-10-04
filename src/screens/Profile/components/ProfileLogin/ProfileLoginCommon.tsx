import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Image, Text, View } from 'react-native';

import { PText } from '@/components/fonts';
import { COLOR } from '@/constants/color.const';
import { IProfileLoginCommonProps } from '@/types/profile.type';

const ProfileLoginCommon = ({ data }: IProfileLoginCommonProps) => {
  const uri =
    !data || !data.profileImageUrl || data.profileImageUrl.includes('default');
  return (
    <>
      {data ? (
        <View className="flex-row gap-6">
          {!uri ? (
            <Image
              source={{ uri: data.profileImageUrl ?? '' }}
              className="rounded-full size-14"
            />
          ) : (
            <View className="justify-center items-center bg-orange-200 rounded-full size-14">
              <MaterialDesignIcons
                name="account"
                size={24}
                color={COLOR.PRIMARY_400}
              />
            </View>
          )}
          <View className="flex-row">
            <PText className="text-2xl font-semibold">{data.name}</PText>
            <PText className="text-2xl">님 반갑습니다</PText>
          </View>
        </View>
      ) : (
        <Text>2</Text>
      )}
    </>
  );
};

export default ProfileLoginCommon;

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Image, View } from 'react-native';

import { PText } from '@/components/fonts';
import { COLOR } from '@/constants/color.const';
import { ICON } from '@/constants/icon.const';
import { SIZE } from '@/constants/size.const';
import { IProfileLoginCommonProps } from '@/types/profile.type';

const ProfileLoginCommon = ({ data }: IProfileLoginCommonProps) => {
  const uri =
    !data || !data.profileImageUrl || data.profileImageUrl.includes('default');

  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-row gap-6 items-center">
        {!uri ? (
          <Image
            source={{ uri: data.profileImageUrl ?? '' }}
            className="rounded-full size-14"
          />
        ) : (
          <View className="justify-center items-center bg-orange-200 rounded-full size-14">
            <MaterialDesignIcons
              name={ICON.USER}
              size={SIZE.XL}
              color={COLOR.PRIMARY_400}
            />
          </View>
        )}
        <View className="flex-row">
          <PText className="text-2xl font-semibold">{data?.name || 1}</PText>
          <PText className="text-2xl">님 반갑습니다</PText>
        </View>
      </View>
      )
      <MaterialDesignIcons
        name={ICON.RIGHT}
        size={SIZE.XXXL}
        color={COLOR.GRAY_400}
      />
    </View>
  );
};

export default ProfileLoginCommon;

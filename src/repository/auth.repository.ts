import {
  KakaoLoginToken,
  KakaoShippingAddressResult,
  KakaoUser,
  login,
  me,
  shippingAddresses,
} from '@react-native-kakao/user';

import { TCCreateAddress } from '@/db/types/addresses.type';
import { TCCreateUser } from '@/db/types/users.type';
import { formatPhoneNumber } from '@/utils/format/formatPhoneNumber';

import { getSignInWithKakaoId } from './user.repository';

export const kakaoLoginWithAuth = async (): Promise<string | undefined> => {
  const { idToken: token }: KakaoLoginToken = await login();

  if (!token) {
    console.log('idToken 없어요');
    return;
  }

  const { data } = await getSignInWithKakaoId(token);
  return data.user?.user_metadata.provider_id;
};

export const getKakaoUserData = async () => {
  const {
    id: kakaoId,
    email,
    name,
    nickname,
    phoneNumber,
    profileImageUrl,
  }: KakaoUser = await me();

  const userData: TCCreateUser = {
    kakaoId,
    name: name || nickname,
    phoneNumber: formatPhoneNumber(phoneNumber),
    email,
    profileImageUrl,
  };

  const { shippingAddresses: addressArray }: KakaoShippingAddressResult =
    await shippingAddresses();

  const userAddressData: TCCreateAddress[] = addressArray.map(
    ({
      receiverName,
      receiverPhoneNumber1,
      receiverPhoneNumber2,
      baseAddress,
      detailAddress,
      name: addressName,
    }) => {
      const receiverPhoneNumber = formatPhoneNumber(
        receiverPhoneNumber2 || receiverPhoneNumber1 || '',
      );
      return {
        addressName,
        receiverName: receiverName || '',
        receiverPhoneNumber,
        receiverAddress: `${baseAddress ?? ''} ${detailAddress ?? ''}`.trim(),
      };
    },
  );

  const userAddressIsDefaultArray = addressArray.map(
    ({ isDefault }) => isDefault,
  );

  return { userData, userAddressData, userAddressIsDefaultArray };
};

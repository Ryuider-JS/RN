import { createAddress } from '@/repository/address.repository';
import {
  getKakaoUserData,
  kakaoLoginWithAuth,
} from '@/repository/auth.repository';
import { createUser, getUserWithKakaoId } from '@/repository/user.repository';
import { createUserAddress } from '@/repository/user_address.repository';

export const loginKakao = async () => {
  const kakaoId = await kakaoLoginWithAuth();
  if (!kakaoId) {
    return null;
  }
  const data = await getUserWithKakaoId(kakaoId);
  if (!data) {
    const { userData, userAddressData, userAddressIsDefaultArray } =
      await getKakaoUserData();

    const userId = await createUser(userData);
    const addressIdArray = await createAddress(userAddressData);

    const userAddressJoinArray = addressIdArray.map((addressId, idx) => {
      return {
        userId,
        addressId,
        isDefault: userAddressIsDefaultArray[idx],
      };
    });

    const result = await createUserAddress(userAddressJoinArray);
    console.log(result);
  }
};

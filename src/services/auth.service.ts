import { createAddress } from '@/repository/address.repository';
import { updateSessionData } from '@/repository/auth.repository';
import { createUser, getUserWithId } from '@/repository/user.repository';
import { createUserAddress } from '@/repository/user_address.repository';
import { getKakaoUserData, kakaoLoginWithAuth } from '@/services/kakao.service';

export const loginKakao = async () => {
  const kakaoId = await kakaoLoginWithAuth();
  if (!kakaoId) {
    return null;
  }
  const data = await getUserWithId('kakao_id', kakaoId);
  let id: string = '';

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

    await createUserAddress(userAddressJoinArray);

    id = userId;
  } else {
    id = data.id;
  }

  await updateSessionData(id);
};

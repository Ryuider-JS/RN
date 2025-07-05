import { loginWithKakaoAccount } from '@react-native-seoul/kakao-login';

export const useKakaoLogin = () => {
  const socialLogin = async () => {
    try {
      const result = await loginWithKakaoAccount();
      console.log(result);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  return { socialLogin };
};

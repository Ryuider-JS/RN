import {
  KakaoLoginToken,
  login,
  me,
  scopes,
  shippingAddresses,
} from '@react-native-kakao/user';

import { supabase } from '@/libs/supabase';

const useSocialLogin = () => {
  const kakaoLogin = async () => {
    const { idToken: token }: KakaoLoginToken = await login();

    if (!token) {
      console.log('idToken 없어요');
      return;
    }
    const meData = await me();
    const scope = await scopes();
    const address = await shippingAddresses();

    const data = await supabase.auth.signInWithIdToken({
      provider: 'kakao',
      token,
    });

    console.log('data', data);
    console.log('address', address);
    console.log('meData', meData);
    console.log('scope', scope);
  };

  return { kakaoLogin };
};

export default useSocialLogin;

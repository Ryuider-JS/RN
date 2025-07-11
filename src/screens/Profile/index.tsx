import { Button, View } from 'react-native';

import useSocialLogin from './hooks/useSocialLogin';

const ProfileScreen = () => {
  const { kakaoLogin } = useSocialLogin();

  return (
    <View className="flex flex-1 justify-center items-center">
      <Button onPress={kakaoLogin} title="카카오 로그인" />
    </View>
  );
};
export default ProfileScreen;

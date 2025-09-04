import { logout } from '@react-native-kakao/user';
import { Button, View } from 'react-native';

import { loginKakao } from '@/services/auth.service';

const ProfileScreen = () => {
  return (
    <View className="flex flex-1 gap-20 justify-center items-center">
      <Button onPress={loginKakao} title="카카오 로그인" />
      <Button onPress={logout} title="카카오 로그아웃" />
    </View>
  );
};
export default ProfileScreen;

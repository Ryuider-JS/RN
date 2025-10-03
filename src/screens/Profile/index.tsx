import { Button, View } from 'react-native';

import { loginKakao } from '@/services/auth.service';

import ProfileLoginContainer from './components/ProfileLogin/ProfileLoginContainer';

const ProfileScreen = () => {
  return (
    <View className="flex flex-1 items-center p-6">
      <ProfileLoginContainer />
      <Button onPress={loginKakao} title="카카오 로그인" />
      {/* <Button onPress={getAuthUser} title="카카오 로그아웃" /> */}
    </View>
  );
};
export default ProfileScreen;

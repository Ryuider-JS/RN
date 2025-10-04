import { Button } from 'react-native';

import { loginKakao } from '@/services/auth.service';

import ProfileLoginContainer from './components/ProfileLogin/ProfileLoginContainer';

const ProfileScreen = () => {
  return (
    <>
      <ProfileLoginContainer />
      <Button onPress={loginKakao} title="카카오 로그인" />
      {/* <Button onPress={getAuthUser} title="카카오 로그아웃" /> */}
    </>
  );
};
export default ProfileScreen;

import { Pressable, Text, View } from 'react-native';

import { useKakaoLogin } from './hooks/useKakaoLogin';

const ProfileScreen = () => {
  const { socialLogin } = useKakaoLogin();
  return (
    <View className="flex flex-1 justify-center items-center">
      <Pressable onPress={socialLogin}>
        <Text>카카오 로그인</Text>
      </Pressable>
    </View>
  );
};
export default ProfileScreen;

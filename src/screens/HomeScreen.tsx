import { Button, Text, View } from 'react-native';

import { NAVIGATOR } from '../constants/navigator.const';
import { THomeTabsNavigationProp } from '../types/navigator.type';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<THomeTabsNavigationProp>();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(NAVIGATOR.PROFILE)}
      />
    </View>
  );
};

export default HomeScreen;

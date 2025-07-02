import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SafeAreaWrapper from '../components/SafeAreaWrapper';
import { NAVIGATOR } from '../constants/navigator.const';
import { TRootStackParamList } from '../types/navigator.type';
import HomeTabs from './tabs/HomeTabs';

const RootStack = createStackNavigator<TRootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
        screenLayout={SafeAreaWrapper}>
        <RootStack.Screen name={NAVIGATOR.ROOT} component={HomeTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

import HomeTabs from './tabs/HomeTabs';
import { NAVIGATOR } from '../constants/navigator.const';
import { NavigationContainer } from '@react-navigation/native';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import { TRootStackParamList } from '../types/navigator.type';
import { createStackNavigator } from '@react-navigation/stack';

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

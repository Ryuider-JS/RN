import { NAVIGATOR } from '@constants/navigator.const';
import HomeTabs from '@navigations/tabs/HomeTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TRootStackParamList } from '@/types/navigator.type';

const RootStack = createStackNavigator<TRootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name={NAVIGATOR.ROOT} component={HomeTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BOTTOM_TAB, NAVIGATOR } from '../../constants/navigator.const';
import DeliveryScreen from '../../screens/Delivery';
import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';
import { THomeTabsParamList } from '../../types/navigator.type';

const HomeTab = createBottomTabNavigator<THomeTabsParamList>();

const HomeTabs = () => {
  return (
    <HomeTab.Navigator
      initialRouteName={NAVIGATOR.PROFILE}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: BOTTOM_TAB[route.name],
      })}>
      <HomeTab.Screen name={NAVIGATOR.HOME} component={HomeScreen} />
      <HomeTab.Screen name={NAVIGATOR.DELIVERY} component={DeliveryScreen} />
      <HomeTab.Screen name={NAVIGATOR.PROFILE} component={ProfileScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeTabs;

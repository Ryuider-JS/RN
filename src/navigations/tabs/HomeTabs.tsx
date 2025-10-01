import { BOTTOM_TAB, NAVIGATOR } from '@constants/navigator.const';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeliveryScreen from '@screens/Delivery';
import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';

import Icon from '@/components/icons';
import { COLOR } from '@/constants/color.const';
import { IIcon } from '@/types/icon.type';
import { THomeTabsParamList } from '@/types/navigator.type';

const HomeTab = createBottomTabNavigator<THomeTabsParamList>();

const renderTabBarIcon = ({ name, color, size }: IIcon) => {
  return <Icon name={name} color={color} size={size} />;
};

const HomeTabs = () => {
  return (
    <HomeTab.Navigator
      initialRouteName={NAVIGATOR.PROFILE}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: BOTTOM_TAB[route.name],
        tabBarActiveTintColor: COLOR.PRIMARY,
        tabBarIcon: ({ color, size }) =>
          renderTabBarIcon({ name: route.name, color, size }),
      })}>
      <HomeTab.Screen name={NAVIGATOR.HOME} component={HomeScreen} />
      <HomeTab.Screen name={NAVIGATOR.DELIVERY} component={DeliveryScreen} />
      <HomeTab.Screen name={NAVIGATOR.PROFILE} component={ProfileScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeTabs;

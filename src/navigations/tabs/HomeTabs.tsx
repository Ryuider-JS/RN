import { BOTTOM_TAB, NAVIGATOR } from '@constants/navigator.const';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeliveryScreen from '@screens/Delivery';
import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';

import Icon from '@/components/icons';
import withSafeArea from '@/components/SafeAreaWrapper';
import { COLOR } from '@/constants/color.const';
import { IIcon } from '@/types/icon.type';
import { THomeTabsParamList } from '@/types/navigator.type';

const HomeTab = createBottomTabNavigator<THomeTabsParamList>();

const renderTabBarIcon = ({ name, color, focused }: IIcon) => {
  return <Icon name={name} color={color} size={28} focused={focused} />;
};

const HomeTabs = () => {
  return (
    <HomeTab.Navigator
      initialRouteName={NAVIGATOR.PROFILE}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: BOTTOM_TAB[route.name],
        tabBarActiveTintColor: COLOR.PRIMARY,
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 4,
        },
        tabBarIcon: ({ color, focused }) =>
          renderTabBarIcon({ name: route.name, color, focused }),
      })}>
      <HomeTab.Screen
        name={NAVIGATOR.HOME}
        component={withSafeArea(HomeScreen)}
      />
      <HomeTab.Screen
        name={NAVIGATOR.DELIVERY}
        component={withSafeArea(DeliveryScreen)}
      />
      <HomeTab.Screen
        name={NAVIGATOR.PROFILE}
        component={withSafeArea(ProfileScreen)}
      />
    </HomeTab.Navigator>
  );
};

export default HomeTabs;

import { BOTTOM_TAB, NAVIGATOR } from '@constants/navigator.const';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeliveryScreen from '@screens/Delivery';
import HomeScreen from '@screens/Home';
import ProfileScreen from '@screens/Profile';

import withSafeArea from '@/components/safeAreaWrapper';
import { COLOR } from '@/constants/color.const';
import MessageScreen from '@/screens/Message';
import { IIconProps } from '@/types/icon.type';
import { THomeTabsParamList } from '@/types/navigator.type';

const HomeTab = createBottomTabNavigator<THomeTabsParamList>();

const renderTabBarIcon = ({ name, color, size = 32, focused }: IIconProps) => {
  return (
    <MaterialDesignIcons
      name={focused ? name : `${name}-outline`}
      size={size}
      color={color}
    />
  );
};

const HomeTabs = () => {
  return (
    <HomeTab.Navigator
      initialRouteName={NAVIGATOR.PROFILE}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabel: BOTTOM_TAB[route.name],
        tabBarActiveTintColor: COLOR.PRIMARY_500,
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 4,
        },
        tabBarStyle: {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          paddingTop: 8,
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
        name={NAVIGATOR.MESSAGE}
        component={withSafeArea(MessageScreen)}
      />
      <HomeTab.Screen
        name={NAVIGATOR.PROFILE}
        component={withSafeArea(ProfileScreen)}
      />
    </HomeTab.Navigator>
  );
};

export default HomeTabs;

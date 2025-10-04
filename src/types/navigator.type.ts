import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { NAVIGATOR } from '@/constants/navigator.const';

export type TRootStackParamList = {
  [NAVIGATOR.ROOT]: undefined;
};

export type THomeTabsParamList = {
  [NAVIGATOR.HOME]: undefined;
  [NAVIGATOR.DELIVERY]: undefined;
  [NAVIGATOR.PROFILE]: undefined;
  [NAVIGATOR.MESSAGE]: undefined;
};

export type THomeTabsNavigationProp =
  BottomTabNavigationProp<THomeTabsParamList>;

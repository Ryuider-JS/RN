import { TextStyle } from 'react-native';

import { THomeTabsParamList } from './navigator.type';

export interface ITabBarIconProps {
  name: keyof THomeTabsParamList;
  size?: number;
  color?: TextStyle['color'];
  focused?: boolean;
}

export type TIcon = 'bell' | 'chevron-right' | 'account';

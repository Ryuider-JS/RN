import { TextStyle } from 'react-native';

import { THomeTabsParamList } from './navigator.type';

export interface IIconProps {
  name: keyof THomeTabsParamList;
  size?: number;
  color?: TextStyle['color'];
  focused?: boolean;
}

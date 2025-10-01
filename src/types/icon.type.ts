import { TextStyle } from 'react-native';

import { THomeTabsParamList } from './navigator.type';

// 2. IconProps에서 'name' 속성의 타입만 추출하여 사용합니다.

export interface IIcon {
  name: keyof THomeTabsParamList;
  size?: number;
  color?: TextStyle['color'];
  focused: boolean;
}

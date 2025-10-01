import Feather from '@react-native-vector-icons/feather';
import { ComponentProps } from 'react';
import { TextStyle } from 'react-native';

// 2. IconProps에서 'name' 속성의 타입만 추출하여 사용합니다.
type FeatherIconName = ComponentProps<typeof Feather>['name'];

export interface IIcon {
  name: FeatherIconName;
  size?: number;
  color?: TextStyle['color'];
}

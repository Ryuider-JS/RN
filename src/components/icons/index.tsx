import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';

import { IIconProps } from '@/types/icon.type';

const Icon = ({ name, color, size, focused }: IIconProps) => {
  return (
    <MaterialDesignIcons
      name={focused ? name : `${name}-outline`}
      size={size}
      color={color}
    />
  );
};

export default Icon;

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';

import { IIcon } from '@/types/icon.type';

/**
 * 재사용 가능한 TabBar 아이콘 컴포넌트
 * @param {string} name - Feather 아이콘 이름 (예: 'home', 'user')
 * @param {string} color - 아이콘 색상
 * @param {number} size - 아이콘 크기
 */
const Icon = ({ name, color, size, focused }: IIcon) => {
  return (
    <MaterialDesignIcons
      name={focused ? name : `${name}-outline`}
      size={size}
      color={color}
    />
  );
};

export default Icon;

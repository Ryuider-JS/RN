// components/AppText.tsx

import React from 'react';
import { Text, TextProps } from 'react-native';

interface AppTextProps extends TextProps {
  className?: string;
}

export const PText: React.FC<AppTextProps> = ({
  className = '',
  children,
  ...props
}) => {
  const defaultFontClass = 'font-pretendard-regular';

  return (
    <Text className={`${defaultFontClass} ${className}`} {...props}>
      {children}
    </Text>
  );
};

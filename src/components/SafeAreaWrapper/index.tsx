import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { ComponentType } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import OrangeIcon from '../icons/Orange';

const withSafeArea = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithSafeArea = (props: P) => {
    return (
      <SafeAreaView className="flex-1">
        <View className="flex-1 gap-4 items-center px-6 py-4">
          <View className="flex-row justify-between items-center w-full">
            <OrangeIcon />
            <MaterialDesignIcons name="bell" size={24} />
          </View>
          <WrappedComponent {...props} />
        </View>
      </SafeAreaView>
    );
  };
  return ComponentWithSafeArea;
};

export default withSafeArea;

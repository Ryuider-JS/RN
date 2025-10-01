import React from 'react';
import { ComponentType } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const withSafeArea = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithSafeArea = (props: P) => {
    return (
      <SafeAreaView className="flex-1">
        <WrappedComponent {...props} />
      </SafeAreaView>
    );
  };
  return ComponentWithSafeArea;
};

export default withSafeArea;

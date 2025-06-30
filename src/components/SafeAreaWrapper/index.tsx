import { IChildrenProps } from '../../types/common.type';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeAreaWrapper = ({ children }: IChildrenProps) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
  );
};

export default SafeAreaWrapper;

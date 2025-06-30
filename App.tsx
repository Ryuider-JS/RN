import './global.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import RootNavigator from './src/navigations/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;

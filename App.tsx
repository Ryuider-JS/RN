import './global.css';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import { ReadableStream } from 'web-streams-polyfill';
// eslint-disable-next-line no-undef
(globalThis as any).ReadableStream = ReadableStream;

import { KAKAO_NATIVE_TEST_APP_KEY } from '@env';
import { initializeKakaoSDK } from '@react-native-kakao/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from '@/navigations/RootNavigator';

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    initializeKakaoSDK(KAKAO_NATIVE_TEST_APP_KEY);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;

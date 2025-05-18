import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import React from 'react';
import SButton from './components/Study/SButton';
import {StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={[styles.container]}>
      <SButton />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;

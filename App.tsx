import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import React from 'react';
import SActivityIndicator from './components/SActivityIndicator';
import {StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={[styles.container, styles.horizontal]}>
      <SActivityIndicator />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;

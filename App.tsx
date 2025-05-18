import './global.css';

import {Image, ScrollView, Text, TextInput, View} from 'react-native';

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Some text</Text>
        <View className="items-center">
          <Text>Some more text</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            className="w-[200px] h-[200px] "
          />
        </View>
        <TextInput
          className="border-2 border-black w-[200px] h-[50px] p-2"
          defaultValue="You can type in me"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

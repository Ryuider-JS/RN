import './global.css';

import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

const App = () => {
  const [title, setTitle] = useState('');

  return (
    <SafeAreaView>
      <View className="flex items-center gap-2 p-4 pt-8 bg-white">
        <Text className="h-10">{title}</Text>
        <TextInput
          className="w-full border-2 rounded-md"
          onChangeText={(text: string) => {
            setTitle(text);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

import './global.css';

import {Text, View} from 'react-native';

import React from 'react';

function App(): React.JSX.Element {
  return (
    // view는 화면에 보여지는 모든 것을 감싸는 컴포넌트
    // view는 div와 비슷한 역할을 한다.
    // text는 글자를 보여주는 컴포넌트
    // text는 span과 비슷한 역할을 한다.
    <View className="items-center justify-center flex-1 bg-red-500">
      <Text>안녕1</Text>
    </View>
  );
}

export default App;

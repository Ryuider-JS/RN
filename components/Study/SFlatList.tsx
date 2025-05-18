import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    name: 'First Item',
  },
  {
    id: '2',
    name: 'Second Item',
  },
  {
    id: '3',
    name: 'Third Item',
  },
];

const Item = React.memo(({item, selected}: {item: any; selected: boolean}) => {
  console.log(`렌더링: ${item.name}, selected: ${selected}`);
  return (
    <View
      key={item.id}
      style={{
        padding: 10,
        backgroundColor: selected ? 'lightblue' : 'white',
      }}>
      <Text>{item.name}</Text>
    </View>
  );
});

export default function SFlatList() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => setSelectedId(item.id)}>
              <Item item={item} selected={item.id === selectedId} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          //   extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
});

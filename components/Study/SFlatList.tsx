import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import React from 'react';

const DATA = [
  {key: '1', title: 'Item 1'},
  {key: '2', title: 'Item 2'},
  {key: '3', title: 'Item 3'},
];

export default function ExtremeSeparatorExample() {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        ItemSeparatorComponent={({highlighted}) => (
          <View
            style={[
              styles.separator,
              highlighted && styles.separatorHighlighted,
            ]}
          />
        )}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            underlayColor="#ddd"
            onPress={() => console.log('Pressed', item.title)}
            onShowUnderlay={() => {
              separators.highlight();
              separators.updateProps('leading', {
                style: {
                  height: 6,
                  backgroundColor: 'blue',
                },
              });
              separators.updateProps('trailing', {
                style: {
                  height: 6,
                  backgroundColor: 'green',
                },
              });
            }}
            onHideUnderlay={() => {
              separators.unhighlight();
              separators.updateProps('leading', {
                style: {
                  height: 2,
                  backgroundColor: 'gray',
                },
              });
              separators.updateProps('trailing', {
                style: {
                  height: 2,
                  backgroundColor: 'gray',
                },
              });
            }}>
            <View style={styles.item}>
              <Text>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={item => item.key}
        ListHeaderComponent={() => (
          <View style={styles.headerFooter}>
            <Text style={styles.headerFooterText}>리스트 헤더입니다.</Text>
          </View>
        )}
        // 리스트 맨 아래에 고정 렌더링
        ListFooterComponent={() => (
          <View style={styles.headerFooter}>
            <Text style={styles.headerFooterText}>리스트 푸터입니다.</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
  },
  separator: {
    height: 2,
    backgroundColor: 'gray',
  },
  separatorHighlighted: {
    backgroundColor: 'red',
  },
});

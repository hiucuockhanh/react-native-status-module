import type { Input } from '@hiucuockhanh/react-native-input-status/lib/typescript/src/redux/inputSlice';
import * as React from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';
import { selectInputState } from 'react-native-status';
import { useSelector } from 'react-redux';

export default function ListStatus() {
  const inputStates = useSelector(selectInputState);

  const renderItem = React.useCallback(
    ({ item }: { item: Input }) => (
      <View style={styles.wrapper}>
        <Text>{item.icon}</Text>
        <Text>{item.status}</Text>
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={inputStates.inputStates}
        keyExtractor={(_item: Input, index: number) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  wrapper: {
    height: 60,
    marginBottom: 20,
    backgroundColor: 'red',
  },
});

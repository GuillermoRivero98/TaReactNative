import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
      <Button title="Disminuir" onPress={() => setCount(count - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  countText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
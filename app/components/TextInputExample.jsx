import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function TextInputExample() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        onChangeText={setText}
        value={text}
      />
      <Text style={styles.displayText}>Texto ingresado: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 18,
  },
});
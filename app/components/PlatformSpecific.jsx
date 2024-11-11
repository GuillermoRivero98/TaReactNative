import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

export default function PlatformSpecific() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Esta aplicación está en {Platform.OS === 'ios' ? 'iOS' : 'Android'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});
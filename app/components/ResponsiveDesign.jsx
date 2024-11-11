import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

export default function ResponsiveDesign() {
  const { width, height } = Dimensions.get('window');
  const isLargeScreen = width > 600;

  return (
    <View style={isLargeScreen ? styles.largeContainer : styles.smallContainer}>
      <Text style={styles.text}>Este es un diseño responsivo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  largeContainer: {
    padding: 50,
    backgroundColor: '#b0e0e6',
  },
  smallContainer: {
    padding: 20,
    backgroundColor: '#afeeee',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
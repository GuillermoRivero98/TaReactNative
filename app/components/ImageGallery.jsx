import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

const images = [
  { id: '1', uri: img1, description: 'Imagen 1' },
  { id: '2', uri: img2, description: 'Imagen 2' },
  { id: '3', uri: img3, description: 'Imagen 3' },
];

export default function ImageGallery() {
  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.uri} style={styles.image} />
          <Text>{item.description}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
});
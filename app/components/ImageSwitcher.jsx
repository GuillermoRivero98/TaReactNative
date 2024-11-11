import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

export default function ImageSwitcher() {
  const [image, setImage] = useState('https://via.placeholder.com/150');

  const changeImage = () => {
    setImage(image === 'https://via.placeholder.com/150' 
      ? 'https://via.placeholder.com/300' 
      : 'https://via.placeholder.com/150');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Button title="Cambiar Imagen" onPress={changeImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});
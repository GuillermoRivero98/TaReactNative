import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoPicker() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permiso denegado');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permiso de cámara denegado');
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Seleccionar Foto" onPress={pickImage} />
      <Button title="Tomar Foto" onPress={takePhoto} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
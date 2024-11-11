import React, { useState, useRef } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraExample() {
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);

  const requestPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      const result = await cameraRef.current.takePictureAsync();
      setPhoto(result.uri);
    }
  };

  React.useEffect(() => {
    requestPermission();
  }, []);

  if (hasPermission === null) {
    return <Text>Solicitando permiso para acceder a la cámara...</Text>;
  }

  if (hasPermission === false) {
    return <Text>Permiso denegado para acceder a la cámara.</Text>;
  }

  return (
    <View style={styles.container}>
      {photo ? (
        <Image source={{ uri: photo }} style={styles.image} />
      ) : (
        <Camera style={styles.camera} ref={cameraRef} />
      )}
      <Button title="Tomar Foto" onPress={takePhoto} />
      {photo && <Button title="Volver a la Cámara" onPress={() => setPhoto(null)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: 300,
    height: 400,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 400,
    marginBottom: 20,
  },
});
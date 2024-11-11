import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function LocationExample() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permiso de localización denegado');
      return;
    }
    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {location ? (
        <Text>Latitud: {location.coords.latitude}, Longitud: {location.coords.longitude}</Text>
      ) : (
        <Button title="Obtener Ubicación" onPress={getLocation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
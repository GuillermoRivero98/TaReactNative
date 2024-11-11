import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function MovieSearch() {
  const [movie, setMovie] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');

  const fetchMovie = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${searchText}&apikey=YOUR_API_KEY`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovie(data);
        setError('');
      } else {
        setError('Película no encontrada');
        setMovie(null);
      }
    } catch (error) {
      setError('Hubo un error en la solicitud');
      setMovie(null);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre de una película"
        onChangeText={setSearchText}
      />
      <Button title="Buscar" onPress={fetchMovie} />
      {movie && (
        <View style={styles.movieContainer}>
          <Image source={{ uri: movie.Poster }} style={styles.poster} />
          <Text style={styles.title}>{movie.Title}</Text>
          <Text>{movie.Plot}</Text>
        </View>
      )}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  movieContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  poster: {
    width: 200,
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});
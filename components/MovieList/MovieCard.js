import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  cardHeading: {
    fontSize: 20,
    color: '#f45d48',
  },
  cardText: {
    color: '#f8f5f2',
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
  },
  movieCardContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#232323',
    flexDirection: 'row',
  },
});

const MovieCard = ({ item }) => {
  return (
    <View key={item.id} style={styles.movieCardContainer}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
        style={styles.image}
        testID='movie-image'
      />
      <View style={styles.cardTextContent}>
        <View>
          <Text style={styles.cardHeading}>Title</Text>
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.cardHeading}>Genres</Text>
          <Text style={styles.cardText}>Horror, pancakes, sand</Text>
        </View>
      </View>
    </View>
  );
};

export { MovieCard };

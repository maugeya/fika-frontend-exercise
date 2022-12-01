import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import { TEST_IDS } from '../../utils/constants';

const styles = StyleSheet.create({
  cardHeading: {
    fontSize: 20,
    color: '#f45d48',
  },
  cardText: {
    color: '#f8f5f2',
    flex: 1,
    flexWrap: 'wrap',
  },
  image: {
    height: 160,
    width: 160,
    resizeMode: 'contain',
  },
  movieCardContainer: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#232323',
    flexDirection: 'row',
    flex: 1,
  },
  titleHeader: {
    width: '70%',
  },
});

function MovieCard({ item }) {
  return (
    <View key={item.id} style={styles.movieCardContainer}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
        style={styles.image}
        testID={TEST_IDS.MOVIE_CARD_IMAGE}
      />
      <View style={styles.cardTextContent}>
        <View style={styles.titleHeader}>
          <Text style={styles.cardHeading}>Title</Text>
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.cardHeading}>Genres</Text>
          <FlatList
            data={item.genres}
            listKey={() => uuid.v4()}
            renderItem={({ item }) => (
              <Text
                style={styles.cardText}
                testID={TEST_IDS.MOVIE_CARD_GENRE_ITEM}
              >
                {item}
              </Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export { MovieCard };

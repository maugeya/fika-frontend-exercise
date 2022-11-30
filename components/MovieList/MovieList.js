import { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { MovieCard } from './MovieCard';

import { TEST_IDS } from '../../utils/constants';

import { useFetchMovies } from '../../hooks/useFetchMovies';

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  flatListContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 10,
  },
});

function MovieList() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useFetchMovies(currentPage);

  if (isLoading)
    return (
      <View testID={TEST_IDS.MOVIE_LIST_CONTAINER}>
        <Text>Loading</Text>
      </View>
    );

  if (error)
    return (
      <View testID={TEST_IDS.MOVIE_LIST_CONTAINER}>
        <Text>Some error</Text>
      </View>
    );

  const renderMovieCard = ({ item }) => {
    return <MovieCard item={item} />;
  };

  return (
    <React.Fragment>
      <View testID={TEST_IDS.MOVIE_LIST_CONTAINER} style={styles.container}>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={data.results}
          renderItem={renderMovieCard}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </React.Fragment>
  );
}

export { MovieList };

import { useState } from 'react';
import axios from 'axios';
import { Text, View, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { TEST_IDS } from '../../utils/constants';

import { useFetchMovies } from '../../hooks/useFetchMovies';

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function MovieList() {
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

  return (
    <React.Fragment>
      <View testID={TEST_IDS.MOVIE_LIST_CONTAINER}>
        <Text>{data.results[0].title}</Text>
      </View>
    </React.Fragment>
  );
}

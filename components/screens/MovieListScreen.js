import { useState, useMemo } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import uuid from 'react-native-uuid';

import { TEST_IDS } from '../../utils/constants';
import { MovieCard } from '../MovieList/MovieCard';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import { SearchBar } from '../Search/SearchBar';
import { Modal } from '../Modal/Modal';
import { PageSelect } from '../PageSelect/PageSelect';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  flatListContainer: {
    marginTop: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 10,
  },
  searchInput: {
    color: 'white',
  },
  emptyList: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function MovieListScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const {
    movieCardData = [],
    isLoading,
    errors,
    totalPages,
  } = useFetchMovies(currentPage, searchTerm);
  const paginationList = useMemo(() =>
    Array.from({ length: totalPages }, (_, i) => i + 1)
  );

  if (isLoading)
    return (
      <View testID={TEST_IDS.MOVIE_LIST_CONTAINER} style={styles.container}>
        <Text>Loading</Text>
      </View>
    );

  if (errors.length)
    return (
      <View testID={TEST_IDS.MOVIE_LIST_CONTAINER} style={styles.container}>
        <Text>An error has occured</Text>
      </View>
    );

  const renderMovieCard = ({ item }) => {
    return <MovieCard item={item} />;
  };

  const renderFooterComponent = () => {
    if (!movieCardData.length) return;
    return <PageSelect currentPage={currentPage} setShowModal={setShowModal} />;
  };

  return (
    <View testID={TEST_IDS.MOVIE_LIST_CONTAINER} style={styles.container}>
      <SearchBar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setCurrentPage={setCurrentPage}
      />
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={movieCardData}
        renderItem={renderMovieCard}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        listKey={() => uuid.v4()}
        ListEmptyComponent={() => (
          <View style={styles.container}>
            <View style={styles.emptyList}>
              <Text style={styles.searchInput}>
                No movies available, try another search!
              </Text>
            </View>
          </View>
        )}
        ListFooterComponent={renderFooterComponent}
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        paginationList={paginationList}
        setCurrentPage={setCurrentPage}
      />
    </View>
  );
}

export { MovieListScreen };

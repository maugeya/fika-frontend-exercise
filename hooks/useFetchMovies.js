import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import {
  generateURL,
  generateQueryKey,
  formatMovieData,
} from '../utils/queryUtils';
import { GENRES_URL } from '../utils/constants';

const useFetchMovies = (currentPage, searchTerm) => {
  const url = generateURL(currentPage, searchTerm);
  const queryKey = generateQueryKey(currentPage, searchTerm);

  const {
    data: genresData,
    isLoading: isLoadingGenres,
    error: genresError,
  } = useQuery({
    queryKey: ['genres'],
    queryFn: () => axios.get(GENRES_URL).then((res) => res.data),
  });

  const {
    data = { results: [] },
    isLoading: isLoadingMovies,
    error: moviesError,
  } = useQuery({
    queryKey: queryKey,
    queryFn: () => axios.get(url).then((res) => res.data),
    keepPreviousData: true,
    stale: 60000,
    notifyOnChangeProps: 'all',
  });

  let errors = [];
  if (moviesError) errors.push(moviesError);
  if (genresError) errors.push(genresError);

  let movieCardData = [];

  if (data && genresData) {
    movieCardData = formatMovieData(data, genresData);
  }

  return {
    movieCardData,
    isLoading: isLoadingGenres || isLoadingMovies,
    errors,
    totalPages: data.total_pages,
  };
};

export { useFetchMovies };

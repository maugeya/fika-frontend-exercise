import { BASE_SEARCH_URL, BASE_URL } from './constants';

export const generateURL = (currentPage, searchTerm) => {
  if (searchTerm) {
    return `${BASE_SEARCH_URL}&query=${searchTerm
      .trim()
      .split(' ')
      .join('+')}&page=${currentPage}`;
  }
  return `${BASE_URL}${currentPage}`;
};

export const generateQueryKey = (currentPage, searchTerm) => {
  if (searchTerm) {
    return ['movies', searchTerm, currentPage];
  }
  return ['movies', currentPage];
};

export const formatMovieData = (movieData, genreData) => {
  return movieData.results.map((result) => ({
    poster_path: result.poster_path,
    title: result.title,
    genres: result.genre_ids.map(
      (genreId) => genreData.genres.find((genre) => genre.id === genreId).name
    ),
  }));
};

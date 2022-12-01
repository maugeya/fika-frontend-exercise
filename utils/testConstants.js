export const MOCK_USE_FETCH_MOVIES_LOADING = {
  isLoading: true,
  movieCardData: [],
  errors: [],
};

export const MOCK_MOVIE_CARD_ITEM = {
  poster_path: '/some-path.png',
  title: '28 days later',
  genres: ['Horror', 'Fantasy'],
};

export const MOCK_USE_FETCH_MOVIES_SUCCESS = {
  isLoading: false,
  movieCardData: [MOCK_MOVIE_CARD_ITEM],
  errors: [],
  pageTotal: 1,
};

export const MOCK_USE_FETCH_NO_MOVIES = {
  isLoading: false,
  movieCardData: [],
  errors: [],
};

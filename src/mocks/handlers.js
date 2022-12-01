import { rest } from 'msw';

export const mockMoviesAPIRes = {
  page: 1,
  results: [
    {
      adult: false,
      genre_ids: [1, 2],
      id: 1,
      title: '28 days later',
      poster_path: '/some-path.png',
      original_language: 'en',
      original_title: '28 days later',
      vote_average: 7.7,
      vote_count: 14506,
    },
  ],
  total_pages: 1,
  total_results: 1,
};

export const mockGenresAPIRes = {
  genres: [
    { id: 0, name: 'Family' },
    { id: 1, name: 'Horror' },
    { id: 2, name: 'Fantasy' },
    { id: 3, name: 'Romantic comedy' },
    { id: 4, name: 'Action' },
  ],
};

export const handlers = [
  rest.get('https://api.themoviedb.org/3/discover/movie', (req, res, ctx) => {
    return res(ctx.json(mockMoviesAPIRes));
  }),
  rest.get('https://api.themoviedb.org/3/genre/movie/list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockGenresAPIRes));
  }),
];

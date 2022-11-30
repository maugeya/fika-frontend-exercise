import { rest } from 'msw';

export const mockedAPIResponse = {
  page: 1,
  results: [
    {
      adult: false,
      genre_ids: [1, 2],
      id: 1,
      title: '28 days later',
      poster_path: '/some-path.png',
    },
  ],
  total_pages: 1,
  total_results: 1,
};

export const handlers = [
  rest.get('https://api.themoviedb.org/3/discover/movie', (req, res, ctx) => {
    // const { page } = req.url.searchParams;

    return res(ctx.status(200), ctx.json({ ...mockedAPIResponse }));
  }),
];

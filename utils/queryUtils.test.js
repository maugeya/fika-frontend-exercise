import { mockMoviesAPIRes } from '../src/mocks/handlers';
import { formatMovieData } from './queryUtils';

const mockMovieData = mockMoviesAPIRes;
const mockGenreData = {
  genres: [
    { id: 1, name: 'Horror' },
    { id: 2, name: 'Zombies' },
    { id: 3, name: 'Action' },
  ],
};

describe('/utils/queryUtils', () => {
  describe('formatMovieData', () => {
    it('should return an array of movies, containing required props including genre names', () => {
      const result = formatMovieData(mockMovieData, mockGenreData);
      const expected = [
        {
          poster_path: '/some-path.png',
          title: '28 days later',
          genres: ['Horror', 'Zombies'],
        },
      ];

      expect(result).toEqual(expected);
    });
  });
});

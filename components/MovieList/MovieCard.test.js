import { render, screen } from '@testing-library/react-native';
import { TEST_IDS } from '../../utils/constants';

import { MovieCard } from './MovieCard';
const mockMovieCardData = {
  poster_path: '/some-path.png',
  title: '28 days later',
  genres: ['Horror', 'Fantasy'],
};

describe('/components/MovieList/MovieCard', () => {
  describe('when rendered with a movie as the `item` prop', () => {
    it('should display the MovieCard component and all expected parts', () => {
      render(<MovieCard item={mockMovieCardData} />);

      const titleHeader = screen.getByText('Title');
      const movieTitle = screen.getByText('28 days later');
      const genreHeader = screen.getByText('Genres');
      const genreTexts = screen.getAllByTestId(TEST_IDS.MOVIE_CARD_GENRE_ITEM);
      const image = screen.getByTestId(TEST_IDS.MOVIE_CARD_IMAGE);

      expect(titleHeader).toBeDefined();
      expect(movieTitle).toBeDefined();
      expect(genreHeader).toBeDefined();
      expect(genreTexts).toHaveLength(2);
      expect(image).toBeDefined();
    });
  });
});

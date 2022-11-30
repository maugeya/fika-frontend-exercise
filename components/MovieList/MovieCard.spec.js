import { render, screen } from '@testing-library/react-native';
import { mockedAPIResponse } from '../../src/mocks/handlers';

import { MovieCard } from './MovieCard';

describe('/components/MovieList/MovieCard', () => {
  describe('when rendered with a movie as the `item` prop', () => {
    it('should display the MovieCard component and all expected parts', () => {
      render(<MovieCard item={mockedAPIResponse.results[0]} />);

      const titleHeader = screen.getByText('Title');
      const movieTitle = screen.getByText('28 days later');
      const genreHeader = screen.getByText('Genres');

      const image = screen.getByTestId('movie-image');

      expect(titleHeader).toBeDefined();
      expect(movieTitle).toBeDefined();
      expect(genreHeader).toBeDefined();
      expect(image).toBeDefined();
    });
  });
});

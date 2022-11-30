import { screen } from '@testing-library/react-native';
import { waitFor } from '@testing-library/react-native';
import { mockedAPIResponse } from '../../src/mocks/handlers';

import { createQueryClient, renderWithClient } from '../../utils/testUtils';
import MovieList from './MovieList';

const mockUseFetchMovies = jest.fn();
jest.mock('../../hooks/useFetchMovies', () => ({
  useFetchMovies: (currentPage) => mockUseFetchMovies(currentPage),
}));

describe('/components/MovieList/MovieList', () => {
  it('should initially render in a loading state', () => {
    mockUseFetchMovies.mockImplementation(() => ({ isLoading: true }));
    const client = createQueryClient();
    renderWithClient(client, <MovieList />);

    const loadingElement = screen.getByText('Loading');
    expect(loadingElement).toBeDefined();
  });

  it('should resolve to show the movie list', async () => {
    mockUseFetchMovies.mockImplementation(() => ({
      isLoading: false,
      data: mockedAPIResponse,
    }));

    const client = createQueryClient();
    renderWithClient(client, <MovieList />);

    await waitFor(() => {
      screen.debug();
    });
  });
});

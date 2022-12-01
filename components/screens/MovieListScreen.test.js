import { screen } from '@testing-library/react-native';
import { waitFor } from '@testing-library/react-native';
import { TEST_IDS } from '../../utils/constants';
import {
  MOCK_USE_FETCH_MOVIES_LOADING,
  MOCK_USE_FETCH_MOVIES_SUCCESS,
  MOCK_USE_FETCH_NO_MOVIES,
} from '../../utils/testConstants';

import { renderWithQueryClient } from '../../utils/testUtils';
import { MovieListScreen } from './MovieListScreen';

const mockUseFetchMovies = jest.fn();
jest.mock('../../hooks/useFetchMovies', () => ({
  useFetchMovies: (currentPage, searchTerm) =>
    mockUseFetchMovies(currentPage, searchTerm),
}));

const mockMovieCard = jest.fn();
jest.mock('../MovieList/MovieCard', () => ({
  MovieCard: (props) => mockMovieCard(props),
}));

describe('/components/MovieListScreen/MovieListScreen', () => {
  beforeAll(() => {
    mockUseFetchMovies.mockReturnValue(MOCK_USE_FETCH_MOVIES_LOADING);
  });

  describe('Movies List', () => {
    describe('When data is loading', () => {
      it('should initially render in a loading state', () => {
        renderWithQueryClient(<MovieListScreen />);

        const loadingElement = screen.getByText('Loading');

        expect(loadingElement).toBeDefined();
      });
    });

    describe('When a query errors', () => {
      beforeAll(() => {
        mockUseFetchMovies.mockReturnValue({
          ...MOCK_USE_FETCH_MOVIES_LOADING,
          isLoading: false,
          errors: ['An error'],
        });
      });

      it('should render in a error state', () => {
        renderWithQueryClient(<MovieListScreen />);

        const errorText = screen.getByText('An error has occured');

        expect(errorText).toBeDefined();
      });
    });

    describe('When query hook has returned successful fetch, containing items in movieCardData', () => {
      beforeEach(() => {
        mockUseFetchMovies.mockReturnValue(MOCK_USE_FETCH_MOVIES_SUCCESS);
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('will render a `SearchBar` component', async () => {
        renderWithQueryClient(<MovieListScreen />);
        await waitFor(() => {
          const searchBar = screen.getByTestId(TEST_IDS.SEARCH_BAR_CONTAINER);

          expect(searchBar).toBeDefined();
        });
      });

      it('will render a `PageSelect` component', async () => {
        renderWithQueryClient(<MovieListScreen />);

        await waitFor(() => {
          const pageSelect = screen.getByTestId(TEST_IDS.PAGE_SELECT_CONTAINER);

          expect(pageSelect).toBeDefined();
        });
      });

      it('Should call for `MovieCard` components to populate the list with expected props', async () => {
        renderWithQueryClient(<MovieListScreen />);

        await waitFor(() => {
          expect(mockMovieCard).toBeCalledWith({
            item: {
              poster_path: '/some-path.png',
              title: '28 days later',
              genres: ['Horror', 'Fantasy'],
            },
          });
        });
      });

      describe('When `movieCardData` returns an empty array', () => {
        beforeEach(() => {
          mockUseFetchMovies.mockReturnValue(MOCK_USE_FETCH_NO_MOVIES);
        });

        afterAll(() => {
          jest.resetAllMocks();
        });

        it('Should render the empty list component', async () => {
          renderWithQueryClient(<MovieListScreen />);

          await waitFor(() => {
            const emptyListComponent = screen.getByText(
              'No movies available, try another search!'
            );

            const pageSelectComponenet = screen.queryByTestId(
              TEST_IDS.PAGE_SELECT_CONTAINER
            );

            expect(emptyListComponent).toBeDefined();
            expect(pageSelectComponenet).not.toBeDefined;
          });
        });
      });
    });
  });
});

import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react-native';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query';

import { useFetchMovies } from './useFetchMovies';

const queryClient = new QueryClient({
  queryCache: new QueryCache({}),
  log: console.log,
  warn: console.warn,
  error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  cacheTime: 'Infinity',
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const expectedUseFetchMovies = {
  movieCardData: [
    {
      poster_path: '/some-path.png',
      title: '28 days later',
      genres: ['Horror', 'Fantasy'],
    },
  ],
  isLoading: false,
  errors: [],
  totalPages: 1,
};

describe('/hooks/useFetchMovies', () => {
  describe('When called', () => {
    it('should initially return `isLoading` as true', () => {
      const { result } = renderHook(() => useFetchMovies(), { wrapper });
      expect(result.current.isLoading).toEqual(true);
    });
  });

  it('should resolve to a success state', async () => {
    const { result } = renderHook(() => useFetchMovies(), { wrapper });

    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
      expect(result.current).toEqual(expectedUseFetchMovies);
    });
  });

  // #TODO - Write tests for failing state
});

import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useFetchMovies } from './useFetchMovies';
import { mockedAPIResponse } from '../src/mocks/handlers';

const queryClient = new QueryClient({
  log: console.log,
  warn: console.warn,
  error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  cacheTime: 'Infinity',
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('/hooks/useFetchMovies', () => {
  it('should resolve to a success state', async () => {
    const { result } = renderHook(() => useFetchMovies(), { wrapper });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toEqual(mockedAPIResponse);
    });
  });
});

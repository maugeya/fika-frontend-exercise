import { render } from '@testing-library/react-native';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query';

export function generateQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({}),
    defaultOptions: {
      queries: {
        staleTime: 600000,
        cacheTime: 900000,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
    retry: false,
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  });
}

const generateTestQueryClient = () => {
  const client = generateQueryClient();

  const options = client.getDefaultOptions();

  options.queries = { ...options.queries, retry: false };
  return client;
};

export function renderWithQueryClient(ui) {
  const queryClient = generateTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}

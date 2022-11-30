import { render } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const createQueryClient = () => {
  return new QueryClient({
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
    cacheTime: 'Infinity',
    retry: false,
  });
};

export function renderWithClient(client, children) {
  const { rerender, ...result } = render(
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );

  return {
    ...result,
    rerender: (rerenderUi) =>
      rerender(
        <QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>
      ),
  };
}

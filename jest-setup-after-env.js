import '@testing-library/jest-native/extend-expect';
import { server } from './src/mocks/server';

beforeAll(() => {
  jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

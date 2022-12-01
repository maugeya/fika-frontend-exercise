import React from 'react';

import { MovieListScreen } from './components/screens/MovieListScreen';
import { Layout } from './components/Layout/Layout';

export default function App() {
  return (
    <Layout>
      <MovieListScreen />
    </Layout>
  );
}

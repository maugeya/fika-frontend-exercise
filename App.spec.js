import React from 'react';
import { View } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import { TEST_IDS } from './utils/constants';

import App from './App';

describe('App.js', () => {
  describe('When rendered', () => {
    it('Should show the FikaSearch header and MovieList component', () => {
      render(<App />);

      const header = screen.getByText('FikaSearch');
      const movieList = screen.getByTestId(TEST_IDS.MOVIE_LIST_CONTAINER);

      expect(header).toBeDefined();
      expect(movieList).toBeDefined();
    });
  });
});

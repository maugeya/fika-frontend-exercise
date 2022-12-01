import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react-native';
import { TEST_IDS } from '../../utils/constants';

import { SearchBar } from './SearchBar';

const mockSetSearchTerm = jest.fn();
const mockSearchTerm = 'pancakes';
const mockSetCurrentPage = jest.fn();

describe('/components/SearchBar/SearchBar', () => {
  it('Should call `setSearchTerm` and `setCurrentPage` when submit button is pressed', async () => {
    render(
      <SearchBar
        setSearchTerm={mockSetSearchTerm}
        searchTerm={mockSearchTerm}
        setCurrentPage={mockSetCurrentPage}
      />
    );

    const searchBarInput = screen.getByTestId(TEST_IDS.SEARCH_BAR_INPUT);
    const searchBarSubmit = screen.getByTestId(TEST_IDS.SEARCH_BAR_SUBMIT);

    fireEvent.changeText(searchBarInput, 'priscilla');
    fireEvent.press(searchBarSubmit);

    await waitFor(() => {
      expect(mockSetCurrentPage).toHaveBeenCalledWith(1);
      expect(mockSetSearchTerm).toHaveBeenCalledWith('priscilla');
    });
  });
});

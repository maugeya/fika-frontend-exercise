import { render, screen, fireEvent } from '@testing-library/react-native';

import { PageSelect } from './PageSelect';

const mockCurrentPage = 1;
const mockSetShowModal = jest.fn();

describe('/components/PageSelect/PageSelect', () => {
  it('Should show current page number as part of button title', () => {
    render(
      <PageSelect
        currentPage={mockCurrentPage}
        setShowModal={mockSetShowModal}
      />
    );

    const pageSelectButton = screen.getByText(
      `Select page (${mockCurrentPage})`
    );

    expect(pageSelectButton).toBeDefined();
  });

  describe('When `PageSelect` is pressed', () => {
    it('should call `setShowModal` with `true` value', () => {
      render(
        <PageSelect
          currentPage={mockCurrentPage}
          setShowModal={mockSetShowModal}
        />
      );

      const button = screen.getByTestId('page-select-button');
      fireEvent.press(button);

      expect(mockSetShowModal).toHaveBeenCalledWith(true);
    });
  });
});

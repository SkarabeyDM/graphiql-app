import '@testing-library/jest-dom';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import HeaderManager from '@widgets/restFullClient/ui/HeaderManager';
import { IheadersProps } from '@widgets/restFullClient/model/headerManagerModel';

describe('HeaderManager component', () => {
  const renderComponent = (props: Partial<IheadersProps> = {}) => {
    const defaultProps: IheadersProps = {
      setHeaders: jest.fn(),
    };
    return renderWithProviders(<HeaderManager {...defaultProps} {...props} />);
  };

  it('creates a new header item on button click', () => {
    renderComponent();

    const button = screen.getByTestId('Create Header');
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
      expect(screen.getAllByRole('textbox').length).toBeGreaterThan(1);
    });
  });

  it('calls setHeaders with updated headers', () => {
    const setHeaders = jest.fn();
    renderComponent({ setHeaders });

    act(() => {
      const button = screen.getByTestId('Create Header');
      fireEvent.click(button);
    });

    const keyInput = screen.getAllByRole('textbox')[0];
    const valueInput = screen.getAllByRole('textbox')[1];

    act(() => {
      fireEvent.change(keyInput, { target: { value: 'Content-Type' } });
      fireEvent.change(valueInput, { target: { value: 'application/json' } });
    });

    waitFor(() => {
      expect(setHeaders).toHaveBeenCalledWith({
        'Content-Type': 'application/json',
      });
    });
  });
});

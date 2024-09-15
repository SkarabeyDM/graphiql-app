import '@testing-library/jest-dom';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import { IheadersProps } from '@features/editor/model/headersEditorModel';
import { HeaderEditor } from '@features/editor';

describe('HeaderEditor component', () => {
  const renderComponent = (props: Partial<IheadersProps> = {}) => {
    const defaultProps: IheadersProps = {
      setHeaders: jest.fn(),
    };
    return renderWithProviders(<HeaderEditor {...defaultProps} {...props} />);
  };

  /**
   * Тест для компонента HeaderEditor.
   * Проверяет, что создается новый элемент заголовка при нажатии на кнопку.
   *
   * @returns {Promise<void>}
   */
  it('creates a new header item on button click', () => {
    renderComponent();

    const button = screen.getByTestId('Create Header');
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });

    waitFor(() => {
      expect(screen.getAllByRole('textbox').length).toBeGreaterThan(0);
    });
  });

  /**
   * Тест для компонента HeaderEditor.
   * Проверяет, что функция setHeaders вызывается с обновленными заголовками.
   *
   * @returns {Promise<void>}
   */
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

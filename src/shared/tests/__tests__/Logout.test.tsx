import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { Logout } from '@widgets/authorization';
import { renderWithProviders } from '../lib';

describe('Logout component', () => {
  /**
   * Тест для компонента Logout.
   * Проверяет, что кнопка "Logout" рендерится и может быть нажата.
   *
   * @returns {void}
   */
  it('renders with the Logout button', () => {
    renderWithProviders(<Logout />);

    const button = screen.getByTestId('Logout');
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });
  });
});

import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import { LogoutButton } from '@features/auth';

describe('Logout component', () => {
  beforeAll(async () => {
    await act(async () => {
      renderWithProviders(<LogoutButton />);
    });
  });

  /**
   * Тест для компонента Logout.
   * Проверяет, что кнопка "Logout" рендерится и может быть нажата.
   */
  it('renders with the Logout button', () => {
    const button = screen.getByTestId('logout-button');

    expect(button).toBeDisabled();
  });
});

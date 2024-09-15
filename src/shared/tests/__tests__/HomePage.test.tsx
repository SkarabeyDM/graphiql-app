import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import { HomePage } from '@pages/HomePage';
import { en } from '@shared/i18n/messages';

describe('HomePage component', () => {
  beforeAll(async () => {
    await act(async () => {
      renderWithProviders(<HomePage />);
    });
  });

  /**
   * Тест для компонента HomePage.
   * Проверяет, что компонент рендерится с заголовком из `en.Greetings.welcome`.
   */
  it('renders with include the title', () => {
    const title = screen.getByRole('heading', { name: en.Greetings.welcome });
    expect(title).toBeInTheDocument();
  });
});

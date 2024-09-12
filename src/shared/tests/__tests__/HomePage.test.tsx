import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import { HomePage } from '@pages/HomePage';

describe('HomePage component', () => {
  beforeAll(async () => {
    await act(async () => {
      renderWithProviders(<HomePage />);
    });
  });
  /**
   * Тест для компонента HomePage.
   * Проверяет, что компонент рендерится с заголовком "REST/GraphiQL Client".

   */
  it('renders with include the title', () => {
    const title = screen.getByRole('heading', { name: 'REST/GraphiQL Client' });
    expect(title).toBeInTheDocument();
  });
});

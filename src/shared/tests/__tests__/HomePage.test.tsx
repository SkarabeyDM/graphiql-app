import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import { HomePage } from '@pages/HomePage';

describe('HomePage component', () => {
  /**
   * Тест для компонента HomePage.
   * Проверяет, что компонент рендерится с заголовком "REST/GraphiQL Client".
   *
   * @returns {void}
   */
  it('renders with include the title', () => {
    renderWithProviders(<HomePage />);

    const title = screen.getByRole('heading', { name: 'REST/GraphiQL Client' });
    expect(title).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import HomePageComponent from '@/app/page';
import { renderWithProviders } from '../lib';

describe('HomePage component', () => {
  it('renders with include the title', () => {
    renderWithProviders(<HomePageComponent />);

    const title = screen.getByRole('heading', { name: 'REST/GraphiQL Client' });
    expect(title).toBeInTheDocument();
  });
});

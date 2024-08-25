import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePageComponent from '@/app/page';

describe('HomePage component', () => {
  it('renders with inclide the title', () => {
    render(<HomePageComponent />);

    const title = screen.getByRole('heading', { name: 'REST/GraphiQL Client' });
    expect(title).toBeInTheDocument();
  });
});

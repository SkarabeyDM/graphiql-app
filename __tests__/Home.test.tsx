import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePageComponent from '@/app/page';

describe('Page', () => {
  it('renders Home page component with inclide the title', () => {
    render(<HomePageComponent />);

    const title = screen.getByRole('heading', { name: 'REST/GraphiQL Client' });
    expect(title).toBeInTheDocument();
  });
});

describe('Page', () => {
  it('renders Home page component with inclide the button', () => {
    render(<HomePageComponent />);

    const button = screen.getByText('Contained');
    expect(button).toBeInTheDocument();
  });
});

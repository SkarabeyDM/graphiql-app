import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import { LogoutButton } from '@features/auth';

describe('Logout component', () => {
  it('renders with the Logout button', () => {
    renderWithProviders(<LogoutButton />);

    const button = screen.getByTestId('logout-button');
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });
  });
});

import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { Login } from '@widgets/authorization';
import userEvent from 'user-event';
import { renderWithProviders } from '../lib';

describe('Login component', () => {
  beforeEach(() => {
    renderWithProviders(<Login />);
  });

  it('renders with inclide the title', () => {
    const title = screen.getByRole('heading', { name: 'Login' });
    expect(title).toBeInTheDocument();
  });

  it('renders with the input field "email" must accept text', () => {
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    expect(inputEmail).toBeInTheDocument();

    act(() => {
      userEvent.type(inputEmail, 'example@example.com');
      expect(inputEmail).toHaveValue('example@example.com');
    });
  });

  it('renders with the input field "password" must accept text', () => {
    const inputPassword = screen.getByLabelText('Password');
    expect(inputPassword).toBeInTheDocument();

    act(() => {
      userEvent.type(inputPassword, 'Qwerty1234#');
      expect(inputPassword).toHaveValue('Qwerty1234#');
    });
  });

  it('renders with the Login button', () => {
    const button = screen.getByTestId('Login');
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });
  });
});
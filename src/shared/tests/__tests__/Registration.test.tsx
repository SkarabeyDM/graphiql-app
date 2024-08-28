import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { Registration } from '@widgets/authorization';
import userEvent from 'user-event';
import { renderWithProviders } from '../lib';

describe('Registration component', () => {
  beforeEach(() => {
    renderWithProviders(<Registration />);
  });

  it('renders with inclide the title', () => {
    const title = screen.getByRole('heading', { name: 'Registration' });
    expect(title).toBeInTheDocument();
  });

  it('renders with the input field "email" must accept text', () => {
    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toBeInTheDocument();

    act(() => {
      userEvent.type(input, 'example@example.com');
      expect(input).toHaveValue('example@example.com');
    });
  });

  it('renders with the input field "password" must accept text', () => {
    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument();

    act(() => {
      userEvent.type(input, 'Qwerty1234#');
      expect(input).toHaveValue('Qwerty1234#');
    });
  });

  it('renders with the Registration button', () => {
    const button = screen.getByTestId('Registration');
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });
  });
});

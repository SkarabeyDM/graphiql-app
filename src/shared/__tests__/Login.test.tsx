import store from '@shared/redux';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import LoginComponent from '@widgets/authorization/Login/ui/Login';
import { Provider } from 'react-redux';
import userEvent from 'user-event';

describe('Login component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <LoginComponent />
      </Provider>,
    );
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

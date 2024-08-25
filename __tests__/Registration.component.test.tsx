import store from '@shared/redux';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import RegistrationComponent from '@widgets/authorization/Registration.component';
import { Provider } from 'react-redux';
import userEvent from 'user-event';

describe('Component', () => {
  it('renders Registration component with inclide the title', () => {
    render(
      <Provider store={store}>
        <RegistrationComponent />
      </Provider>,
    );

    const title = screen.getByRole('heading', { name: 'Registration' });
    expect(title).toBeInTheDocument();
  });
});

describe('Component', () => {
  it('renders RegistrationComponent component with the input field "email" must accept text', () => {
    render(
      <Provider store={store}>
        <RegistrationComponent />
      </Provider>,
    );

    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toBeInTheDocument();

    act(() => {
      userEvent.type(input, 'example@example.com');
    });

    expect(input).toHaveValue('example@example.com');
  });
});

describe('Component', () => {
  it('renders RegistrationComponent component with the input field "password" must accept text', () => {
    render(
      <Provider store={store}>
        <RegistrationComponent />
      </Provider>,
    );

    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument();

    act(() => {
      userEvent.type(input, 'Qwerty1234#');
    });

    expect(input).toHaveValue('Qwerty1234#');
  });
});

describe('Component', () => {
  it('renders RegistrationComponent component with the input field "confirmPassword" must accept text', () => {
    render(
      <Provider store={store}>
        <RegistrationComponent />
      </Provider>,
    );

    const input = screen.getByLabelText('Confirm password');
    expect(input).toBeInTheDocument();

    act(() => {
      userEvent.type(input, 'Qwerty1234#');
    });

    expect(input).toHaveValue('Qwerty1234#');
  });
});

describe('Component', () => {
  it('renders RegistrationComponent component with the Registration button', () => {
    render(
      <Provider store={store}>
        <RegistrationComponent />
      </Provider>,
    );

    const button = screen.getByTestId('Registration');
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });
  });
});

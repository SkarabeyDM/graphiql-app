import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { LoginForm } from '@widgets/authorization';
import userEvent from 'user-event';
import { renderWithProviders } from '../lib';

describe('Login component', () => {
  beforeEach(() => {
    renderWithProviders(<LoginForm />);
  });

  /**
   * Тест для компонента Login.
   * Проверяет, что компонент рендерится с заголовком "Login".
   *
   * @returns {void}
   */
  it('renders with inclide the title', () => {
    const title = screen.getByRole('heading', { name: 'Sign In' });
    expect(title).toBeInTheDocument();
  });

  /**
   * Тест для компонента Login.
   * Проверяет, что поле ввода "email" принимает текст.
   *
   * @returns {void}
   */
  it('renders with the input field "email" must accept text', () => {
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    expect(inputEmail).toBeInTheDocument();

    act(() => {
      userEvent.type(inputEmail, 'example@example.com');
      expect(inputEmail).toHaveValue('example@example.com');
    });
  });

  /**
   * Тест для компонента Login.
   * Проверяет, что поле ввода "password" принимает текст.
   *
   * @returns {void}
   */
  it('renders with the input field "password" must accept text', () => {
    const inputPassword = screen.getByLabelText('Password');
    expect(inputPassword).toBeInTheDocument();

    act(() => {
      userEvent.type(inputPassword, 'Qwerty1234#');
      expect(inputPassword).toHaveValue('Qwerty1234#');
    });
  });

  /**
   * Тест для компонента Login.
   * Проверяет, что кнопка "Login" рендерится и может быть нажата.
   *
   * @returns {void}
   */
  it('renders with the Login button', () => {
    const button = screen.getByTestId('login-button');
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });
  });
});

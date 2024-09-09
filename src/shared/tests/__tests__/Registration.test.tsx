import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { Registration } from '@widgets/authorization';
import userEvent from 'user-event';
import { renderWithProviders } from '../lib';

describe('Registration component', () => {
  beforeEach(() => {
    renderWithProviders(<Registration />);
  });

  /**
   * Тест для компонента Registration.
   * Проверяет, что компонент рендерится с заголовком "Registration".
   *
   * @returns {void}
   */
  it('renders with inclide the title', () => {
    const title = screen.getByRole('heading', { name: 'Registration' });
    expect(title).toBeInTheDocument();
  });

  /**
   * Тест для компонента Registration.
   * Проверяет, что поле ввода "email" принимает текст.
   *
   * @returns {void}
   */
  it('renders with the input field "email" must accept text', () => {
    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toBeInTheDocument();

    act(() => {
      userEvent.type(input, 'example@example.com');
      expect(input).toHaveValue('example@example.com');
    });
  });

  /**
   * Тест для компонента Registration.
   * Проверяет, что поле ввода "password" принимает текст.
   *
   * @returns {void}
   */
  it('renders with the input field "password" must accept text', () => {
    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument();

    act(() => {
      userEvent.type(input, 'Qwerty1234#');
      expect(input).toHaveValue('Qwerty1234#');
    });
  });

  /**
   * Тест для компонента Registration.
   * Проверяет, что кнопка "Registration" рендерится и может быть нажата.
   *
   * @returns {void}
   */
  it('renders with the Registration button', () => {
    const button = screen.getByTestId('Registration');
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });
  });
});

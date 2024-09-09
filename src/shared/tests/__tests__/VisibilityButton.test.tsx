import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { VisibilityButton } from '@widgets/authorization';

describe('IconPassword component', () => {
  /**
   * Тест для компонента IconPassword.
   * Проверяет, что видимость пароля переключается при нажатии на кнопку.
   *
   * @returns {void}
   */
  it('should toggle password visibility when clicked', () => {
    const setShowPasswordMock = jest.fn();
    const showPassword = true;

    const { getByRole } = render(
      <VisibilityButton
        setShowPassword={setShowPasswordMock}
        showPassword={showPassword}
      />,
    );

    const iconButton = getByRole('button');

    fireEvent.click(iconButton);
    expect(setShowPasswordMock).toHaveBeenCalledWith(!showPassword);
  });
});

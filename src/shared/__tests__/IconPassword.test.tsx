import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { IconPassword } from '@widgets/authorization/IconPassword';

describe('IconPassword component', () => {
  it('should toggle password visibility when clicked', () => {
    const setShowPasswordMock = jest.fn();
    const showPassword = true;

    const { getByRole } = render(
      <IconPassword
        setShowPassword={setShowPasswordMock}
        showPassword={showPassword}
      />,
    );

    const iconButton = getByRole('button');

    fireEvent.click(iconButton);
    expect(setShowPasswordMock).toHaveBeenCalledWith(!showPassword);
  });
});

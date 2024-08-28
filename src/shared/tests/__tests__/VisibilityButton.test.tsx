import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { VisibilityButton } from '@widgets/authorization';

describe('IconPassword component', () => {
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

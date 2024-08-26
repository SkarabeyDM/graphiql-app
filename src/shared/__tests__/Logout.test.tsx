import store from '@shared/redux';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Logout } from '@widgets/authorization/Logout';
import { Provider } from 'react-redux';

describe('Logout component', () => {
  it('renders with the Logout button', () => {
    render(
      <Provider store={store}>
        <Logout />
      </Provider>,
    );

    const button = screen.getByTestId('Logout');
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });
  });
});

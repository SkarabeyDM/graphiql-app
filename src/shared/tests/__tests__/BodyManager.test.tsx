import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import userEvent from 'user-event';
import { renderWithProviders } from '../lib';
import BodyManager from '@widgets/restFullClient/ui/BodyManager';
import { IBodyProps } from '@widgets/restFullClient/model/bodyManagerModel';

describe('BodyManager component', () => {
  const defaultProps: IBodyProps = {
    body: null,
    setBody: jest.fn(),
  };

  beforeEach(() => {
    renderWithProviders(<BodyManager {...defaultProps} />);
  });

  /**
   * Тест для компонента BodyManager.
   * Проверяет, что поле "Body" принимает валидный текст/JSON.
   *
   * @returns {void}
   */
  it('renders with the field "Body" must accept valid text/json', () => {
    const field = screen.getByRole('textbox', { name: 'Body' });
    expect(field).toBeInTheDocument();

    act(() => {
      userEvent.type(field, '{"name":"Tesla","color":"#e6e6fa","id":1}');
      expect(defaultProps.setBody).toHaveBeenCalledWith({
        name: 'Tesla',
        color: '#e6e6fa',
        id: 1,
      });
    });
  });
});

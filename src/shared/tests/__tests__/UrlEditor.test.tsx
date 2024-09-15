import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import { IBodyData } from '@widgets/restFullClient/model/bodyManagerModel';
import { ICRUD } from '@features/editor/model/methodEditorModel';
import { IUrlProps } from '@features/editor/model/urlEditorModel';
import { IHeadersData } from '@features/editor/model/headersEditorModel';
import { UrlEditor } from '@features/editor';

describe('UrlEditor component', () => {
  const defaultProps: IUrlProps = {
    url: '',
    setUrl: jest.fn(),
    method: 'GET' as ICRUD,
    headers: { 'Content-Type': 'application/json' } as IHeadersData,
    body: null as IBodyData | null,
  };

  const renderComponent = (props: Partial<IUrlProps> = {}) => {
    return renderWithProviders(<UrlEditor {...defaultProps} {...props} />);
  };

  /**
   * Тест для компонента UrlEditor.
   * Проверяет, что компонент UrlEditor рендерится.
   *
   * @returns {void}
   */
  it('renders UrlEditor component', () => {
    renderComponent();
    expect(screen.getByLabelText('Endpoint URL')).toBeInTheDocument();
  });

  /**
   * Тест для компонента UrlEditor.
   * Проверяет, что функция setUrl вызывается при изменении ввода.
   *
   * @returns {void}
   */
  it('calls setUrl on input change', () => {
    const setUrl = jest.fn();
    renderComponent({ setUrl });

    const input = screen.getByLabelText('Endpoint URL');

    act(() => {
      fireEvent.change(input, { target: { value: 'https://example.com' } });
      expect(setUrl).toHaveBeenCalledWith('https://example.com');
    });
  });
});

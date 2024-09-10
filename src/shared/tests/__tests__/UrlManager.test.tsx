import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import { IBodyData } from '@widgets/restFullClient/model/bodyManagerModel';
import { ICRUD } from '@widgets/restFullClient/model/methodManagerModel';
import { IUrlProps } from '@widgets/restFullClient/model/urlManagerModel';
import UrlManager from '@widgets/restFullClient/ui/UrlManager';
import { IHeadersData } from '@widgets/restFullClient/model/headerManagerModel';

describe('UrlManager component', () => {
  const defaultProps: IUrlProps = {
    url: '',
    setUrl: jest.fn(),
    method: 'GET' as ICRUD,
    headers: { 'Content-Type': 'application/json' } as IHeadersData,
    body: null as IBodyData | null,
  };

  const renderComponent = (props: Partial<IUrlProps> = {}) => {
    return renderWithProviders(<UrlManager {...defaultProps} {...props} />);
  };

  /**
   * Тест для компонента UrlManager.
   * Проверяет, что компонент UrlManager рендерится.
   *
   * @returns {void}
   */
  it('renders UrlManager component', () => {
    renderComponent();
    expect(screen.getByLabelText('Endpoint URL')).toBeInTheDocument();
  });

  /**
   * Тест для компонента UrlManager.
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

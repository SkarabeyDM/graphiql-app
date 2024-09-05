import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import { IBodyData } from '@widgets/restFullClient/model/bodyManagerModel';
import { IHeaderData } from '@widgets/restFullClient/model/headerManagerModel';
import { ICRUD } from '@widgets/restFullClient/model/methodManagerModel';
import { IUrlProps } from '@widgets/restFullClient/model/urlManagerModel';
import UrlManager from '@widgets/restFullClient/ui/UrlManager';

describe('UrlManager component', () => {
  const defaultProps: IUrlProps = {
    url: '',
    setUrl: jest.fn(),
    method: 'GET' as ICRUD,
    headers: { 'Content-Type': 'application/json' } as IHeaderData,
    body: null as IBodyData | null,
  };

  const renderComponent = (props: Partial<IUrlProps> = {}) => {
    return renderWithProviders(<UrlManager {...defaultProps} {...props} />);
  };

  it('renders UrlManager component', () => {
    renderComponent();
    expect(screen.getByLabelText('Endpoint URL')).toBeInTheDocument();
  });

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

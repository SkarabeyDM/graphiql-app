import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import OneHeaderElement from '@widgets/restFullClient/ui/OneHeaderElement';
import { IHeadersElementProps } from '@widgets/restFullClient/model/headerManagerModel';

describe('OneHeaderElement component', () => {
  const renderComponent = (props: Partial<IHeadersElementProps> = {}) => {
    const defaultProps: IHeadersElementProps = {
      id: 1,
      setItems: jest.fn(),
    };
    return renderWithProviders(
      <OneHeaderElement {...defaultProps} {...props} />,
    );
  };

  /**
   * Тест для компонента OneHeaderElement.
   * Проверяет, что компонент OneHeaderElement рендерится.
   *
   * @returns {void}
   */
  it('renders OneHeaderElement component', () => {
    renderComponent();
    expect(screen.getByLabelText('Key')).toBeInTheDocument();
    expect(screen.getByLabelText('Value')).toBeInTheDocument();
  });
});

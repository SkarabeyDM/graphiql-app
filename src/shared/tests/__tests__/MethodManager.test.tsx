import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import MethodManager from '@widgets/restFullClient/ui/MethodManager';
import {
  ICRUD,
  IMethodProps,
} from '@widgets/restFullClient/model/methodManagerModel';

describe('MethodManager component', () => {
  const renderComponent = (props: Partial<IMethodProps> = {}) => {
    const defaultProps: IMethodProps = {
      method: ICRUD.GET,
      setMethod: jest.fn(),
    };
    return renderWithProviders(<MethodManager {...defaultProps} {...props} />);
  };

  /**
   * Тест для компонента MethodManager.
   * Проверяет, что компонент MethodManager рендерится.
   *
   * @returns {void}
   */
  it('renders MethodManager component', () => {
    renderComponent();
    expect(screen.getByLabelText('Method')).toBeInTheDocument();
  });

  /**
   * Тест для компонента MethodManager.
   * Проверяет, что отображается правильный начальный метод.
   *
   * @returns {void}
   */
  it('displays the correct initial method', () => {
    renderComponent({ method: ICRUD.POST });
    expect(screen.getByDisplayValue('POST')).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import { ICRUD, IMethodProps } from '@features/editor/model/methodEditorModel';
import { MethodEditor } from '@features/editor';

describe('MethodEditor component', () => {
  const renderComponent = (props: Partial<IMethodProps> = {}) => {
    const defaultProps: IMethodProps = {
      method: ICRUD.GET,
      setMethod: jest.fn(),
    };
    return renderWithProviders(<MethodEditor {...defaultProps} {...props} />);
  };

  /**
   * Тест для компонента MethodEditor.
   * Проверяет, что компонент MethodEditor рендерится.
   *
   * @returns {void}
   */
  it('renders MethodEditor component', () => {
    renderComponent();
    expect(screen.getByLabelText('Method')).toBeInTheDocument();
  });

  /**
   * Тест для компонента MethodEditor.
   * Проверяет, что отображается правильный начальный метод.
   *
   * @returns {void}
   */
  it('displays the correct initial method', () => {
    renderComponent({ method: ICRUD.POST });
    expect(screen.getByDisplayValue('POST')).toBeInTheDocument();
  });
});

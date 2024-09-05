import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../lib';
import OneHeaderElement from '@widgets/restFullClient/ui/OneHeaderElement';
import { IHeaderElementProps } from '@widgets/restFullClient/model/headerManagerModel';

describe('OneHeaderElement component', () => {
  const renderComponent = (props: Partial<IHeaderElementProps> = {}) => {
    const defaultProps: IHeaderElementProps = {
      id: 1,
      items: [{ id: 1, data: { key: '', value: '' } }],
      setItems: jest.fn(),
    };
    return renderWithProviders(
      <OneHeaderElement {...defaultProps} {...props} />,
    );
  };

  it('renders OneHeaderElement component', () => {
    renderComponent();
    expect(screen.getByLabelText('Key')).toBeInTheDocument();
    expect(screen.getByLabelText('Value')).toBeInTheDocument();
  });
});

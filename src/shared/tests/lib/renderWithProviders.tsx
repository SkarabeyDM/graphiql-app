import { StoreProvider } from '@shared/redux';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';

export const renderWithProviders = (ui: ReactNode) => {
  render(<StoreProvider>{ui}</StoreProvider>);
};

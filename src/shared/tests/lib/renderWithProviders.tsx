import { Locales } from '@shared/i18n';
import { en, ru } from '@shared/i18n/messages';
import { StoreProvider } from '@shared/redux';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

interface RenderWithProvidersOptions {
  locale?: Locales;
}

export const renderWithProviders = (
  ui: ReactNode,
  { locale = Locales.English }: RenderWithProvidersOptions = {},
) => {
  return render(
    <StoreProvider>
      <NextIntlClientProvider
        locale={locale}
        messages={locale === Locales.English ? en : ru}
      >
        {ui}
      </NextIntlClientProvider>
    </StoreProvider>,
  );
};

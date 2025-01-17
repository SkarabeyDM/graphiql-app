import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from 'next/font/google';
import { Box, Stack } from '@mui/material';
import { StoreProvider } from '@shared/redux';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Alert } from '@widgets/alert';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'REST/GraphiQL Client',
};

export const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const messages = await getMessages();

  return (
    <StoreProvider>
      <AppRouterCacheProvider>
        <Box component="html" height="100%" lang={locale}>
          <Stack
            component="body"
            m={0}
            height="100%"
            minHeight="100%"
            className={inter.className}
          >
            <NextIntlClientProvider messages={messages}>
              <Header />
              <Alert />
              <Box py={2}>{children}</Box>
              <Footer />
            </NextIntlClientProvider>
          </Stack>
        </Box>
      </AppRouterCacheProvider>
    </StoreProvider>
  );
};

export default RootLayout;

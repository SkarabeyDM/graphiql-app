'use client';

import { useAuthState } from '@entities/user';
import { LogoutButton } from '@features/auth';
import { LanguageSelect } from '@features/internationalization';
import { AppBar, ButtonGroup, Stack } from '@mui/material';
import { Button, Link } from '@shared/ui';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';

export const Header: FC = () => {
  const t = useTranslations('Auth');
  const [user] = useAuthState();

  return (
    <AppBar position="sticky" color="default">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        p={2}
      >
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
        </Link>
        <Stack direction="row" gap={2} overflow={'auto'}>
          <LanguageSelect />
          {user ? (
            <LogoutButton />
          ) : (
            <ButtonGroup>
              <Button variant="contained" href="/login">
                {t('login')}
              </Button>
              <Button href="/register">{t('register')}</Button>
            </ButtonGroup>
          )}
        </Stack>
      </Stack>
    </AppBar>
  );
};

'use client';

import { useAuthState } from '@entities/user';
import { LogoutButton } from '@features/auth';
import { LanguageSelect } from '@features/internationalization';
import { AppBar, Stack } from '@mui/material';
import { Link } from '@shared/ui';
import Image from 'next/image';
import { FC } from 'react';

export const Header: FC = () => {
  const [user] = useAuthState();

  return (
    <AppBar position="sticky" color="transparent">
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
        <Stack direction="row" gap={2} alignItems="center">
          {user ? (
            <LogoutButton />
          ) : (
            <>
              <Link href="/login">Login</Link>/
              <Link href="/register">Register</Link>
            </>
          )}
          <LanguageSelect />
        </Stack>
      </Stack>
    </AppBar>
  );
};

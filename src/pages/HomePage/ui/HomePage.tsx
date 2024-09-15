'use client';
import { useAuthState } from '@entities/user';
import { EditorsGroup } from '@features/editor/ui';
import { Container, Stack } from '@mui/material';
import { Button } from '@shared/ui';
import { Authors } from '@widgets/Authors';
import { Greeting } from '@widgets/Greeting';
import { useTranslations } from 'next-intl';

export const HomePage = () => {
  const t = useTranslations('Auth');
  const [user] = useAuthState();

  return (
    <Container>
      <Stack gap={2} alignItems={'center'}>
        <Greeting />
        {user ? (
          <EditorsGroup />
        ) : (
          <Stack direction="row" gap={5}>
            <Button variant="contained" href="/login">
              {t('login')}
            </Button>
            <Button href="/register">{t('register')}</Button>
          </Stack>
        )}
        <Authors />
      </Stack>
    </Container>
  );
};

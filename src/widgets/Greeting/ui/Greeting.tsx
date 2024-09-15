'use client';

import { useAuthState } from '@entities/user';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { getUserName } from '../lib';

export const Greeting = () => {
  const t = useTranslations('Greetings');
  const [user] = useAuthState();

  return (
    <Typography variant="h5" fontWeight="bold" textAlign={'center'} p={2}>
      {user
        ? `${t('welcomeBack').replace('[username]', getUserName(user))}`
        : t('welcome')}
    </Typography>
  );
};

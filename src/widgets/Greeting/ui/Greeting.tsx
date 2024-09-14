'use client';

import { useAuthState } from '@entities/user';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { getUserName } from '../lib';

export const Greeting = () => {
  const t = useTranslations('Greetings');
  const [user] = useAuthState();
  return (
    <Box
      p={2}
      border={1}
      borderColor={({ palette }) => palette.text.disabled}
      borderRadius={2}
    >
      <Typography variant="h4" fontWeight="bold" textAlign={'center'}>
        {user
          ? `${t('welcomeBack').replace('[username]', getUserName(user))}`
          : t('welcome')}
        {/* {`Welcome${user ? ` back, ${user?.displayName ?? user?.email}` : ''}!`} */}
      </Typography>
    </Box>
  );
};

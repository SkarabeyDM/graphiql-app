'use client';
import { PrivateRoute } from '@entities/user';
import { Container, Stack, Typography } from '@mui/material';
import { getHistory } from '@shared/lib';
import { HistoryItem } from './HistoryItem';
import { useTranslations } from 'next-intl';

export const HistoryPage = () => {
  const t = useTranslations('Editors');

  return (
    <PrivateRoute requireAuth>
      <Container component="main">
        <Typography variant="h5" align="center" color="text.secondary">
          {t('history')}
        </Typography>
        <Stack alignContent="flex-start" gap={2}>
          {getHistory().map((item, index) => (
            <HistoryItem
              key={index}
              editorType={item.type}
              url={item.urlQuery}
              method={item.method}
            />
          ))}
        </Stack>
      </Container>
    </PrivateRoute>
  );
};

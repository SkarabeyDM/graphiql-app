'use client';

import { ButtonGroup } from '@mui/material';
import { Button } from '@shared/ui';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

export const EditorsGroup: FC = () => {
  const t = useTranslations('Editors');
  return (
    <ButtonGroup>
      <Button href="/editor/restfull">{t('restfull')}</Button>
      <Button href="/editor/graphiql">{t('graphiql')}</Button>
      <Button href="/history">{t('history')}</Button>
    </ButtonGroup>
  );
};

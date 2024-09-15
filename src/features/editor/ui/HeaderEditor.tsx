'use client';
import { useState, useEffect, FC } from 'react';
import { Box, Button } from '@mui/material';
import OneHeaderElement from './OneHeaderElement';
import {
  IHeadersData,
  IHeadersItem,
  IHeadersProps,
} from '../model/headersEditorModel';
import { useTranslations } from 'next-intl';

export const HeaderEditor: FC<IHeadersProps> = ({ setHeaders }) => {
  const t = useTranslations('HeaderEditor');
  const [count, setCount] = useState<number>(1);
  const [items, setItems] = useState<IHeadersItem[]>([]);

  const createHeader = (): void => {
    const item: IHeadersItem = { id: count, data: { key: '', value: '' } };
    setItems((prev) => [...prev, item]);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const newHeaders: IHeadersData = items.reduce(
      (object: IHeadersData, el: IHeadersItem) =>
        el.data.key
          ? { ...object, [el.data.key]: el.data.value }
          : { ...object },
      {},
    );

    const isHeaders = Object.keys(newHeaders)[0];

    isHeaders ? setHeaders(newHeaders) : setHeaders({});
  }, [items]);

  return (
    <Box>
      <Button
        onClick={createHeader}
        data-testid="Create Header"
        variant="contained"
      >
        {t('createHeader')}
      </Button>
      <Box>
        {items.map(({ id }: IHeadersItem) => (
          <OneHeaderElement key={id} id={id} setItems={setItems} />
        ))}
      </Box>
    </Box>
  );
};

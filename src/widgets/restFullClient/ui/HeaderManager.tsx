import { useState, useEffect, FC } from 'react';
import { Box, Button } from '@mui/material';
import OneHeaderElement from './OneHeaderElement';
import {
  IHeadersData,
  IHeadersItem,
  IheadersProps,
} from '../model/headerManagerModel';

const HeaderManager: FC<IheadersProps> = ({ setHeaders }) => {
  const [count, setCount] = useState<number>(1);
  const [items, setItems] = useState<IHeadersItem[]>([]);

  const createHeader = (): void => {
    const item: IHeadersItem = { id: count, data: { key: '', value: '' } };
    setItems((prev) => [...prev, item]);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const newHeaders: IHeadersData = items.reduce(
      (object: IHeadersData, el: IHeadersItem) => {
        return { ...object, [el.data.key]: el.data.value };
      },
      {},
    );
    setHeaders(newHeaders);
  }, [items]);

  return (
    <Box>
      <Button
        onClick={createHeader}
        data-testid="Create Header"
        variant="contained"
      >
        Create Header
      </Button>
      <Box margin="0.5em 0">
        {items.map((el: IHeadersItem) => (
          <OneHeaderElement key={el.id} id={el.id} setItems={setItems} />
        ))}
      </Box>
    </Box>
  );
};

export default HeaderManager;

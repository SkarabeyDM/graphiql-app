import { useState, useEffect } from 'react';

import { Box, Button } from '@mui/material';
import OneHeaderElement from './OneHeaderElement';
import {
  IHeaderData,
  IHeaderItem,
  IheadersProps,
} from '../model/headerManagerModel';

const HeaderManager = (props: IheadersProps) => {
  const { setHeaders } = props;

  const [count, setCount] = useState<number>(1);
  const [items, setItems] = useState<IHeaderItem[]>([]);

  const createHeader = () => {
    const item: IHeaderItem = { id: count, data: { key: '', value: '' } };
    setItems((prev) => [...prev, item]);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    createHeader();
  }, []);

  useEffect(() => {
    const newHeaders: IHeaderData = items.reduce(
      (object: IHeaderData, el: IHeaderItem) => {
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
        {items.map((el: IHeaderItem) => (
          <OneHeaderElement
            key={el.id}
            id={el.id}
            items={items}
            setItems={setItems}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeaderManager;

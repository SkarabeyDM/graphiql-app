import { useState, useEffect, FC } from 'react';
import { Box, Button } from '@mui/material';
import OneHeaderElement from './OneHeaderElement';
import {
  IHeadersData,
  IHeadersItem,
  IheadersProps,
} from '../model/headersEditorModel';

const HeaderEditor: FC<IheadersProps> = ({ setHeaders }) => {
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
        Create Header
      </Button>
      <Box margin="0.5em 0">
        {items.map(({ id }: IHeadersItem) => (
          <OneHeaderElement key={id} id={id} setItems={setItems} />
        ))}
      </Box>
    </Box>
  );
};

export default HeaderEditor;

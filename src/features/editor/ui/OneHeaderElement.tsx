import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import {
  IHeadersData,
  IHeadersElementProps,
  IHeadersItem,
} from '../model/headersEditorModel';
import { FC, useState } from 'react';
import { headersSchema } from '../model/schema';

const OneHeaderElement: FC<IHeadersElementProps> = ({ id, setItems }) => {
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(headersSchema),
  });

  const add = (data: IHeadersData): void => {
    setItems((prev) => [
      ...prev.map((el: IHeadersItem) =>
        el.id === id ? { id, data: { key: data.key, value: data.value } } : el,
      ),
    ]);
    setInputDisabled(true);
  };

  const del = (): void => {
    setItems((prev) => [...prev.filter((el: IHeadersItem) => el.id !== id)]);
    setInputDisabled(true);
  };

  return (
    <Box
      display="flex"
      onSubmit={handleSubmit(add)}
      component="form"
      sx={{
        '& > :not(style)': { m: 0.5 },
      }}
    >
      <TextField
        disabled={inputDisabled}
        fullWidth
        id="key"
        label="Key"
        variant="outlined"
        error={!!errors.key}
        helperText={errors.key && errors.key.message ? errors.key.message : ''}
        {...register('key')}
      />
      <TextField
        disabled={inputDisabled}
        fullWidth
        id="value"
        label="Value"
        variant="outlined"
        error={!!errors.value}
        helperText={
          errors.value && errors.value.message ? errors.value.message : ''
        }
        {...register('value', { onChange: () => null })}
      />
      <Button
        data-testid="Add"
        type="submit"
        disabled={inputDisabled || !isValid}
        variant="contained"
      >
        Add
      </Button>
      <Button
        onClick={() => setInputDisabled(false)}
        data-testid="Upd"
        disabled={!inputDisabled}
        variant="contained"
      >
        Upd
      </Button>
      <Button onClick={del} data-testid="Del" variant="contained">
        Del
      </Button>
    </Box>
  );
};

export default OneHeaderElement;

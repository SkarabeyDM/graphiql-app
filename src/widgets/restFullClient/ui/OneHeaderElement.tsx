import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import {
  IHeaderData,
  IHeaderElementProps,
  IHeaderItem,
} from '../model/headerManagerModel';
import TextFieldHint from '@shared/ui/TextFieldHint';
import { useState } from 'react';

const OneHeaderElement = (props: IHeaderElementProps) => {
  const { id, setItems } = props;

  const [inputDisabled, setInputDisabled] = useState<boolean>(false);

  const headerSchema = yup.object().shape({
    key: yup.string().required('This field is required'),
    value: yup.string().required('This field is required'),
  });

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(headerSchema),
  });

  const add = (data: IHeaderData) => {
    setItems((prev) => [
      ...prev.map((el: IHeaderItem) =>
        el.id === id ? { id, data: { key: data.key, value: data.value } } : el,
      ),
    ]);
    setInputDisabled(true);
  };

  const del = () => {
    setItems((prev) => [...prev.filter((el: IHeaderItem) => el.id !== id)]);
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
      <Box position="relative">
        <TextField
          disabled={inputDisabled}
          fullWidth
          id="key"
          label="Key"
          variant="outlined"
          {...register('key', { onChange: () => null })}
        />

        <TextFieldHint
          text={errors.key && errors.key.message ? errors.key.message : ''}
        />
      </Box>
      <Box position="relative">
        <TextField
          disabled={inputDisabled}
          fullWidth
          id="value"
          label="Value"
          variant="outlined"
          {...register('value', { onChange: () => null })}
        />

        <TextFieldHint
          text={
            errors.value && errors.value.message ? errors.value.message : ''
          }
        />
      </Box>
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

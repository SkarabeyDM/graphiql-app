import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ButtonGroup, IconButton, Stack, TextField } from '@mui/material';
import {
  IHeadersData,
  IHeadersElementProps,
  IHeadersItem,
} from '../model/headersEditorModel';
import { FC, useState } from 'react';
import { headersSchema } from '../model/schema';
import { Delete, Edit, Save } from '@mui/icons-material';
import { useTranslations } from 'next-intl';

const OneHeaderElement: FC<IHeadersElementProps> = ({ id, setItems }) => {
  const t = useTranslations('HeaderEditor');
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
    <Stack
      direction="row"
      onSubmit={handleSubmit(add)}
      component="form"
      alignItems="center"
      py={1}
      gap={1}
    >
      <TextField
        disabled={inputDisabled}
        fullWidth
        id="key"
        label={t('key')}
        variant="outlined"
        error={!!errors.key}
        helperText={errors.key && errors.key.message ? errors.key.message : ''}
        {...register('key')}
      />
      <TextField
        disabled={inputDisabled}
        fullWidth
        id="value"
        label={t('value')}
        variant="outlined"
        error={!!errors.value}
        helperText={
          errors.value && errors.value.message ? errors.value.message : ''
        }
        {...register('value', { onChange: () => null })}
      />
      <ButtonGroup>
        <IconButton
          data-testid="Add"
          type="submit"
          disabled={inputDisabled || !isValid}
        >
          <Save />
        </IconButton>
        <IconButton
          onClick={() => setInputDisabled(false)}
          data-testid="Upd"
          disabled={!inputDisabled}
        >
          <Edit />
        </IconButton>
        <IconButton onClick={del} data-testid="Del">
          <Delete />
        </IconButton>
      </ButtonGroup>
    </Stack>
  );
};

export default OneHeaderElement;

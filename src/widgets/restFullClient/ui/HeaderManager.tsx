import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { IHeaderData, IHeaderProps } from '../model/headerManagerModel';
import TextFieldHint from '@shared/ui/TextFieldHint';

const HeaderManager = (props: IHeaderProps) => {
  const { setHeaders } = props;

  const headerSchema = yup.object().shape({
    key: yup.string().required('This field is required'),
    value: yup.string().required('This field is required'),
  });

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(headerSchema),
  });

  const onSubmit = (data: IHeaderData) => {
    if (data) {
      setHeaders((prev: IHeaderData) => ({ ...prev, [data.key]: data.value }));
    }

    reset();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    >
      <Button
        data-testid="Login"
        disabled={!isValid}
        type="submit"
        variant="contained"
      >
        Add Header
      </Button>
      <Box display="flex" justifyContent="space-between" gap="0.2em">
        <Box position="relative">
          <TextField
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
      </Box>
    </Box>
  );
};

export default HeaderManager;

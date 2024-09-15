'use client';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ICRUD, IMethodProps } from '../model/methodEditorModel';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

export const MethodEditor: FC<IMethodProps> = ({ method, setMethod }) => {
  const t = useTranslations('MethodEditor');
  const handleChange = (e: SelectChangeEvent<string>): void => {
    const { value } = e?.target || {};

    if (!value) {
      return;
    }

    setMethod(value as ICRUD);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="request-method-select-label">{t('method')}</InputLabel>
      <Select
        labelId="request-method-select-label"
        id="request-method-select"
        value={method}
        label={t('method')}
        onChange={handleChange}
      >
        {Object.values(ICRUD).map((crudValue: ICRUD) => (
          <MenuItem key={crudValue} value={crudValue}>
            {crudValue}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

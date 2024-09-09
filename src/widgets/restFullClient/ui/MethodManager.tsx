import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ICRUD, IMethodProps } from '../model/methodManagerModel';
import { FC } from 'react';

const MethodManager: FC<IMethodProps> = ({ method, setMethod }) => {
  const handleChange = (e: SelectChangeEvent<string>): void => {
    const { value } = e.target;
    setMethod(value as ICRUD);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="request-method-select-label">Method</InputLabel>
      <Select
        labelId="request-method-select-label"
        id="request-method-select"
        value={method}
        label="Method"
        onChange={handleChange}
      >
        <MenuItem value={ICRUD.GET}>GET</MenuItem>
        <MenuItem value={ICRUD.POST}>POST</MenuItem>
        <MenuItem value={ICRUD.PUT}>PUT</MenuItem>
        <MenuItem value={ICRUD.DELETE}>DELETE</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MethodManager;

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ICRUD, IMethodProps } from '../model/methodManagerModel';

const MethodManager = (props: IMethodProps) => {
  const { method, setMethod } = props;

  return (
    <FormControl fullWidth>
      <InputLabel id="request-method-select-label">Method</InputLabel>
      <Select
        labelId="request-method-select-label"
        id="request-method-select"
        value={method}
        label="Method"
        onChange={(e) => setMethod(e.target.value as ICRUD)}
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

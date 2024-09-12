import { FC, useState } from 'react';
import { TextField } from '@mui/material';
import { IBodyProps } from '../model/bodyManagerModel';

const BodyManager: FC<IBodyProps> = ({ body, setBody }) => {
  const [json, setJson] = useState<string>(() =>
    !body ? '' : JSON.stringify(body),
  );
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e?.target || {};

    setJson(value);

    try {
      const parsed = JSON.parse(value);

      setBody(parsed);
      setError(null);
    } catch (err) {
      setBody(() => null);
      setError('Invalid JSON');
    }
  };

  return (
    <TextField
      label="Body"
      placeholder={`Example: {"model":"Cooper"}`}
      value={json}
      onChange={handleChange}
      fullWidth
      multiline
      rows={3}
      error={!!error}
      helperText={!!error && typeof error === 'string' ? error : ''}
    />
  );
};

export default BodyManager;

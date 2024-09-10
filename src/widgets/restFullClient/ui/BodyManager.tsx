import { FC, useState } from 'react';
import { Box, TextField } from '@mui/material';
import TextFieldHint from '@shared/ui/TextFieldHint';
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
    <Box position="relative" margin="1.5em 0">
      <TextField
        label="Body"
        placeholder={`Example: {"model":"Cooper"}`}
        value={json}
        onChange={handleChange}
        fullWidth
        multiline
        rows={3}
      />
      <TextFieldHint text={!!error && typeof error === 'string' ? error : ''} />
    </Box>
  );
};

export default BodyManager;

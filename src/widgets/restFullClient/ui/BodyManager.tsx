import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import TextFieldHint from '@shared/ui/TextFieldHint';
import { IBodyProps } from '../model/bodyManagerModel';

const BodyManager = (props: IBodyProps) => {
  const { body, setBody } = props;

  const [textBody, setTextBody] = useState<string>(
    body === null ? '' : JSON.stringify(body, null, 2),
  );
  const [error, setError] = useState<string | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTextBody(value);
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
    <>
      <Box position="relative" margin="1.5em 0">
        <TextField
          label="Body"
          placeholder={`Example: {"model":"Cooper"}`}
          value={textBody}
          onChange={handleTextChange}
          fullWidth
          multiline
          rows={3}
        />
        <TextFieldHint
          text={!!error && typeof error === 'string' ? error : ''}
        />
      </Box>
    </>
  );
};

export default BodyManager;

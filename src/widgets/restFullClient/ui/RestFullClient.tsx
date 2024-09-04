'use client';
import { useState } from 'react';
import { Box, TextField } from '@mui/material';

import MethodManager from './MethodManager';
import { ICRUD } from '../model/methodManagerModel';

const RestFullClient = () => {
  const [method, setMethod] = useState<ICRUD>(ICRUD.GET);
  const [url, setUrl] = useState<string>('');

  return (
    <Box>
      <h2>RESTfull client</h2>

      <MethodManager method={method} setMethod={setMethod} />

      <TextField
        fullWidth
        margin="normal"
        label="Endpoint URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </Box>
  );
};

export default RestFullClient;

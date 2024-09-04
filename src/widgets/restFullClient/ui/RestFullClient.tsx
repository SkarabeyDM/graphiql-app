'use client';
import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import MethodManager from './MethodManager';
import HeaderManager from './HeaderManager';
import BodyManager from './BodyManager';

import { ICRUD } from '../model/methodManagerModel';
import { IBodyData } from '../model/bodyManagerModel';
import { IHeaderData } from '../model/headerManagerModel';

const RestFullClient = () => {
  const [method, setMethod] = useState<ICRUD>(ICRUD.GET);
  const [url, setUrl] = useState<string>('');
  const [headers, setHeaders] = useState<IHeaderData>({});
  const [body, setBody] = useState<IBodyData | null>(null);

  const handleSendRequest = async () => {
    // eslint-disable-next-line no-console
    console.log(headers);
  };

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

      <HeaderManager setHeaders={setHeaders} />

      <BodyManager body={body} setBody={setBody} />

      <Button variant="contained" color="primary" onClick={handleSendRequest}>
        Send Request
      </Button>
    </Box>
  );
};

export default RestFullClient;

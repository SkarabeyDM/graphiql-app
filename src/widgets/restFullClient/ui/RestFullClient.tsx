'use client';
import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import MethodManager from './MethodManager';
import HeaderManager from './HeaderManager';
import BodyManager from './BodyManager';

import { ICRUD } from '../model/methodManagerModel';
import { IBodyData } from '../model/bodyManagerModel';
import { IHeaderData } from '../model/headerManagerModel';
import { IRequestData } from '../model/requestHandlerModel';
import { sendRequest } from '../model/requestHandler';
import { AxiosResponse } from 'axios';

const RestFullClient = () => {
  const [method, setMethod] = useState<ICRUD>(ICRUD.GET);
  const [url, setUrl] = useState<string>('');
  const [headers, setHeaders] = useState<IHeaderData>({});
  const [body, setBody] = useState<IBodyData | null>(null);

  const [response, setResponse] = useState<
    AxiosResponse<unknown, unknown> | undefined
  >();

  const isAxiosResponse = (
    response: AxiosResponse<unknown, unknown> | undefined,
  ) => {
    return typeof response !== 'undefined' && 'status' in response;
  };

  const handleSendRequest = async () => {
    const data: IRequestData = {
      method: method,
      url: url,
      headers: headers,
      body: body,
    };

    const response = await sendRequest(data);
    setResponse(response);
  };

  const isRequestRequired =
    method === ICRUD.POST || method === ICRUD.PUT ? !body || !url : !url;

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

      <Button
        disabled={isRequestRequired}
        variant="contained"
        color="primary"
        onClick={handleSendRequest}
      >
        Send Request
      </Button>

      {response && (
        <Box width="50em" overflow="hidden" marginTop={2}>
          <Typography variant="h6">Response</Typography>
          <Typography>
            Status: {isAxiosResponse(response) ? response.status : 'No status'}
          </Typography>
          <pre
            style={{
              maxWidth: '100%',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
          >
            {JSON.stringify(response, null, 2)}
          </pre>
        </Box>
      )}
    </Box>
  );
};

export default RestFullClient;

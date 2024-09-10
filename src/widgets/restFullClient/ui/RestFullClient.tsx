'use client';
import { FC, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import MethodManager from './MethodManager';
import HeaderManager from './HeaderManager';
import BodyManager from './BodyManager';
import { ICRUD } from '../model/methodManagerModel';
import { IBodyData } from '../model/bodyManagerModel';
import { IHeadersData } from '../model/headerManagerModel';
import { IRequestData } from '../model/requestHandlerModel';
import { AxiosResponse } from 'axios';
import UrlManager from './UrlManager';
import { useAppDispatch } from '@shared/redux';
import { showAlert } from '@shared/redux/slices/alertSlice';
import { AlertStyle } from '@widgets/alert/model/Alert.model';
import { sendRequest } from '../lib/requestHandler';

const RestFullClient: FC = () => {
  const dispatch = useAppDispatch();

  const [method, setMethod] = useState<ICRUD>(ICRUD.GET);
  const [url, setUrl] = useState<string>('');
  const [headers, setHeaders] = useState<IHeadersData>({});
  const [body, setBody] = useState<IBodyData | null>(null);
  const [response, setResponse] = useState<
    AxiosResponse<unknown, unknown> | undefined
  >();

  const isAxiosResponse = (
    response: AxiosResponse<unknown, unknown> | undefined,
  ) => {
    return typeof response !== 'undefined' && 'status' in response;
  };

  const handleSendRequest = async (): Promise<void> => {
    const DATA: IRequestData = {
      method,
      url,
      headers,
      data: body,
    };

    const response = await sendRequest(DATA);

    const isSuccessfull: boolean =
      response?.status !== undefined && response.status < 300;

    dispatch(
      showAlert({
        alert: true,
        style: isSuccessfull ? AlertStyle.success : AlertStyle.error,
        alertText: isSuccessfull
          ? 'Request completed successfully !'
          : 'Request is failed',
      }),
    );

    setResponse(response);
  };

  const isRequestRequired: boolean =
    method === ICRUD.POST || method === ICRUD.PUT ? !body || !url : !url;

  return (
    <Box width="50em">
      <h2>RESTfull client</h2>

      <MethodManager method={method} setMethod={setMethod} />

      <UrlManager
        url={url}
        setUrl={setUrl}
        method={method}
        headers={headers}
        body={body}
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

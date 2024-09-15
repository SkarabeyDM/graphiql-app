'use client';
import { FC, useState } from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import BodyManager from './BodyManager';
import { ICRUD } from '../../../features/editor/model/methodEditorModel';
import { IBodyData } from '../model/bodyManagerModel';
import { IHeadersData } from '../../../features/editor/model/headersEditorModel';
import { AxiosResponse } from 'axios';
import { useAppDispatch } from '@shared/redux';
import { showAlert } from '@shared/redux/slices/alertSlice';
import { AlertStyle } from '@widgets/alert/model/Alert.model';
import { sendRequest } from '../../../shared/lib/requestHandler';
import { HeaderEditor, MethodEditor, UrlEditor } from '@features/editor';
import { EditorType, IRequestData } from '@shared/model/requestHandlerModel';
import { useTranslations } from 'next-intl';

const RestFullClient: FC = () => {
  const t = useTranslations('Editors');
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

    const response = await sendRequest(EditorType.RestClient, DATA);

    const isSuccessful: boolean =
      response?.status !== undefined && response.status < 300;

    dispatch(
      showAlert({
        alert: true,
        style: isSuccessful ? AlertStyle.success : AlertStyle.error,
        alertText: t(isSuccessful ? 'requestSuccessful' : 'requestFailed'),
      }),
    );

    setResponse(response);
  };

  const isRequestRequired: boolean =
    method === ICRUD.POST || method === ICRUD.PUT ? !body || !url : !url;

  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight="500" marginBottom="0.5em">
          REST
        </Typography>

        <MethodEditor method={method} setMethod={setMethod} />

        <UrlEditor
          url={url}
          setUrl={setUrl}
          method={method}
          headers={headers}
          body={body}
        />

        <HeaderEditor setHeaders={setHeaders} />

        <BodyManager body={body} setBody={setBody} />

        <Button
          disabled={isRequestRequired}
          variant="contained"
          color="primary"
          onClick={handleSendRequest}
        >
          {t('sendRequest')}
        </Button>

        {response && (
          <Box overflow="hidden" marginTop={2}>
            <Typography variant="h6">Response</Typography>
            <Typography>
              Status:{' '}
              {isAxiosResponse(response) ? response.status : 'No status'}
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
      </Stack>
    </Container>
  );
};

export default RestFullClient;

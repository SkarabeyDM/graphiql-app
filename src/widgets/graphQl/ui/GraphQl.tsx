'use client';
import { HeaderEditor, MethodEditor, UrlEditor } from '@features/editor';
import { IHeadersData } from '@features/editor/model/headersEditorModel';
import { ICRUD } from '@features/editor/model/methodEditorModel';
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import BodyEditor from './BodyEditor';
import { IBodyEditorData } from '../model/bodyEditorModel';
import { AxiosResponse } from 'axios';
import { IRequestData } from '@widgets/restFullClient/model/requestHandlerModel';
import { sendRequest } from '@shared/lib/requestHandler';
import { showAlert } from '@shared/redux/slices/alertSlice';
import { AlertStyle } from '@widgets/alert/model/Alert.model';
import { useAppDispatch } from '@shared/redux';
import { useTranslations } from 'next-intl';

const GraphQl: FC = () => {
  const t = useTranslations('Editors');
  const dispatch = useAppDispatch();

  const [method, setMethod] = useState<ICRUD>(ICRUD.GET);
  const [url, setUrl] = useState<string>('');
  const [urlSdl, setUrlSdl] = useState<string>('');
  const [headers, setHeaders] = useState<IHeadersData>({});
  const [body, setBody] = useState<IBodyEditorData | null>(null);
  const [response, setResponse] = useState<
    AxiosResponse<unknown, unknown> | undefined
  >();

  useEffect(() => {
    setUrlSdl(url ? `${url}?sdl` : '');
  }, [url]);

  const isAxiosResponse = (
    response: AxiosResponse<unknown, unknown> | undefined,
  ) => {
    return typeof response !== 'undefined' && 'status' in response;
  };

  const handleChangeUrlSdl = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e?.target || {};

    setUrlSdl(value);
  };

  const handleSendRequest = async (): Promise<void> => {
    const DATA: IRequestData = {
      method,
      url,
      headers,
      data: body ? body.body : body,
    };

    const response = await sendRequest(DATA);

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
          Graph QL
        </Typography>
        <MethodEditor method={method} setMethod={setMethod} />

        <UrlEditor
          url={url}
          setUrl={setUrl}
          method={method}
          headers={headers}
          body={body}
        />

        <TextField
          fullWidth
          margin="normal"
          label={t('sdlEndpoint')}
          value={urlSdl}
          onChange={handleChangeUrlSdl}
          size="small"
        />

        <HeaderEditor setHeaders={setHeaders} />

        <BodyEditor setBody={setBody} />

        <Button
          disabled={isRequestRequired}
          variant="contained"
          color="primary"
          onClick={handleSendRequest}
        >
          {t('sendRequest')}
        </Button>
      </Stack>
      {response && (
        <Box width="50em" overflow="hidden" marginTop="1em">
          <Typography variant="h6">{t('response')}</Typography>
          <Typography>
            {`${t('status')}: ${isAxiosResponse(response) ? response.status : t('noStatus')}`}
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
    </Container>
  );
};

export default GraphQl;

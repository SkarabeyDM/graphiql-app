'use client';
import { Paper, Stack, TextField, Typography } from '@mui/material';
import { IUrlProps } from '../model/urlEditorModel';
import { ICRUD } from '../model/methodEditorModel';
import { IHeadersData } from '../model/headersEditorModel';
import { FC } from 'react';
import { IBodyData } from '@widgets/restFullClient/model/bodyManagerModel';
import { encodeBase64 } from '@features/editor/lib/encodeBase64';
import { IBodyEditorData } from '@widgets/graphQl/model/bodyEditorModel';
import { useTranslations } from 'next-intl';

export const UrlEditor: FC<IUrlProps> = ({
  url,
  setUrl,
  method,
  headers,
  body,
}) => {
  const t = useTranslations('UrlEditor');
  const urlFormation = (
    method: ICRUD,
    headers: IHeadersData,
    body: IBodyData | IBodyEditorData | null,
  ): string => {
    const encodedBody = !body ? '' : encodeBase64(JSON.stringify(body));

    const queryParams = new URLSearchParams();
    Object.entries(headers).forEach(([key, value]) => {
      queryParams.append(key, encodeURIComponent(value));
    });

    return `/${method}${encodedBody ? `/${encodedBody}` : ''}${queryParams?.toString() ? `?${queryParams.toString()}` : ''}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e?.target || {};

    setUrl(value);
  };

  return (
    <Stack>
      <TextField
        margin="normal"
        label={t('endPointUrl')}
        value={url}
        onChange={handleChange}
        size="small"
      />
      <Paper variant="outlined" sx={{ overflow: 'auto', p: 1 }}>
        <Typography sx={{ fontFamily: 'monospace' }}>
          {`${url}${urlFormation(method, headers, body)}`}
        </Typography>
      </Paper>
    </Stack>
  );
};

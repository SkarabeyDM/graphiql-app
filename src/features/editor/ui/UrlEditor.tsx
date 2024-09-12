import { Box, TextField } from '@mui/material';
import { IUrlProps } from '../model/urlEditorModel';
import { ICRUD } from '../model/methodEditorModel';
import { IHeadersData } from '../model/headersEditorModel';
import { FC } from 'react';
import { IBodyData } from '@widgets/restFullClient/model/bodyManagerModel';
import { encodeBase64 } from '@features/editor/lib/encodeBase64';

const UrlEditor: FC<IUrlProps> = ({ url, setUrl, method, headers, body }) => {
  const urlFormation = (
    method: ICRUD,
    headers: IHeadersData,
    body: IBodyData | null,
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

    if (!value) {
      return;
    }
    setUrl(value);
  };

  return (
    <Box display="flex" alignItems="center">
      <h3 style={{ fontWeight: '500', margin: '0 0.5em 0 0' }}>URL</h3>
      <TextField
        margin="normal"
        label="Endpoint URL"
        value={url}
        onChange={handleChange}
        size="small"
      />
      <TextField
        fullWidth
        margin="normal"
        value={urlFormation(method, headers, body)}
        size="small"
      />
    </Box>
  );
};

export default UrlEditor;

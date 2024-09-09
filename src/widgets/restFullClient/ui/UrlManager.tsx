import { Box, TextField } from '@mui/material';
import { IUrlProps } from '../model/urlManagerModel';
import { ICRUD } from '../model/methodManagerModel';
import { IHeadersData } from '../model/headerManagerModel';
import { IBodyData } from '../model/bodyManagerModel';
import { FC } from 'react';
import { encodeBase64 } from '../lib/encodeBase64';

const UrlManager: FC<IUrlProps> = ({ url, setUrl, method, headers, body }) => {
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
    setUrl(e.target.value);
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

export default UrlManager;

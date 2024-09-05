import { Box, TextField } from '@mui/material';
import { IUrlProps } from '../model/urlManagerModel';
import { ICRUD } from '../model/methodManagerModel';
import { IHeaderData } from '../model/headerManagerModel';
import { IBodyData } from '../model/bodyManagerModel';

const encodeBase64 = (data: string) => {
  return Buffer.from(data).toString('base64');
};

const UrlManager = (props: IUrlProps) => {
  const { url, setUrl, method, headers, body } = props;

  const urlFormation = (
    method: ICRUD,
    headers: IHeaderData,
    body: IBodyData | null,
  ) => {
    const encodedBody = body ? encodeBase64(JSON.stringify(body)) : '';

    const queryParams = new URLSearchParams();
    Object.entries(headers).forEach(([key, value]) => {
      queryParams.append(key, encodeURIComponent(value));
    });

    return `/${method}${encodedBody ? '/' + encodedBody : ''}${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
  };

  return (
    <Box display="flex" alignItems="center">
      <h3 style={{ fontWeight: '500', margin: '0 0.5em 0 0' }}>URL</h3>
      <TextField
        margin="normal"
        label="Endpoint URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
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

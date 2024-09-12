'use client';
import { HeaderEditor, MethodEditor, UrlEditor } from '@features/editor';
import { IHeadersData } from '@features/editor/model/headersEditorModel';
import { ICRUD } from '@features/editor/model/methodEditorModel';
import { Box, Button } from '@mui/material';
import { FC, useState } from 'react';

const GraphQl: FC = () => {
  const [method, setMethod] = useState<ICRUD>(ICRUD.GET);
  const [url, setUrl] = useState<string>('');
  const [headers, setHeaders] = useState<IHeadersData>({});

  const handleSendRequest = async (): Promise<void> => {
    // eslint-disable-next-line no-console
    console.log(headers);
  };

  return (
    <Box width="50em">
      <h2>Graph QL</h2>
      <MethodEditor method={method} setMethod={setMethod} />

      <UrlEditor
        url={url}
        setUrl={setUrl}
        method={method}
        headers={headers}
        body={null}
      />

      <HeaderEditor setHeaders={setHeaders} />

      <Button variant="contained" color="primary" onClick={handleSendRequest}>
        Send Request
      </Button>
    </Box>
  );
};

export default GraphQl;

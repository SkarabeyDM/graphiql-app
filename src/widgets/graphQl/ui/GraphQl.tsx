'use client';
import { MethodEditor } from '@features/editor';
import { ICRUD } from '@features/editor/model/methodEditorModel';
import { Box } from '@mui/material';
import { FC, useState } from 'react';

const GraphQl: FC = () => {
  const [method, setMethod] = useState<ICRUD>(ICRUD.GET);

  return (
    <Box width="50em">
      <h2>Graph QL</h2>
      <MethodEditor method={method} setMethod={setMethod} />;
    </Box>
  );
};

export default GraphQl;

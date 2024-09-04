'use client';
import { useState } from 'react';
import { Box } from '@mui/material';

import MethodManager from './MethodManager';
import { ICRUD } from '../model/methodManagerModel';

const RestFullClient = () => {
  const [method, setMethod] = useState<ICRUD>(ICRUD.GET);
  return (
    <Box>
      <h2>RESTfull client</h2>
      <MethodManager method={method} setMethod={setMethod} />
    </Box>
  );
};

export default RestFullClient;

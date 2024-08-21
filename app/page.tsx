'use client';
import { useState } from 'react';
import style from './page.module.scss';
import Button from '@mui/material/Button';

const HomePageComponent = () => {
  const [state, setState] = useState<boolean>(false);
  return (
    <div
      style={{ background: state ? '#ffffff' : '#808080' }}
      className={style.wrapper}
    >
      <h1 className={style.title}>REST/GraphiQL Client</h1>
      <Button onClick={() => setState((prev) => !prev)} variant="contained">
        Contained
      </Button>
    </div>
  );
};

export default HomePageComponent;

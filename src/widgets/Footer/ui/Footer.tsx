import { GitHub } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <Stack
      component="footer"
      direction="row"
      gap={2}
      p={2}
      justifyContent={'space-between'}
      alignItems="center"
      marginTop="auto"
    >
      <IconButton
        href="https://github.com/SkarabeyDM/graphiql-app"
        target="_blank"
        color="inherit"
      >
        <GitHub fontSize="large" />
      </IconButton>
      <Typography color="text.secondary">2024</Typography>
      <IconButton href="https://rs.school/courses/reactjs" target="_blank">
        <Image
          src="/images/rss-logo.svg"
          alt="RS School"
          width={40}
          height={40}
        />
      </IconButton>
    </Stack>
  );
};

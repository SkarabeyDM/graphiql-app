import { EditorsGroup } from '@features/editor/ui';
import { Container, Stack } from '@mui/material';
import { Authors } from '@widgets/Authors';
import { Greeting } from '@widgets/Greeting';

export const HomePage = () => {
  return (
    <Container>
      <Stack gap={2} alignItems={'center'}>
        <Greeting />
        <EditorsGroup />
        <Authors />
      </Stack>
    </Container>
  );
};

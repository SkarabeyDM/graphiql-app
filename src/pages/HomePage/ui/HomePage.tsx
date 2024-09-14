import { EditorsGroup } from '@features/editor/ui';
import { Container, Stack } from '@mui/material';
import { Greeting } from '@widgets/Greeting';

export const HomePage = () => {
  return (
    <Container>
      <Stack gap={2} alignItems={'center'}>
        <Greeting />
        <EditorsGroup />
      </Stack>
    </Container>
  );
};

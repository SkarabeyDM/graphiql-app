import { EditorsGroup } from '@features/editor/ui';
import { Container, Stack } from '@mui/material';

export const HomePage = () => {
  return (
    <Container>
      <Stack gap={2} alignItems={'center'}>
        <EditorsGroup />
      </Stack>
    </Container>
  );
};

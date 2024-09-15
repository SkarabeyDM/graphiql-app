import { PrivateRoute } from '@entities/user';
import { Container } from '@mui/material';
import { RestFullClient } from '@widgets/restFullClient';

export const RestFullClientPage = () => {
  return (
    <PrivateRoute fallbackUrl="/login" requireAuth>
      <Container component="main">
        <RestFullClient />
      </Container>
    </PrivateRoute>
  );
};

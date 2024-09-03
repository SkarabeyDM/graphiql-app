import { PrivateRoute } from '@entities/user';
import { Stack, Typography } from '@mui/material';
import { Link } from '@shared/ui/Link';
import { RegisterForm } from '@widgets/authorization';

export const RegisterPage = () => {
  return (
    <PrivateRoute>
      <Stack spacing={3}>
        <RegisterForm />
        <Typography>
          Already have an account? <Link href="/login">Sign In</Link>
        </Typography>
      </Stack>
    </PrivateRoute>
  );
};

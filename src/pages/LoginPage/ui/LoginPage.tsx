import { PrivateRoute } from '@entities/user';
import { Stack, Typography } from '@mui/material';
import { Link } from '@shared/ui/Link';
import { LoginForm } from '@widgets/authorization';

export const LoginPage = () => {
  return (
    <PrivateRoute>
      <Stack spacing={3}>
        <LoginForm />
        <Typography>
          Don&apos;t have an account? <Link href="/register">Sign Up</Link>
        </Typography>
      </Stack>
    </PrivateRoute>
  );
};

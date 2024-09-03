import { PrivateRoute } from '@entities/user';
import { LoginForm } from '@widgets/authorization';

export const LoginPage = () => {
  return (
    <PrivateRoute>
      <LoginForm />
    </PrivateRoute>
  );
};

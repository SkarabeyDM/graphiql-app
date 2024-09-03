import { PrivateRoute } from '@entities/user';
import { RegisterForm } from '@widgets/authorization';

export const RegisterPage = () => {
  return (
    <PrivateRoute>
      <RegisterForm />
    </PrivateRoute>
  );
};

import { PrivateRoute } from '@entities/user';
import { RestFullClient } from '@widgets/restFullClient';

export const RestFullClientPage = () => {
  return (
    <PrivateRoute fallbackUrl="/login" requireAuth>
      <RestFullClient />
    </PrivateRoute>
  );
};

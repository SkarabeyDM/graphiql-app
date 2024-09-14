import { PrivateRoute } from '@entities/user';
import { GraphQl } from '@widgets/graphQl';

export const GraphQlPage = () => {
  return (
    <PrivateRoute fallbackUrl="/login" requireAuth>
      <GraphQl />
    </PrivateRoute>
  );
};

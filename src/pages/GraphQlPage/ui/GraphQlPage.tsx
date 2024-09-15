import { PrivateRoute } from '@entities/user';
import { GraphQl } from '@widgets/graphQl';

export const GraphQlPage = () => {
  return (
    <PrivateRoute fallbackUrl="editor/graphiql" requireAuth>
      <GraphQl />
    </PrivateRoute>
  );
};

import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { GraphQl } from '@widgets/graphQl';

export const HomePage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width="100%"
      spacing={4}
      sx={{ m: 0, position: 'relative' }}
    >
      <Grid>
        <Typography variant="h4" fontWeight="bold" fontStyle="italic">
          REST/GraphiQL Client
        </Typography>
      </Grid>
      <Grid>
        <GraphQl />
      </Grid>
    </Grid>
  );
};

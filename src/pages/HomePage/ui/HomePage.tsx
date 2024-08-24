import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AuthorizationComponent from '@widgets/authorization/Authorisation.component';

const HomePageComponent = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100%"
      width="100%"
      spacing={4}
      bgcolor="pink"
      m={0}
      position="relative"
    >
      <Grid>
        <Typography variant="h4" fontWeight="bold" fontStyle="italic">
          REST/GraphiQL Client
        </Typography>
      </Grid>
      <Grid>
        <AuthorizationComponent />
      </Grid>
    </Grid>
  );
};

export default HomePageComponent;

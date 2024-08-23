import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

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
    >
      <Grid>
        <Typography variant="h4" fontWeight="bold" fontStyle="italic">
          REST/GraphiQL Client
        </Typography>
      </Grid>
      <Grid>
        <Button variant="contained">Contained</Button>
      </Grid>
    </Grid>
  );
};

export default HomePageComponent;

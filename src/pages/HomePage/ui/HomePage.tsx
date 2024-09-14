import { EditorsGroup } from '@features/editor/ui';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const HomePage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      spacing={4}
      sx={{ m: 0, position: 'relative' }}
    >
      <Grid>
        <Typography variant="h4" fontWeight="bold" fontStyle="italic">
          REST/GraphiQL Client
        </Typography>
        <EditorsGroup />
      </Grid>
    </Grid>
  );
};

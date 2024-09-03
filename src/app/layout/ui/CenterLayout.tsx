import { Box } from '@mui/material';

export const CenterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
};

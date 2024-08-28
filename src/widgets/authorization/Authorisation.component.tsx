'use client';
import { Box } from '@mui/material';
import AlertComponent from '@widgets/alert/ui/Alert';
import RegistrationComponent from './ui/Registration';
import LoginComponent from './ui/Login';
import Logout from './ui/Logout';

const AuthorizationComponent = () => {
  return (
    <Box display="flex" flexDirection="column" gap="2rem" marginTop="2rem">
      <AlertComponent />
      <Box display="flex" gap="5rem">
        <RegistrationComponent />
        <LoginComponent />
      </Box>
      <Box display="flex" justifyContent="center">
        <Logout />
      </Box>
    </Box>
  );
};

export default AuthorizationComponent;

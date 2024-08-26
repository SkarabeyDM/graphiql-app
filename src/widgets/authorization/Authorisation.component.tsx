'use client';
import { Provider } from 'react-redux';

import store from '@shared/redux';

import { Box } from '@mui/material';
import AlertComponent from '@widgets/alert/ui/Alert';
import RegistrationComponent from './Registration/ui/Registration';
import LoginComponent from './Login/ui/Login';
import Logout from './Logout/ui/Logout';

const AuthorizationComponent = () => {
  return (
    <Box display="flex" flexDirection="column" gap="2rem" marginTop="2rem">
      <Provider store={store}>
        <AlertComponent />
        <Box display="flex" gap="5rem">
          <RegistrationComponent />
          <LoginComponent />
        </Box>
        <Box display="flex" justifyContent="center">
          <Logout />
        </Box>
      </Provider>
    </Box>
  );
};

export default AuthorizationComponent;

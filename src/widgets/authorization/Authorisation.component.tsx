'use client';
import { Provider } from 'react-redux';
import LoginComponent from './Login.component';
import RegistrationComponent from './Registration.component';
import store from '@shared/redux';
import AlertComponent from '@widgets/alert/Alert.component';
import { Box } from '@mui/material';

const AuthorizationComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginTop: '2rem',
      }}
    >
      <Provider store={store}>
        <AlertComponent />
        <Box component="div" display="flex" gap="5rem">
          <RegistrationComponent />
          <LoginComponent />
        </Box>
      </Provider>
    </div>
  );
};

export default AuthorizationComponent;

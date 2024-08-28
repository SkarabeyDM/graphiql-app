import { Button } from '@mui/material';
import { logout } from '../model/firebase';
import { useAppDispatch } from '@shared/redux';
import { showAlert } from '@shared/redux/slices/alertSlice';
import { AlertStyle } from '@widgets/alert/model/Alert.model';

const Logout = () => {
  const dispatch = useAppDispatch();

  const userLogout = () => {
    logout();
    dispatch(
      showAlert({
        alert: true,
        style: AlertStyle.success,
        alertText: 'User logged out',
      }),
    );

    // TODO  navigation or other state change !!
  };

  return (
    <Button data-testid="Logout" onClick={userLogout} variant="contained">
      Logout
    </Button>
  );
};

export default Logout;

'use client';
import { Button, ButtonProps } from '@mui/material';
import { logout, useAuthState } from '@entities/user/model/firebase';
import { useAppDispatch } from '@shared/redux';
import { showAlert } from '@shared/redux/slices/alertSlice';
import { AlertStyle } from '@widgets/alert/model/Alert.model';
import { Logout } from '@mui/icons-material';

export const LogoutButton = (props: ButtonProps) => {
  const dispatch = useAppDispatch();
  const [user, loading] = useAuthState();

  const logoutUser = () => {
    logout();
    dispatch(
      showAlert({
        alert: true,
        style: AlertStyle.success,
        alertText: 'User logged out',
      }),
    );
  };

  return (
    <Button
      variant="contained"
      onClick={logoutUser}
      disabled={loading || !user}
      data-testid="logout-button"
      startIcon={<Logout />}
      {...props}
    >
      Logout
    </Button>
  );
};

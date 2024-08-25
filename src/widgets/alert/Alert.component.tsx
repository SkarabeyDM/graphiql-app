'use client';
import { Alert, Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../shared/redux/hook';
import { hideAlert } from '@shared/redux/slices/alertSlice';

const AlertComponent = () => {
  const alert = useAppSelector((state) => state.alertState);
  const dispatch = useAppDispatch();

  setTimeout(() => {
    dispatch(hideAlert());
  }, 3000);

  return (
    <Box
      component="div"
      position="absolute"
      top="0"
      right="0"
      style={{
        msTransitionDuration: '0.3s',
        opacity: alert.alertState.alert ? '1' : '0',
      }}
    >
      <Alert severity={alert.alertState.style}>
        {alert.alertState.alertText}
      </Alert>
    </Box>
  );
};

export default AlertComponent;

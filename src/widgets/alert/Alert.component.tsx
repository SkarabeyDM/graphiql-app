'use client';
import { Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../shared/redux/hook';

import './style.css';
import { hideAlert } from '@shared/redux/slices/alertSlice';

const AlertComponent = () => {
  const alert = useAppSelector((state) => state.alertState);
  const dispatch = useAppDispatch();

  setTimeout(() => {
    dispatch(hideAlert());
  }, 5000);

  return (
    <div className={`custom-alert ${alert.alertState.alert ? 'active' : ''}`}>
      <Alert severity={alert.alertState.style}>
        {alert.alertState.alertText}
      </Alert>
    </div>
  );
};

export default AlertComponent;

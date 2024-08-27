'use client';
import { MutableRefObject, useEffect, useRef } from 'react';
import { Alert, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@shared/hooks/hook';
import { hideAlert } from '@shared/redux/slices/alertSlice';

const AlertComponent = () => {
  const alert = useAppSelector((state) => state.alertState);
  const dispatch = useAppDispatch();
  const timeoutRef: MutableRefObject<NodeJS.Timeout | null> = useRef(null);

  useEffect(() => {
    if (alert.alertState.alert === true) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        dispatch(hideAlert());
        timeoutRef.current = null;
      }, 3000);
    }
  }, [alert]);

  return (
    <Box
      position="absolute"
      top="0"
      right="0"
      sx={{
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

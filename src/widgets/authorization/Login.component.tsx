'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { logInWithEmailAndPassword, logout } from './model/firebase';
import { IAuth, IFormData } from './model/authorization.model';
import { useAppDispatch } from '@shared/redux/hook';
import { showAlert } from '@shared/redux/slices/alertSlice';
import { AlertStyle } from '@widgets/alert/model/Alert.model';
import { schema } from './model/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginComponent = () => {
  const dispatch = useAppDispatch();

  const userLogin = async (data: IAuth) => {
    const result = await logInWithEmailAndPassword(data);
    if (typeof result === 'boolean') {
      dispatch(
        showAlert({
          alert: true,
          style: AlertStyle.success,
          alertText: 'Authorization was successful',
        }),
      );

      // TODO  navigation !!
    } else
      dispatch(
        showAlert({ alert: true, style: AlertStyle.error, alertText: result }),
      );
  };

  const userLogout = () => {
    logout();
    dispatch(
      showAlert({
        alert: true,
        style: AlertStyle.success,
        alertText: 'User logged out',
      }),
    );
  };

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormData) => {
    const loginData: IAuth = { email: data.email, password: data.password };
    await userLogin(loginData);
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Box component="div" display="flex" flexDirection="column">
      <h2>Login</h2>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        display="flex"
        flexDirection="column"
        noValidate
        autoComplete="off"
      >
        <Box component="div" position="relative">
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="filled"
            {...register('email', { onChange: () => null })}
          />
          <Box
            component="div"
            position="absolute"
            left="0"
            bottom="-1em"
            color="#ff0000"
            fontSize="0.6em"
          >
            {errors.email?.message}
          </Box>
        </Box>
        <Box component="div" position="relative">
          <TextField
            fullWidth
            id="password"
            label="Password"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            {...register('password', { onChange: () => null })}
          />
          <IconButton
            onClick={() => setShowPassword(!showPassword)}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
          <Box
            component="div"
            position="absolute"
            left="0"
            bottom="-1em"
            color="#ff0000"
            fontSize="0.6em"
          >
            {errors.password?.message}
          </Box>
        </Box>
        <Box component="div" position="relative">
          <TextField
            fullWidth
            id="confirmPassword"
            label="Confirm password"
            variant="filled"
            type={showConfirmPassword ? 'text' : 'password'}
            {...register('confirmPassword', { onChange: () => null })}
          />
          <IconButton
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
          <Box
            component="div"
            position="absolute"
            left="0"
            bottom="-1em"
            color="#ff0000"
            fontSize="0.6em"
          >
            {errors.confirmPassword?.message}
          </Box>
        </Box>
        <Box component="div" display="flex" justifyContent="space-between">
          <Button
            data-testid="Login"
            disabled={!isValid}
            type="submit"
            variant="contained"
          >
            Login
          </Button>
          <Button data-testid="Logout" onClick={userLogout} variant="contained">
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;

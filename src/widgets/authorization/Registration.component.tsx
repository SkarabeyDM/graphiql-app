'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@shared/redux/hook';
import { showAlert } from '@shared/redux/slices/alertSlice';

import { registerWithEmailAndPassword } from './model/firebase';
import { IAuth, IFormData } from './model/authorization.model';
import { AlertStyle } from '@widgets/alert/model/Alert.model';

import { Box, Button, IconButton, TextField } from '@mui/material';

import { schema } from './model/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const RegistrationComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useAppDispatch();

  const userRegistration = async (data: IAuth) => {
    const result = await registerWithEmailAndPassword(data);
    if (typeof result === 'boolean') {
      dispatch(
        showAlert({
          alert: true,
          style: AlertStyle.success,
          alertText: 'Registration was successful',
        }),
      );

      // TODO  navigation !!
    } else
      dispatch(
        showAlert({ alert: true, style: AlertStyle.error, alertText: result }),
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
    const regData: IAuth = { email: data.email, password: data.password };
    await userRegistration(regData);
    reset();
  };

  return (
    <Box component="div" display="flex" flexDirection="column">
      <h2>Registration</h2>
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

        <Button
          data-testid="Registration"
          disabled={!isValid}
          type="submit"
          variant="contained"
        >
          Registration
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationComponent;

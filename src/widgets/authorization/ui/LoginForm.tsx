'use client';
import { useForm } from 'react-hook-form';

import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import { logInWithEmailAndPassword } from '@entities/user/model/firebase';
import { IAuth } from '@entities/user/model/firebase';
import { useAppDispatch } from '@shared/redux';
import { showAlert } from '@shared/redux/slices/alertSlice';
import { AlertStyle } from '@widgets/alert/model/Alert.model';
import { logSchema } from '../model/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Link, PasswordInput } from '@shared/ui';
import { Login } from '@mui/icons-material';

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(logSchema),
  });

  const handleLogin = async (credentials: IAuth) => {
    const loginResult = await logInWithEmailAndPassword(credentials);

    if (typeof loginResult === 'boolean') {
      dispatch(
        showAlert({
          alert: true,
          style: AlertStyle.success,
          alertText: 'Authorization was successful',
        }),
      );
      reset();
    } else {
      dispatch(
        showAlert({
          alert: true,
          style: AlertStyle.error,
          alertText: loginResult,
        }),
      );
    }
  };

  const onSubmit = async (authData: IAuth) => {
    await handleLogin(authData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} title="Sign In">
      <TextField
        fullWidth
        id="email"
        label="Email"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email && errors.email.message}
        {...register('email')}
      />
      <PasswordInput
        error={!!errors.password}
        helperText={errors.password && errors.password.message}
        inputProps={{ ...register('password') }}
      />

      <Button
        data-testid="login-button"
        disabled={!isValid}
        type="submit"
        variant="contained"
        fullWidth
        startIcon={<Login />}
      >
        Sign In
      </Button>
      <Link alignSelf="flex-end" href="/register" underline="none">
        Sign Up
      </Link>
    </Form>
  );
};

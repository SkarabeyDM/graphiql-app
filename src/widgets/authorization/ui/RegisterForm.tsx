'use client';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@shared/redux';
import { showAlert } from '@shared/redux/slices/alertSlice';

import {
  IAuth,
  IFormData,
  registerWithEmailAndPassword,
} from '@entities/user/model/firebase';
import { AlertStyle } from '@widgets/alert/model/Alert.model';

import { Button, TextField } from '@mui/material';

import { regSchema } from '../model/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, PasswordInput } from '@shared/ui';
import { Create } from '@mui/icons-material';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(regSchema),
  });

  const handleRegister = async (registrationData: IAuth) => {
    const registrationResult =
      await registerWithEmailAndPassword(registrationData);

    if (typeof registrationResult === 'boolean') {
      dispatch(
        showAlert({
          alert: true,
          style: AlertStyle.success,
          alertText: 'Registration was successful',
        }),
      );
      reset();
    } else {
      dispatch(
        showAlert({
          alert: true,
          style: AlertStyle.error,
          alertText: registrationResult,
        }),
      );
    }
  };

  const onSubmit = async (registerData: IFormData) => {
    const { email, password } = registerData;
    const regData: IAuth = { email, password };
    await handleRegister(regData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} title="Registration">
      <TextField
        fullWidth
        id="email"
        label="Email"
        variant="filled"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email')}
      />
      <PasswordInput
        error={!!errors.password}
        helperText={errors.password?.message}
        inputProps={{ ...register('password') }}
      />
      <PasswordInput
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        inputProps={{ ...register('confirmPassword') }}
      />

      <Button
        data-testid="registration-button"
        disabled={!isValid}
        type="submit"
        variant="contained"
        startIcon={<Create />}
      >
        Registration
      </Button>
    </Form>
  );
};

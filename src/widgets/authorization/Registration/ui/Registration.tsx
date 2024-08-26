'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@shared/hooks/hook';
import { showAlert } from '@shared/redux/slices/alertSlice';

import { registerWithEmailAndPassword } from '../../model/firebase';
import { IAuth, IFormData } from '../../model/authorization.model';
import { AlertStyle } from '@widgets/alert/model/Alert.model';

import { Box, Button, TextField } from '@mui/material';

import { regSchema } from '../../model/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconPassword } from '@widgets/authorization/IconPassword';
import { TextFieldHint } from '@widgets/authorization/TextFieldHint';

const RegistrationComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      reset();

      // TODO  navigation or other state change !!
    } else
      dispatch(
        showAlert({ alert: true, style: AlertStyle.error, alertText: result }),
      );
  };

  const onSubmit = async (data: IFormData) => {
    const regData: IAuth = { email: data.email, password: data.password };
    await userRegistration(regData);
  };

  return (
    <Box display="flex" flexDirection="column">
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
        <Box position="relative">
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="filled"
            {...register('email', { onChange: () => null })}
          />

          <TextFieldHint
            text={
              errors.email && errors.email.message ? errors.email.message : ''
            }
          />
        </Box>
        <Box position="relative">
          <TextField
            fullWidth
            id="password"
            label="Password"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            {...register('password', { onChange: () => null })}
          />
          <IconPassword
            setShowPassword={setShowPassword}
            showPassword={showPassword}
          />

          <TextFieldHint
            text={
              errors.password && errors.password.message
                ? errors.password.message
                : ''
            }
          />
        </Box>
        <Box position="relative">
          <TextField
            fullWidth
            id="confirmPassword"
            label="Confirm password"
            variant="filled"
            type={showConfirmPassword ? 'text' : 'password'}
            {...register('confirmPassword', { onChange: () => null })}
          />
          <IconPassword
            setShowPassword={setShowConfirmPassword}
            showPassword={showConfirmPassword}
          />

          <TextFieldHint
            text={
              errors.confirmPassword && errors.confirmPassword.message
                ? errors.confirmPassword.message
                : ''
            }
          />
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

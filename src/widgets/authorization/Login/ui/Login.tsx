'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { logInWithEmailAndPassword } from '../../model/firebase';
import { IAuth } from '../../model/authorization.model';
import { useAppDispatch } from '@shared/hooks/hook';
import { showAlert } from '@shared/redux/slices/alertSlice';
import { AlertStyle } from '@widgets/alert/model/Alert.model';
import { logSchema } from '../../model/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconPassword } from '@widgets/authorization/IconPassword';
import { TextFieldHint } from '@widgets/authorization/TextFieldHint';

const LoginComponent = () => {
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
      reset();

      // TODO  navigation or other state change !!
    } else
      dispatch(
        showAlert({ alert: true, style: AlertStyle.error, alertText: result }),
      );
  };

  const onSubmit = async (data: IAuth) => {
    await userLogin(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box display="flex" flexDirection="column">
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

        <Button
          data-testid="Login"
          disabled={!isValid}
          type="submit"
          variant="contained"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginComponent;

import { Stack, StackProps, Typography } from '@mui/material';

export interface IForm extends StackProps<'form'> {}

export const Form = ({
  children,
  onSubmit,
  title,
  ...props
}: StackProps<'form'>) => {
  return (
    <Stack
      alignItems="center"
      spacing={2}
      component="form"
      onSubmit={onSubmit}
      display="flex"
      flexDirection="column"
      noValidate
      autoComplete="off"
      {...props}
    >
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

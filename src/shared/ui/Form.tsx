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
      border={1}
      borderColor={({ palette }) => palette.text.disabled}
      padding={6}
      borderRadius={2}
      width={550}
      maxWidth="100%"
      {...props}
    >
      <Typography variant="h4" paddingBottom={2}>
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

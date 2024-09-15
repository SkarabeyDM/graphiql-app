import { LinkI18n } from '@shared/i18n';
import { ButtonProps, Button as MuiButton } from '@mui/material';

export type { ButtonProps } from '@mui/material';

export const Button = (props: ButtonProps) => (
  <MuiButton component={LinkI18n} {...props} />
);

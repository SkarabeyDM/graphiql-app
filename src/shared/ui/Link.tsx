import { LinkI18n } from '@shared/i18n';
import { LinkProps as MuiLinkProps, Link as MuiLink } from '@mui/material';
import { Url } from 'next/dist/shared/lib/router/router';

export interface LinkProps extends Omit<MuiLinkProps, 'href'> {
  href: Url;
}

export const Link = (props: LinkProps) => (
  <MuiLink {...props} component={LinkI18n} />
);

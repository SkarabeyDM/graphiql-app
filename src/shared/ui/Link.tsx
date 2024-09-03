import NextLink from 'next/link';
import { LinkProps as MuiLinkProps, Link as MuiLink } from '@mui/material';
import { Url } from 'next/dist/shared/lib/router/router';

export interface LinkProps extends Omit<MuiLinkProps, 'href'> {
  href: Url;
}

export const Link = ({ ...props }: LinkProps) => {
  return <MuiLink {...props} component={NextLink} />;
};

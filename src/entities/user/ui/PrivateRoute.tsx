'use client';
import { useRouter } from '@shared/i18n';
import { useAuthState } from '../model/firebase';
import { useLayoutEffect } from 'react';
import { CircularProgress } from '@mui/material';

export interface PrivateRouteProps {
  /** The URL to redirect to if the user is not authenticated or if `requireAuth` is `false`. @default `/`. */
  fallbackUrl?: string;
  /** If `true`, the component will be rendered only if the user is authenticated. @default false. */
  requireAuth?: boolean;
  /** The component to render while the user is loading. */
  loadingFallback?: React.ReactNode;
  children: React.ReactNode;
}

export const PrivateRoute = ({
  fallbackUrl = '/',
  loadingFallback = <CircularProgress />,
  children,
  requireAuth = false,
}: PrivateRouteProps) => {
  const [user, loading] = useAuthState();
  const router = useRouter();

  useLayoutEffect(() => {
    if (loading) return;
    if (requireAuth !== !!user) {
      router.replace(fallbackUrl);
    }
  }, [user, loading]);

  if (loading) {
    return loadingFallback;
  }

  return children;
};

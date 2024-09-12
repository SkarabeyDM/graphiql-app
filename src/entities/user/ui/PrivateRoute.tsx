'use client';
import { redirect } from '@shared/i18n';
import { useAuthState } from '../model/firebase';

export interface PrivateRouteProps {
  /** The URL to redirect to if the user is not authenticated or if `requireAuth` is `false`. @default `/`. */
  fallbackUrl?: string;
  /** If `true`, the component will be rendered only if the user is authenticated. @default false. */
  requireAuth?: boolean;
  loadingFallback?: React.ReactNode;
  children: React.ReactNode;
}

export const PrivateRoute = ({
  fallbackUrl = '/',
  loadingFallback = null,
  children,
  requireAuth = false,
}: PrivateRouteProps) => {
  const [user, loading] = useAuthState();

  if (loading) {
    return loadingFallback;
  }

  if (requireAuth !== !!user) {
    redirect(fallbackUrl);
  }

  return children;
};

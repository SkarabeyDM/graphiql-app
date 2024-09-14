import { User } from 'firebase/auth';

export const getUserName = (user: User, defaultName = '') => {
  return user.displayName ?? user.email ?? defaultName;
};

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useAuthState as useAuthStateHook } from 'react-firebase-hooks/auth';

export interface IAuth {
  email: string;
  password: string;
}

export interface IFormData extends IAuth {
  confirmPassword: string;
}

const firebaseConfig = {
  apiKey: 'AIzaSyC7IKge1Z-UxaJg5QMTTWHY2vKcbYbJmOQ',
  authDomain: 'graphiql-app-7ee6f.firebaseapp.com',
  projectId: 'graphiql-app-7ee6f',
  storageBucket: 'graphiql-app-7ee6f.appspot.com',
  messagingSenderId: '653268373411',
  appId: '1:653268373411:web:abf5b6f868dc2d300f1416',
  measurementId: 'G-8M6Y0RDNGK',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword: (
  data: IAuth,
) => Promise<boolean | string> = async (data) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return 'Operation is failed...';
  }
};

const registerWithEmailAndPassword: (
  data: IAuth,
) => Promise<boolean | string> = async (data) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name: 'user',
      authProvider: 'local',
      data: data.email,
    });
    return true;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return 'Operation is failed...';
  }
};

const logout: () => void = () => {
  signOut(auth);
};

export const useAuthState = () => useAuthStateHook(auth);

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};

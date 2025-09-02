import { getApp } from '@react-native-firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';

export const signIn = async (email: string, password: string) => {
  const app = getApp();
  const auth = getAuth(app);
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  const idToken = await userCredential.user.getIdToken();
  return idToken;
};

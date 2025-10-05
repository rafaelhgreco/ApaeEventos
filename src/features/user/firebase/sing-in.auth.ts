import { getApp } from '@react-native-firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  getIdToken,
  signOut,
} from '@react-native-firebase/auth';

export const signIn = async (email: string, password: string) => {
  const app = getApp();
  const auth = getAuth(app);
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );

  const user = userCredential.user;

  const idToken = await getIdToken(user);

  return { idToken, user };
};

export const signOutUser = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
    console.log('Usuário deslogado com sucesso!');
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw error;
  }
};

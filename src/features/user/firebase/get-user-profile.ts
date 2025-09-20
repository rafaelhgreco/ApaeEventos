import { getFirestore, doc, getDoc } from '@react-native-firebase/firestore';

export const getUserProfile = async (uid: string) => {
  try {
    const db = getFirestore();
    const userRef = doc(db, 'users', uid);
    const userDocument = await getDoc(userRef);

    if (!userDocument.exists()) {
      throw new Error('Perfil de usuário não encontrado no Firestore.');
    }

    return userDocument.data();
  } catch (error) {
    console.error('Erro ao buscar perfil do usuário:', error);
    throw error;
  }
};

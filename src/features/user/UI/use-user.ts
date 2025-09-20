import { useState, useCallback } from 'react';
import { userController } from '../application/user.controller';
import type { User } from '../entity/user.entity';
import { signIn } from '../firebase/sing-in.auth';
import { useUserStore } from './user.store';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/root.types';

interface UseUserController {
  handleLogin: (email: string, password: string) => Promise<void>;
  listUsers: () => Promise<void>;
  createUser: (
    userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ) => Promise<User | null>;
  handleLoginSubmit: (email: string, password: string) => Promise<void>;
}

interface UseUserProps {
  users: User[];
  loading: boolean;
  error: string | null;
}

export function useUser(): { controller: UseUserController } & UseUserProps {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setToken } = useUserStore();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(null);
      try {
        const idToken = await signIn(email, password);
        setToken(idToken);
      } catch (error: any) {
        console.log('Erro ao autenticar:', error);
        setError('Erro ao autenticar');
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [setToken],
  );

  const listUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await userController.getUser('1');
      setUsers([result]);
    } catch (err: any) {
      setError(err.message || 'Erro ao listar usuários');
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = useCallback(
    async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
      setLoading(true);
      setError(null);
      try {
        const newUser = await userController.createUser(userData);
        setUsers(prev => [...prev, newUser]);
        return newUser;
      } catch (err: any) {
        setError(err.message || 'Erro ao criar usuário');
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const handleLoginSubmit = async (email: string, password: string) => {
    try {
      await controller.handleLogin(email, password);
      Alert.alert('Login realizado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.log('Erro no login:', error);
    }
  };

  const controller: UseUserController = {
    handleLogin,
    listUsers,
    createUser,
    handleLoginSubmit,
  };

  return {
    controller,
    users,
    loading,
    error,
  };
}

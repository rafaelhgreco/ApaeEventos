import { useState, useCallback, useMemo } from 'react';
import { userController } from '../application/user.controller';
import type { User } from '../entity/user.entity';
import { signOutUser } from '../firebase/sing-in.auth';
import { useUserStore } from './user.store';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/root.types';
import { LoginUserUseCase } from '../application/use-case/login-user-use-case';

interface UseUserController {
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
  listUsers: () => Promise<void>;
  createUser: (
    userData: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'type'>,
  ) => Promise<User | null>;
  handleLoginSubmit: (email: string, password: string) => Promise<void>;
  handleRedirectToTypeBasedPage: (type: number) => void;
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

  const loginUserUseCase = useMemo(() => new LoginUserUseCase(), []);

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(null);
      try {
        const { idToken, profile } = await loginUserUseCase.execute(
          email,
          password,
        );
        setToken(idToken);
        handleRedirectToTypeBasedPage(profile.type);
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

  const handleLogout = useCallback(async () => {
    try {
      await signOutUser();
      Alert.alert('Logout realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      Alert.alert('Erro ao fazer logout. Tente novamente.');
    }
  }, [setToken, navigation]);

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
    async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'type'>) => {
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

  const handleRedirectToTypeBasedPage = (type: number) => {
    switch (type) {
      case 2:
        navigation.navigate('Dashboard');
        Alert.alert('Admin user logged in');
        break;
      case 1:
        // navigation.navigate('CollaboratorDashboard');
        Alert.alert('Collaborator user logged in');
        break;
      case 0:
        // navigation.navigate('UserDashboard');
        Alert.alert('Common user logged in');
        break;
      default:
        Alert.alert('Tipo de usuário desconhecido');
        break;
    }
  };

  const handleLoginSubmit = async (email: string, password: string) => {
    try {
      await controller.handleLogin(email, password);
    } catch (error) {
      console.log('Erro no login:', error);
    }
  };

  const controller: UseUserController = {
    handleLogin,
    handleLogout,
    listUsers,
    createUser,
    handleLoginSubmit,
    handleRedirectToTypeBasedPage,
  };

  return {
    controller,
    users,
    loading,
    error,
  };
}

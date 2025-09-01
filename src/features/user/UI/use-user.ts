import { useState, useCallback } from 'react';
import { userController } from '../application/user.controller';
import type { User } from '../entity/user.entity';

export function useUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  return { users, loading, error, listUsers, createUser };
}

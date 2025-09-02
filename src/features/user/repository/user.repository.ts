import type { User } from '../entity/user.entity';

export interface UserRepository {
  getUser(id: string): Promise<User>;
  createUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User>;
  updateUser(id: string, user: Partial<User>): Promise<User>;
  deleteUser(id: string): Promise<void>;
  loginApi(idToken: string): Promise<{ token: string }>;
}

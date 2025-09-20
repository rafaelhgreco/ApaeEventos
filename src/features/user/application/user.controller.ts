import { userService } from './user.service';
import { User } from '../entity/user.entity';

export const userController = {
  async getUser(id: string) {
    return userService.getUser(id);
  },
  async createUser(
    userData: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'type'>,
  ) {
    return userService.createUser(userData);
  },
};

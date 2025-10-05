import { userService } from './user.service';
import { User } from '../entity/user.entity';
import { LoginUserUseCase } from './use-case/login-user-use-case';
import { signOutUser } from '../firebase/sing-in.auth';

class UserController {
  private loginUserUseCase: LoginUserUseCase;
  constructor() {
    this.loginUserUseCase = new LoginUserUseCase();
  }

  async getUser(id: string) {
    return userService.getUser(id);
  }

  async createUser(
    userData: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'type'>,
  ) {
    return userService.createUser(userData);
  }

  async login(email: string, password: string): Promise<User> {
    const { profile } = await this.loginUserUseCase.execute(email, password);
    return profile;
  }

  async logout(): Promise<void> {
    await signOutUser();
  }
}

export const userController = new UserController();

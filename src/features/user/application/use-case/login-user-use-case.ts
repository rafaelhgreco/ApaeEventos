import { User } from '../../entity/user.entity';
import { getUserProfile } from '../../firebase/get-user-profile';
import { signIn } from '../../firebase/sing-in.auth';

export class LoginUserUseCase {
  async execute(email: string, password: string) {
    const { idToken, user } = await signIn(email, password);

    const userProfile = await getUserProfile(user.uid);

    if (!userProfile || typeof userProfile.type === 'undefined') {
      throw new Error(
        'O perfil do usuário não foi encontrado ou está incompleto.',
      );
    }

    const profile: User = {
      id: user.uid,
      idToken,
      email: user.email || '',
      name: userProfile.name || 'Nome não informado',
      password: '',
      type: userProfile.type,
      createdAt: userProfile.createdAt || new Date(),
      updatedAt: userProfile.updatedAt || new Date(),
    };

    return {
      profile,
    };
  }
}

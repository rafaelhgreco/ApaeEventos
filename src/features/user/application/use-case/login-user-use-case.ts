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

    return {
      idToken,
      profile: {
        uid: user.uid,
        email: user.email,
        type: userProfile.type,
        ...userProfile,
      },
    };
  }
}

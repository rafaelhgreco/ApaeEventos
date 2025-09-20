import { userRepository } from '../repository/user.repository.impl';

export const userService = {
  getUser: userRepository.getUser,
  createUser: userRepository.createUser,
  updateUser: userRepository.updateUser,
  deleteUser: userRepository.deleteUser,
};

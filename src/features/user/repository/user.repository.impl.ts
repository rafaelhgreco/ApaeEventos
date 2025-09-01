import type { UserRepository } from './user.repository';

const API_URL = 'http://10.0.2.2:8080/v1/users';

export const userRepository: UserRepository = {
  async getUser(id) {
    const res = await fetch(`${API_URL}/${id}`);
    return await res.json();
  },
  async createUser(user) {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  },
  async updateUser(id, user) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  },
  async deleteUser(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  },
};

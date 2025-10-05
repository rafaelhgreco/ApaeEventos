import type { UserRepository } from './user.repository';
import { API_BASE_URL } from '@env';

export const userRepository: UserRepository = {
  async getUser(id) {
    const res = await fetch(`${API_BASE_URL}/users/${id}`);
    return await res.json();
  },
  async createUser(user) {
    const res = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  },
  async updateUser(id, user) {
    const res = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  },
  async deleteUser(id) {
    await fetch(`${API_BASE_URL}/users/${id}`, { method: 'DELETE' });
  },
};

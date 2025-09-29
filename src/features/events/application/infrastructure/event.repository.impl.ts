import type { Event } from '../domain/event.entity';
import { API_BASE_URL } from '@env';

export const eventRepository = {
  async getAllEvents(idToken: string): Promise<Event[]> {
    const res = await fetch(`${API_BASE_URL}/events`, {
      headers: { Authorization: `Bearer ${idToken}` },
    });
    return await res.json();
  },
};

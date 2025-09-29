import type { Event } from '../domain/event.entity';
const API_URL = 'http://10.0.2.2:8080/v1/events';

export const eventRepository = {
  async getAllEvents(idToken: string): Promise<Event[]> {
    const res = await fetch(API_URL, {
      headers: { Authorization: `Bearer ${idToken}` },
    });
    return await res.json();
  },
};

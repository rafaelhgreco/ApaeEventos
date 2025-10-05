import { EventDTO } from './event.entity';

export interface EventRepository {
  getAllEvents(idToken: string): Promise<EventDTO[]>;
  // getEventById(id: string): Promise<Event | null>;
  // createEvent(event: Omit<Event, 'id'>): Promise<Event>;
  // //   updateEvent(id: string, eventData: any): Promise<any>;
  // deleteEvent(id: string): Promise<void>;
}

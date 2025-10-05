import type { Event } from '../../application/domain/event.entity';
import type { EventModel } from './event.model';

export function eventEntityToModel(events: Event[]): EventModel[] {
  return events.map(e => ({
    id: e.id,
    title: e.title,
    description: e.description,
    startTime: e.startTime,
    endTime: e.endTime,
    location: e.location,
    avaliableTickets: e.avaliableTickets,
    totalTickets: e.totalTickets,
    status: e.status,
  }));
}

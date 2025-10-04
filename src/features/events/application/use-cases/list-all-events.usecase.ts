import { EventRepository } from '../domain/event.repository';
import { Event, EventDTO } from '../domain/event.entity';

export class ListAllEventsUseCase {
  private eventRepository: EventRepository;

  constructor(eventRepository: EventRepository) {
    this.eventRepository = eventRepository;
  }

  async execute(idToken: string) {
    try {
      const eventsRaw: EventDTO[] = await this.eventRepository.getAllEvents(
        idToken,
      );
      const events = eventsRaw.map(
        e =>
          new Event(
            e.id,
            e.title,
            e.description,
            e.startTime,
            e.endTime,
            e.location,
            e.totalTickets,
            e.avaliableTickets,
            e.status,
          ),
      );
      return { data: events, error: null };
    } catch (error: any) {
      return { data: [], error: error.message || 'Erro ao buscar eventos' };
    }
  }
}

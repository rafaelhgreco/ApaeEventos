import { EventRepository } from '../domain/event.repository';
import { Event, EventDTO } from '../domain/event.entity';
import { EventFactory } from '../event.factory';

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
      const events = EventFactory.fromDTOArray(eventsRaw);
      return { data: events, error: null };
    } catch (error: any) {
      return { data: [], error: error.message || 'Erro ao buscar eventos' };
    }
  }
}

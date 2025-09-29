import { EventRepository } from '../domain/event.repository';

export class ListAllEventsUseCase {
  private eventRepository: EventRepository;

  constructor(eventRepository: EventRepository) {
    this.eventRepository = eventRepository;
  }

  async execute(idToken: string) {
    try {
      const events = await this.eventRepository.getAllEvents(idToken);
      return { data: events, error: null };
    } catch (error: any) {
      return { data: [], error: error.message || 'Erro ao buscar eventos' };
    }
  }
}

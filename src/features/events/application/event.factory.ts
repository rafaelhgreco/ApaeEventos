import { Event, EventDTO } from './domain/event.entity';

export class EventFactory {
  static fromDTO(dto: EventDTO): Event {
    return new Event(
      dto.id,
      dto.title,
      dto.description,
      dto.startTime,
      dto.endTime,
      dto.location,
      dto.totalTickets,
      dto.avaliableTickets,
      dto.status,
    );
  }

  static fromDTOArray(dtos: EventDTO[]): Event[] {
    return dtos.map(EventFactory.fromDTO);
  }
}

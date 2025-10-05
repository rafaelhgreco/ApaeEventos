import { eventRepository } from '../infrastructure/event.repository.impl';
import { ListAllEventsUseCase } from './list-all-events.usecase';

export const useCaseFactory = {
  listAllEventsUseCase: new ListAllEventsUseCase(eventRepository),
  // outros use-cases...
};

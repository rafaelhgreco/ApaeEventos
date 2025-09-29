import { useCaseFactory } from './use-cases/use-case.factory';

export const eventController = {
  getAllEvents: (idToken: string) =>
    useCaseFactory.listAllEventsUseCase.execute(idToken),
};

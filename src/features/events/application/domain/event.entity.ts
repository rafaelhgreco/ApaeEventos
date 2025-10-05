export type EventStatusDTO =
  | 'SCHEDULED'
  | 'OPEN_FOR_SALE'
  | 'SOLD_OUT'
  | 'CANCELLED'
  | 'FINISHED';

export type EventDTO = {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  totalTickets: number;
  avaliableTickets: number;
  status: EventStatusDTO;
};

export class Event {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public startTime: string,
    public endTime: string,
    public location: string,
    public totalTickets: number,
    public avaliableTickets: number,
    public status: EventStatusDTO,
  ) {}
}

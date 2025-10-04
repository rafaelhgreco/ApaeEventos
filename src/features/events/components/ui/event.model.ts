export type EventStatus =
  | 'SCHEDULED'
  | 'OPEN_FOR_SALE'
  | 'SOLD_OUT'
  | 'CANCELLED'
  | 'FINISHED';

export interface EventModel {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  avaliableTickets: number;
  totalTickets: number;
  status: EventStatus;
}

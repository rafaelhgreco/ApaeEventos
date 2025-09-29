export class Event {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public startTime: Date,
    public endTime: Date,
    public location: string,
    public totalTickets: number,
  ) {}
}

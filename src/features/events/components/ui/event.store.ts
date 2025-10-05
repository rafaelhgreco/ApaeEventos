import { create } from 'zustand';
import type { Event } from '../../application/domain/event.entity';
type EventStore = {
  events: Event[];
  setEvents: (events: Event[]) => void;
};

export const useEventStore = create<EventStore>(set => ({
  events: [],
  setEvents: events => set({ events }),
}));

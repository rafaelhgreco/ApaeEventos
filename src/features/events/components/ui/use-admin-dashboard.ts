import { useMemo } from 'react';
import { EventModel, EventStatus } from './event.model';

interface UseAdminDashboardProps {
  events: EventModel[];
  loading: boolean;
  error?: string | null;
  statusCount: Record<EventStatus, number>;
  totalEvents: number;
}

export const useAdminDashboard = (
  events: EventModel[],
  loading: boolean,
  error?: string | null,
): UseAdminDashboardProps => {
  // Calcula a contagem de eventos por status
  const statusCount = useMemo(() => {
    return events.reduce((acc, event) => {
      acc[event.status] = (acc[event.status] || 0) + 1;
      return acc;
    }, {} as Record<EventStatus, number>);
  }, [events]);

  return {
    events,
    loading,
    error,
    statusCount,
    totalEvents: events.length,
  };
};

import { useState } from 'react';
import { eventController } from '../../application/event.controller';
import { useUserStore } from '../../../user/UI/user.store';
import { useEventStore } from './event.store';

export const useAdmin = () => {
  const setEvents = useEventStore(state => state.setEvents);
  const events = useEventStore(state => state.events);
  const [loading, setLoading] = useState(false);
  const { token } = useUserStore();

  const fetchAllEvents = async () => {
    setLoading(true);
    const { data, error } = await eventController.getAllEvents(token || '');
    setEvents(data);
    console.log(data);
    setLoading(false);
  };

  return {
    events,
    loading,
    fetchAllEvents,
  };
};

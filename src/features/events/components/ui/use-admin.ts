import { useState } from 'react';
import { eventController } from '../../application/event.controller';
import { Alert } from 'react-native';
import { useUserStore } from '../../../user/UI/user.store';

export const useAdmin = () => {
  const [allEventsEntity, setAllEventsEntity] = useState<Event[]>([]); // todas as entidades devem ser armazenadas na store, e quando forem usadas no componente serem transformadas em
  // const [allEventsModel, setAllEventsModel] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useUserStore();

  const fetchAllEvents = async () => {
    setLoading(true);
    const { data, error } = await eventController.getAllEvents(token || '');
    setAllEventsEntity(data);
    console.log('Eventos carregados:', data);
    setLoading(false);
    // setAllEventsModel(eventEntityToModel(data));
    // setLoading(false);
  };

  return {
    allEventsEntity,
    // allEventsModel,
    loading,
    fetchAllEvents,
  };
};

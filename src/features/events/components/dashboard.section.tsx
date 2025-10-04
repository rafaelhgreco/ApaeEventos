import { useEffect } from 'react';
import { Container, Typography } from '../../../base';
import { Card } from '../../../shared/components/layout/card.component';
import { AdminOverviewCard } from './admin-overview-card.component';
import { useAdmin } from './ui/use-admin';

const DashboardSection = () => {
  const { events, loading, fetchAllEvents } = useAdmin();
  useEffect(() => {
    fetchAllEvents();
  }, []);
  return (
    <>
      <Typography.Title color="text">Painel Administrador</Typography.Title>
      <AdminOverviewCard events={events} loading={loading} />
    </>
  );
};

export { DashboardSection };

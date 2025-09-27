import { Container, Typography } from '../../../base';
import { Card } from '../../../shared/components/layout/card.component';
import { AdminOverviewCard } from './admin-overview-card.component';

const DashboardSection = () => {
  return (
    <>
      <Typography.Title color="text">Painel Administrador</Typography.Title>
      <AdminOverviewCard />
    </>
  );
};

export { DashboardSection };

import { useState } from 'react';
import { Container, Typography } from '../../../base';
import { Card } from '../../../shared/components/layout/card.component';
import { Styled } from './admin-overview-card.component.styles';
import { AdminOverviewList } from './admin-overview-list.component';
import { EventStatusCounter } from './event-status-counter.component';
import { EventModel } from './ui/event.model';
import { useAdminDashboard } from './ui/use-admin-dashboard';

export interface AdminOverviewCardProps {
  events: EventModel[];
  loading: boolean;
}

const buttons = [
  {
    label: 'Total Eventos',
    onPress: () => {},
  },
  {
    label: 'Total Ingressos',
    onPress: () => {},
  },
  {
    label: 'Próximos eventos',
    onPress: () => {},
  },
];

const AdminOverviewCard = ({ events, loading }: AdminOverviewCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dashboard = useAdminDashboard(events, loading);
  console.log('Cancelados:', dashboard.statusCount.CANCELLED);
  console.log('Total:', dashboard.totalEvents);
  console.log(events);
  return (
    <Card backgroundColor="foregroundBlack" size="large">
      <Container.Flex direction="row" width="100%" center gap={16}>
        {buttons.map((btn, idx) => (
          <Styled.Button
            key={btn.label}
            activeOpacity={0.7}
            isPressed={activeIndex === idx}
            onPress={() => {
              setActiveIndex(idx);
              btn.onPress();
            }}
          >
            <Typography.Label color="white" center>
              {btn.label}
            </Typography.Label>
          </Styled.Button>
        ))}
      </Container.Flex>
      <Container.Flex>
        {activeIndex === 0 && (
          <EventStatusCounter
            total={events.length}
            items={[
              {
                label: 'Agendados',
                value: dashboard.statusCount.SCHEDULED || 0,
              },
              {
                label: 'À venda',
                value: dashboard.statusCount.OPEN_FOR_SALE || 0,
              },
              {
                label: 'Esgotados',
                value: dashboard.statusCount.SOLD_OUT || 0,
              },
              {
                label: 'Cancelados',
                value: dashboard.statusCount.CANCELLED || 0,
              },
              {
                label: 'Finalizados',
                value: dashboard.statusCount.FINISHED || 0,
              },
            ]}
            loading={loading}
            error={undefined}
          />
        )}
      </Container.Flex>
    </Card>
  );
};

export { AdminOverviewCard };

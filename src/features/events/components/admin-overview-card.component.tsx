import { useState } from 'react';
import { Container, Typography } from '../../../base';
import { Card } from '../../../shared/components/layout/card.component';
import { Styled } from './admin-overview-card.component.styles';

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

const AdminOverviewCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        <Typography.Text color="white" center>
          Conteúdo do card de visão geral do administrador.
        </Typography.Text>
      </Container.Flex>
    </Card>
  );
};

export { AdminOverviewCard };

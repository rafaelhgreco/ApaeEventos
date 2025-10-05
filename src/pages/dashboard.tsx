import { useEffect } from 'react';
import { Container, Typography } from '../base';
import { DashboardSection } from '../features/events/components/dashboard.section';
import { useAdmin } from '../features/events/components/ui/use-admin';
import { useUser } from '../features/user/UI/use-user';
import { BasicButton } from '../shared/components/buttons/basic.button';
import { Card } from '../shared/components/layout/card.component';
import { InfoCard } from '../features/events/components/info-card.component';
import { Alert } from 'react-native';

const DashboardPage = () => {
  const { controller } = useUser();

  return (
    <>
      <Container.Flex center gap={20} padding={20}>
        <DashboardSection />

        <Container.Flex
          width="100%"
          direction="row"
          justifyContent="center"
          gap={15}
        >
          <InfoCard
            text="Criar um novo Evento"
            onButtonPress={() => Alert.alert('Criar evento')}
          />

          <InfoCard
            text="Gerenciar Eventos"
            onButtonPress={() => Alert.alert('Gerenciar evento')}
          />
        </Container.Flex>

        <Card backgroundColor="light" size="medium">
          <Typography.Text color="text">
            Este é um card estilizado.
          </Typography.Text>
        </Card>

        {/* <BasicButton
          label="Logout"
          handleClick={() => {
            controller.handleLogout();
          }}
        /> */}
      </Container.Flex>
    </>
  );
};

export { DashboardPage };

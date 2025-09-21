import { Container, Typography } from '../base';
import { useUser } from '../features/user/UI/use-user';
import { BasicButton } from '../shared/components/buttons/basic.button';
import { Card } from '../shared/components/layout/card.component';
import { Styled } from './dashboard.styles';

const DashboardPage = () => {
  const { controller } = useUser();
  return (
    <>
      <Container.Flex center gap={20} padding={20}>
        <Typography.Title color="text">Dashboard</Typography.Title>
        <Card backgroundColor="foregroundBlack" size="large">
          <Typography.Text color="white">
            Bem-vindo ao Dashboard!
          </Typography.Text>
        </Card>

        <Styled.Cards backgroundColor="light" size="medium">
          <Typography.Text color="text">
            Este é um card estilizado.
          </Typography.Text>
        </Styled.Cards>

        <Styled.Cards backgroundColor="light" size="small">
          <Typography.Text color="text">
            Este é um card estilizado.
          </Typography.Text>
        </Styled.Cards>

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

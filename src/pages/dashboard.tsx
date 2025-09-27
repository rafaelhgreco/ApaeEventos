import { Container, Typography } from '../base';
import { DashboardSection } from '../features/events/components/dashboard.section';
import { useUser } from '../features/user/UI/use-user';
import { BasicButton } from '../shared/components/buttons/basic.button';
import { Card } from '../shared/components/layout/card.component';

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
          <Card backgroundColor="light" size="small">
            <Typography.Text color="text">
              Este é um card estilizado.
            </Typography.Text>
          </Card>

          <Card backgroundColor="light" size="small">
            <Typography.Text color="text">
              Este é um card estilizado.
            </Typography.Text>
          </Card>
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

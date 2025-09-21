import { Container, Typography } from '../base';
import { useUser } from '../features/user/UI/use-user';
import { BasicButton } from '../shared/components/buttons/basic.button';

const DashboardPage = () => {
  const { controller } = useUser();
  return (
    <>
      <Container.Flex center>
        <Typography.Title color="text">Dashboard</Typography.Title>
        <BasicButton
          label="Logout"
          handleClick={() => {
            controller.handleLogout();
          }}
        />
      </Container.Flex>
    </>
  );
};

export { DashboardPage };

import { useNavigation } from '@react-navigation/native';
import { Container, Typography } from '../base';
import { BasicForm } from '../shared/components/basic-form.component';
import { BasicButton } from '../shared/components/buttons/basic.button';
import { Parallax } from '../shared/components/layout/parallax-scroll.view';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/root.types';

const HomePage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const buttons = [
    {
      label: 'login',
      variant: 'primary' as const,
      size: 'medium' as const,
      handleClick: () => navigation.navigate('Login'),
    },
    {
      label: 'Criar Conta',
      variant: 'minimal' as const,
      size: 'large' as const,
      handleClick: () => navigation.navigate('Register'),
    },
  ];
  return (
    <>
      <Parallax>
        <Container.Flex center padding={30}>
          <Typography.Title style={{ fontFamily: 'Domus Bold' }} color="text">
            Bem-vindo ao Apae Eventos
          </Typography.Title>
          <Container.Flex left padding={10}>
            <Typography.Text color="textSecondary" center>
              Gerencie e participe de eventos de forma fácil e rápida.
            </Typography.Text>

            {buttons.map(button => (
              <Container.Flex center marginTop={45} key={button.label}>
                <BasicButton
                  label={button.label}
                  variant={button.variant}
                  size={button.size}
                  handleClick={button.handleClick}
                />
              </Container.Flex>
            ))}
          </Container.Flex>
        </Container.Flex>
      </Parallax>
    </>
  );
};

export { HomePage };

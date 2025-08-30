import { Text, View } from 'react-native';
import { Styled } from './teste.styles';
import { Typography } from './base';

const Teste = () => {
  return (
    <Styled.ContainerTeste center gap={10} padding={20}>
      <Typography.Label>Teste</Typography.Label>
      <Typography.Text>Teste</Typography.Text>
      <Typography.Title>Teste</Typography.Title>
    </Styled.ContainerTeste>
  );
};

export { Teste };

import emotion from '@emotion/native';
import { Container } from './base';

const ContainerTeste = emotion(Container.Flex)`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Styled = {
  ContainerTeste,
};

import emotion from '@emotion/native';

const Container = emotion.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Styled = {
  Container,
};

import styled from '@emotion/native';
import { theme } from '../../../theme.helpers';

const Button = styled.TouchableOpacity`
  border-color: ${theme.color('foregroundLight')};
  border-width: 1px;
  border-radius: ${theme.borderRadius('md')};
  padding: 0px 20px;
  width: 100%;
  max-width: 65px;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color('foregroundDefault')};
`;

export const Styled = {
  Button,
};

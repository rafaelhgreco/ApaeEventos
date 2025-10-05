import styled from '@emotion/native';
import { theme } from '../../../theme.helpers';

interface ButtonProps {
  disabled?: boolean;
  isPressed?: boolean;
}

const Button = styled.TouchableOpacity<ButtonProps>`
  border-color: ${theme.color('foregroundLight')};
  border-width: 1px;
  border-radius: ${theme.borderRadius('lg')};
  padding: 0px 20px;
  width: 100%;
  max-width: 110px;
  min-height: 40px;
  background-color: ${props =>
    props.isPressed
      ? theme.color('foregroundDefault')
      : theme.color('foregroundBlack')};
`;

export const Styled = {
  Button,
};

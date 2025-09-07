import styled from '@emotion/native';
import { theme } from '../../../theme.helpers';

const InputButton = styled.TouchableOpacity`
  background-color: ${theme.color('primary')};
  padding: ${theme.spacing('md')};
  border-radius: ${theme.borderRadius('md')};
  align-items: center;
  justify-content: center;
`;

const InputField = styled.TextInput`
  border-width: 1px;
  border-color: ${theme.color('border')};
  padding: ${theme.spacing('sm')};
  border-radius: ${theme.borderRadius('sm')};
  margin-bottom: ${theme.spacing('sm')};
  width: 100%;
`;

export const Styled = {
  InputButton,
  InputField,
};

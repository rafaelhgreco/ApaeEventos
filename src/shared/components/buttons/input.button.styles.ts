import styled, { css } from '@emotion/native';
import { theme } from '../../../theme.helpers';

export const shadow = css`
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  elevation: 2;
`;

const InputButton = styled.TouchableOpacity`
  background-color: ${theme.color('primary')};
  padding: ${theme.spacing('md')};
  border-radius: ${theme.borderRadius('md')};
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.View`
  border-width: 0.5px;
  border-color: transparent;
  border-radius: ${theme.borderRadius('md')};
  border-color: ${theme.color('terceary')};
  background-color: ${theme.color('background')};
  ${shadow}
`;

const InputField = styled.TextInput`
  padding: ${theme.spacing('sm')};
  background-color: transparent;
  height: 45px;
`;

export const Styled = {
  InputButton,
  InputField,
  InputContainer,
};

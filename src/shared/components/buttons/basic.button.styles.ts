import styled from '@emotion/native';
import { Text } from 'react-native';
import { theme } from '../../../theme.helpers';

export type Variant = 'outlined' | 'primary' | 'minimal';
export type Size = 'small' | 'medium' | 'large';

const sizePadding = {
  small: theme.spacing('sm'),
  medium: theme.spacing('md'),
  large: theme.spacing('lg'),
};

const sizeFont = {
  small: theme.fontSize('sm'),
  medium: theme.fontSize('md'),
  large: theme.fontSize('lg'),
};

const sizeWidth = {
  small: 80,
  medium: 120,
  large: 160,
};

const sizeHeight = {
  small: 32,
  medium: 44,
  large: 56,
};

const Button = styled.TouchableOpacity<{
  variant: Variant;
  size?: Size;
  disabled?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ size = 'medium' }) => sizeWidth[size]}px;
  height: ${({ size = 'medium' }) => sizeHeight[size]}px;
  padding: ${({ size = 'medium' }) => sizePadding[size]};
  border-radius: ${theme.borderRadius('md')};
  background-color: ${({ variant }) =>
    variant === 'primary' ? theme.color('primary') : 'transparent'};
  border: ${({ variant }) =>
    variant === 'outlined' ? `2px solid ${theme.color('primary')}` : 'none'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Label = styled(Text)<{ variant: Variant; size?: Size }>`
  color: ${({ variant }) =>
    variant === 'primary' ? theme.color('text') : theme.color('primary')};
  font-size: ${({ size = 'medium' }) => sizeFont[size]};
  font-weight: 600;
  text-align: center;
  flex: 1;
`;

export const Styled = {
  Button,
  Label,
};

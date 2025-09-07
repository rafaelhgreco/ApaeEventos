import React from 'react';
import { View, GestureResponderEvent } from 'react-native';
import { Variant, Size, Styled } from './basic.button.styles';

interface BasicButtonProps {
  variant?: Variant;
  size?: Size;
  label?: string;
  icon?: React.ReactNode;
  handleClick?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

export const BasicButton: React.FC<BasicButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  label,
  icon,
  handleClick,
  disabled,
}) => (
  <Styled.Button
    variant={variant}
    size={size}
    onPress={handleClick}
    disabled={disabled}
  >
    {icon && <View style={{ marginRight: label ? 8 : 0 }}>{icon}</View>}
    {label && (
      <Styled.Label variant={variant} size={size}>
        {label}
      </Styled.Label>
    )}
  </Styled.Button>
);

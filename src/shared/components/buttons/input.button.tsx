import React from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { Styled } from './input.button.styles';
import { Typography } from '../../../base';

interface InputProps {
  type: 'button' | 'text' | 'email' | 'password' | 'number' | 'date';
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
  placeholder?: string;
  [key: string]: any;
}

const InputButton = ({
  type,
  label,
  value,
  onChange,
  onClick,
  placeholder,
  ...rest
}: InputProps) => {
  switch (type) {
    case 'button':
      return (
        <Styled.InputButton onPress={onClick} {...rest}></Styled.InputButton>
      );
    case 'password':
      return (
        <Styled.InputContainer>
          <Styled.InputField
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry
            {...rest}
          />
        </Styled.InputContainer>
      );
    case 'email':
    case 'text':
    case 'number':
      return (
        <Styled.InputContainer>
          <Styled.InputField
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            keyboardType={type === 'number' ? 'numeric' : 'default'}
            {...rest}
          />
        </Styled.InputContainer>
      );
    default:
      return null;
  }
};

export { InputButton };

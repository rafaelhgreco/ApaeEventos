import React from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { Styled } from './input.button.styles';

interface InputProps {
  type: 'button' | 'text' | 'email' | 'password' | 'number' | 'date';
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
  placeholder?: string;
  [key: string]: any; // para props extras
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
        <Styled.InputButton onPress={onClick} {...rest}>
          <Text>{label}</Text>
        </Styled.InputButton>
      );
    case 'password':
      return (
        <View>
          <Text>{label}</Text>
          <Styled.InputField
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry
            {...rest}
          />
        </View>
      );
    case 'email':
    case 'text':
    case 'number':
      return (
        <View>
          <Text>{label}</Text>
          <Styled.InputField
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            keyboardType={type === 'number' ? 'numeric' : 'default'}
            {...rest}
          />
        </View>
      );
    // Adicione outros tipos conforme necessário
    default:
      return null;
  }
};

export { InputButton };

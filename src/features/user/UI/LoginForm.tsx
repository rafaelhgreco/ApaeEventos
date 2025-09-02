import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useUserStore } from './user.store';
import { signIn } from '../firebase/sing-in.auth';
import { Typography } from '../../../base';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useUserStore();

  const handleLogin = async () => {
    try {
      const idToken = await signIn(email, password);
      setToken(idToken);
      Alert.alert('Token recuperado!', idToken);
    } catch (error: any) {
      console.log('Erro ao autenticar', error.message || 'Erro desconhecido');
    }
  };

  return (
    <View style={{ gap: 10, marginBottom: 20 }}>
      <Typography.Title>Login</Typography.Title>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 8,
          width: '100%',
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 8,
          width: '100%',
        }}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

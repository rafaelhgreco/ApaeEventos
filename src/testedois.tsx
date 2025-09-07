import React, { useEffect, useState } from 'react';
import {
  View,
  Button,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
import { Typography } from './base';
import { useUser } from './features/user/ui/use-user';
import { Styled } from './teste.styles';
import { useUserStore } from './features/user/ui/user.store';
import { signIn } from './features/user/firebase/sing-in.auth';
import { LoginForm } from './features/user/ui/LoginForm';
import { defaultTheme } from './theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  TesteDois: undefined;
};

const TesteDois = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { users, loading, error, controller } = useUser();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    type: '',
  });

  const { token, setToken, clearToken } = useUserStore();

  useEffect(() => {
    controller.listUsers();
  }, [controller.listUsers]);

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    controller.createUser(form);
    setForm({ name: '', email: '', password: '', type: '' });
  };

  return (
    <Styled.ContainerTeste center gap={10} padding={20}>
      <Typography.Title>Cadastro de Usuário</Typography.Title>
      <TextInput
        placeholder="Nome"
        value={form.name}
        onChangeText={text => handleChange('name', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 8,
          marginBottom: 8,
          width: '100%',
        }}
      />
      <TextInput
        placeholder="Email"
        value={form.email}
        onChangeText={text => handleChange('email', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: defaultTheme.spacing.sm,
          borderRadius: 8,
          marginBottom: 8,
          width: '100%',
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        value={form.password}
        onChangeText={text => handleChange('password', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 8,
          marginBottom: 8,
          width: '100%',
        }}
        secureTextEntry
      />
      <TextInput
        placeholder="Tipo"
        value={form.type}
        onChangeText={text => handleChange('type', text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 8,
          marginBottom: 8,
          width: '100%',
        }}
      />
      <Button title="Cadastrar" onPress={handleSubmit} />
      <Button
        title="Voltar pagina"
        onPress={() => navigation.navigate('Home')}
      />
      <Typography.Title>Usuários</Typography.Title>
      {loading && <ActivityIndicator />}
      {error && <Typography.Label color="red">{error}</Typography.Label>}
      {users.map(user => (
        <Styled.ContainerTeste key={user.id} style={{ marginBottom: 10 }}>
          <Typography.Text color="red">{user.name}</Typography.Text>
          <Typography.Label color="red">{user.email}</Typography.Label>
        </Styled.ContainerTeste>
      ))}
      <LoginForm />
    </Styled.ContainerTeste>
  );
};

export { TesteDois };

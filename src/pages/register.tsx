import { useState } from 'react';
import { Container } from '../base';
import { useUser } from '../features/user/ui/use-user';
import { BasicForm } from '../shared/components/basic-form.component';
import { Parallax } from '../shared/components/layout/parallax-scroll.view';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/root.types';

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    type: '',
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { controller, loading, error } = useUser();
  const handleRegisterSubmit = async () => {
    if (
      form.name === '' ||
      form.email === '' ||
      form.password === '' ||
      form.type === ''
    ) {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }
    try {
      console.log('form', form);
      await controller.createUser(form);
      Alert.alert('Usuário registrado com sucesso!');
    } catch (error) {
      console.log('Erro no login:', error);
    }

    setForm({ name: '', email: '', password: '', type: '' });
  };

  const registerConfig = {
    fields: [
      {
        type: 'text' as 'text',
        placeholder: 'Nome',
        name: 'name',
        required: true,
        value: form.name,
        onChangeText: (text: string) => setForm({ ...form, name: text }),
      },
      {
        type: 'email' as 'email',
        placeholder: 'E-mail',
        name: 'email',
        required: true,
        value: form.email,
        onChangeText: (text: string) => setForm({ ...form, email: text }),
      },
      {
        type: 'password' as 'password',
        placeholder: 'Senha',
        name: 'password',
        required: true,
        value: form.password,
        onChangeText: (text: string) => setForm({ ...form, password: text }),
      },
      {
        type: 'text' as 'text',
        placeholder: 'Tipo (admin/user)',
        name: 'type',
        required: true,
        value: form.type, // COLLABORATOR teremos que refatorar isso
        onChangeText: (text: string) => setForm({ ...form, type: text }),
      },
    ],
    buttons: [
      {
        label: 'Registrar',
        variant: 'primary' as const,
        size: 'small' as const,
        loading: loading,
        handleClick: handleRegisterSubmit,
      },
      {
        label: 'Voltar',
        variant: 'outlined' as const,
        size: 'small' as const,
        loading: false,
        handleClick: () => navigation.navigate('Home'),
      },
    ],
  };
  return (
    <Parallax>
      <Container.Flex padding={10} marginTop={10}>
        <BasicForm {...registerConfig} />;
      </Container.Flex>
    </Parallax>
  );
};

export { RegisterPage };

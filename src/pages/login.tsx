import { Container, Typography } from '../base';
import { BasicButton } from '../shared/components/buttons/basic.button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/root.types';
import { BasicForm } from '../shared/components/basic-form.component';
import { useState } from 'react';
import { useUser } from '../features/user/ui/use-user';
import { Alert } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { controller, loading, error } = useUser();
  const handleLoginSubmit = async () => {
    try {
      await controller.handleLogin(email, password);
      Alert.alert('Login realizado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.log('Erro no login:', error);
    }
  };
  const loginConfig = {
    fields: [
      {
        type: 'email' as 'email',
        placeholder: 'E-mail',
        name: 'email',
        required: true,
        value: email,
        onChangeText: (text: string) => setEmail(text),
      },
      {
        type: 'password' as 'password',
        placeholder: 'Senha',
        name: 'password',
        required: true,
        value: password,
        onChangeText: (text: string) => setPassword(text),
      },
    ],
    buttons: [
      {
        label: 'iniciar sessão',
        variant: 'primary' as const,
        size: 'medium' as const,
        loading: loading,
        handleClick: handleLoginSubmit,
      },
      {
        label: 'Esqueci a senha',
        variant: 'minimal' as const,
        size: 'medium' as const,
        handleClick: () => {},
      },
    ],
  };

  return (
    <>
      <Container.Flex center margin={100}>
        <Typography.Title color="text">Apae Eventos</Typography.Title>
      </Container.Flex>
      <Container.Flex padding={10}>
        {error && (
          <Typography.Text color="error" center>
            {error}
          </Typography.Text>
        )}
        <BasicForm {...loginConfig} />
      </Container.Flex>
      <BasicButton
        label="Voltar para Home"
        size="small"
        handleClick={() => navigation.navigate('Home')}
      />
    </>
  );
};

export { LoginPage };

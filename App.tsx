import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Teste } from './src/teste';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme, darkTheme } from './src/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TesteDois } from './src/testedois';
import { HomePage } from './src/pages/home';
import { LoginPage } from './src/pages/login';
import { LoginForm } from './src/features/user/ui/LoginForm';
import { RegisterPage } from './src/pages/register';

const Stack = createNativeStackNavigator<{
  Home: undefined;
  Login: undefined;
  Register: undefined;
}>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

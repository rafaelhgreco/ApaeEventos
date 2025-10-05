import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme, darkTheme } from './src/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './src/pages/home';
import { LoginPage } from './src/pages/login';
import { RegisterPage } from './src/pages/register';
import { DashboardPage } from './src/pages/dashboard';
import { navDarkTheme, navDefaultTheme } from './src/theme-navigation';

const Stack = createNativeStackNavigator<{
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
}>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : defaultTheme;
  const navigationTheme = isDarkMode ? navDarkTheme : navDefaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer theme={navigationTheme}>
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
            <Stack.Screen
              name="Dashboard"
              component={DashboardPage}
              options={{ headerShown: true, title: 'Dashboard' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

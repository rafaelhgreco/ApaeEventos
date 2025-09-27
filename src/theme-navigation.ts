import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import {
  defaultTheme as myAppTheme,
  darkTheme as myAppDarkTheme,
} from './theme';
export const navDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: myAppTheme.colors.background,
    text: myAppTheme.colors.text,
    primary: myAppTheme.colors.primary,
  },
};

export const navDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: myAppDarkTheme.colors.background,
    text: myAppDarkTheme.colors.text,
    primary: myAppDarkTheme.colors.primary,
  },
};

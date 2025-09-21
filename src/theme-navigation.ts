// src/navigationTheme.ts
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import {
  defaultTheme as myAppTheme,
  darkTheme as myAppDarkTheme,
} from './theme';
export const navDefaultTheme = {
  ...DefaultTheme, // Pega o tema padrão da navegação como base
  colors: {
    ...DefaultTheme.colors,
    // Sobrescreve as cores com as do seu tema Emotion
    background: myAppTheme.colors.background, // Cor de fundo principal do app        // Cor de fundo dos "cards" (telas)
    text: myAppTheme.colors.text, // Cor do texto
    primary: myAppTheme.colors.primary, // Cor primária (usada em botões, abas, etc.)
  },
};

export const navDarkTheme = {
  ...DarkTheme, // Pega o tema escuro da navegação como base
  colors: {
    ...DarkTheme.colors,
    // Sobrescreve as cores com as do seu tema Emotion
    background: myAppDarkTheme.colors.background,
    text: myAppDarkTheme.colors.text,
    primary: myAppDarkTheme.colors.primary,
  },
};

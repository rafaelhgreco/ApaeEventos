import { defaultTheme, darkTheme } from './theme';

type ThemeType = typeof defaultTheme;

export const themeHelpers = (theme: ThemeType) => ({
  color: (key: keyof ThemeType['colors']) => theme.colors[key],
  spacing: (key: keyof ThemeType['spacing']) => `${theme.spacing[key]}px`,
  fontSize: (key: keyof ThemeType['fontSizes']) => `${theme.fontSizes[key]}px`,
  borderRadius: (key: keyof ThemeType['borderRadius']) =>
    `${theme.borderRadius[key]}px`,
});

export const theme = themeHelpers(defaultTheme);
export const themeDark = themeHelpers(darkTheme);

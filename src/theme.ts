interface Theme {
  colors: {
    primary: string;
    secondary: string;
    terceary: string;
    background: string;
    foregroundBlack: string;
    foregroundLight: string;
    foregroundDefault: string;
    text: string;
    light: string;
    border: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
  };
  fontSizes: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

export const defaultTheme: Theme = {
  colors: {
    primary: '#010101',
    foregroundBlack: '#181818',
    foregroundLight: '#ECE8FF',
    foregroundDefault: '#8850FF',
    secondary: '#7A1CAC',
    terceary: '#2E073F',
    background: '#F0F0F0',
    text: '#2b2d42',
    light: '#FFFFFF',
    border: '#AD49E1',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  fontSizes: {
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
};

export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#62B6CB',
    secondary: '#8EE3F5',
    terceary: '#F4A261',
    foregroundBlack: '#1A1A1A',
    foregroundLight: '#3A3A3A',
    foregroundDefault: '#2E2E2E',
    background: '#2b2d42',
    text: '#FBFBFB',
    light: '#FFFFFF',
    border: '#F4A261',
  },
};

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
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
    primary: '#C6E7FF',
    secondary: '#D4F6FF',
    background: '#FBFBFB',
    text: '#2b2d42',
    border: '#FFDDAE',
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
    background: '#2b2d42',
    text: '#FBFBFB',
    border: '#F4A261',
  },
};

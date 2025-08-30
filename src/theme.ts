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

export const lightTheme: Theme = {
  colors: {
    primary: '#4361ee',
    secondary: '#f72585',
    background: '#ffffff',
    text: '#2b2d42',
    border: '#e9ecef',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
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
  colors: {
    primary: '#4895ef',
    secondary: '#f72585',
    background: '#121212',
    text: '#edf2f4',
    border: '#2d2d2d',
  },
  spacing: { ...lightTheme.spacing },
  borderRadius: { ...lightTheme.borderRadius },
  fontSizes: { ...lightTheme.fontSizes },
};

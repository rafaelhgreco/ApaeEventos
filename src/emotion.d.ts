// src/emotion.d.ts
import '@emotion/react';
import { Theme } from './theme';

declare module '@emotion/react' {
  export interface Theme extends Theme {
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
}

// src/themes.ts

export const lightTheme = {
  background: '#f5f5f5',
  text: '#000000',
  card: '#ffffff',
  primary: '#6fc2a6',
  secondary: '#16171a',
  active: '#34D1BF',
};

export const darkTheme = {
  background: '#16171a',
  text: '#ffffff',
  card: '#303030',
  primary: '#424242',
  secondary: '#c7c7c7',
  active: '#34D1BF',
};

export type Theme = typeof lightTheme | typeof darkTheme;

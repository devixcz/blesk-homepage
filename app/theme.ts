'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1024,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#ed1c1d',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#e9eff4',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;

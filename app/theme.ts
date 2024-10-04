'use client';
import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
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

'use client';

import { createTheme } from '@mui/material/styles';

const themeOptions = {
  typography: {
    heading: {
      fontSize: '168px',
      fontFamily: 'Arial',
      color: 'black',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontWeight: 1000,

    },
    // Disable h3 variant
    h3: undefined,
  },
  components: {
    MuiChip: {
      defaultProps: {
        sx: {
          borderRadius: 2,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          heading: 'h1',
        },
      },
    },
  },
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

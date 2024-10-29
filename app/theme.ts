"use client";

import { createTheme } from "@mui/material/styles";

// Theme configuration with Inter as the default font
const themeOptions = {
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h3: undefined, // Disable h3 variant
    h1: {
      color: "black",
    }, 
  },
  components: {
    MuiChip: {
      defaultProps: {
        sx: {
          borderRadius: 2,
          margin: 0.5,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          heading: "h1", // Map the new variant to render a <h1> by default
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
    mode: "light",
    primary: {
      main: "#ed1c1d",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#e9eff4",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;

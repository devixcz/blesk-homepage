"use client";

import { createTheme, PaletteMode, ThemeOptions } from "@mui/material/styles";

// Theme configuration with Inter as the default font
const themeOptions = {
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h3: undefined, // Disable h3 variant
    h1: {
      fontWeight: 900,
      fontSize: 140,
      textTransform: "uppercase",
      "@media (max-width: 900px)": { // Breakpoint pro 'md'
        fontSize: 60,
      },
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
    mode: "light" as PaletteMode,
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
} as ThemeOptions;

const theme = createTheme(themeOptions);

export default theme;

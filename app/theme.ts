"use client";

import { createTheme, PaletteMode, ThemeOptions } from "@mui/material/styles";
import { Inter } from "next/font/google";

// Import font Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"], // Přizpůsobte dle vašich potřeb
});

// Theme configuration with Inter as the default font
const themeOptions = {
  typography: {
    fontFamily: inter.style.fontFamily, // Nastavení fontu přímo z next/font/google
    h3: undefined, // Disable h3 variant
    h1: {
      fontWeight: 900,
      fontSize: 140,
      color: "black",
      textTransform: "uppercase",
      "@media (max-width: 900px)": { // Breakpoint pro 'md'
        fontSize: 60,
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "@font-face": inter.style.fontFace, // Přidání @font-face pravidel
          body: {
            fontFamily: inter.style.fontFamily, // Použití fontu na celém těle aplikace
          },
        },
      },
    },
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

"use client";

import { createTheme, PaletteMode, ThemeOptions } from "@mui/material/styles";
import { Inter } from "next/font/google";

// Import font Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"], // Přizpůsobte dle vašich potřeb
});

// Theme configuration with Inter as the default font
const themeOptions = {
  typography: {
    fontFamily: inter.style.fontFamily, // Nastavení fontu přímo z next/font/google
    h1: {
      fontWeight: 900,
      fontSize: 140,
      color: "black",
      textTransform: "uppercase",
      "@media (max-width: 900px)": {
        // Breakpoint pro 'md'
        fontSize: 60,
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          body: {
            fontFamily: inter.style.fontFamily, // Použití fontu na celém těle aplikace
            color: "#18181B",
          },
        },
      },
    },
    MuiChip: {
      defaultProps: {
        sx: {
          borderRadius: "6px",
          margin: "3px",
          padding: "8px 12px",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: 600,
          border: "1px solid #E4E4E7",
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
      main: "#e30613",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#e9eff4",
    },
    white: {
      main: "#ffffff",
      contrastText: "#95040E",
    },
  },
} as ThemeOptions;

const theme = createTheme(themeOptions);

export default theme;

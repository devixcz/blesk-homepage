import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/inter";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export const metadata: Metadata = {
  title: "Blesk.cz - Homepage POC",
  description: "Blesk.cz - Homepage POC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

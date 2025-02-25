import "./globals.css";
import "@fontsource-variable/inter";
import { Box, Container } from "@mui/material";
import type { Metadata } from "next";

import Footer from "@/app/components/ui/layout/Footer";
import MainBar from "@/app/components/ui/layout/MainBar";
import MainMenu from "@/app/components/ui/layout/MainMenu";
import TopBar from "@/app/components/ui/layout/TopBar";
import Providers from "@/app/providers/Providers";
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
        <Providers>
          <Box
            component="main"
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
              backgroundColor: "background.default",
            }}
          >
            <TopBar />
            <MainBar />
            <MainMenu />

            <Box sx={{ flex: 1 }}>
              <Container sx={{ backgroundColor: "#fff", pt: 1 }} maxWidth="lg">
                {children}
              </Container>
            </Box>

            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}

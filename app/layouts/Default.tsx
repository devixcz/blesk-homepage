import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { ReactNode } from "react";

import Footer from "./Footer";
import MainBar from "./MainBar";
import MainMenu from "./MainMenu";
import TopBar from "./TopBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
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
  );
};

export default Layout;

import React, { ReactNode, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import PersonOutline from "@mui/icons-material/PersonOutline";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import Chip from "@mui/material/Chip";

const pages = ["Celebrity", "Zprávy", "Sport"];
const mainMenu = [
  "Olympiáda",
  "Volby",
  "Zeman v Motole",
  "Už budu",
  "Střelba na fakultě",
];
const socialLinks = ["Facebook", "Twitter", "Instagram", "YouTube"];
const settings = ["Můj profil", "Odhlásit se"];
const footerLinks = [
  { title: "Kontakt", href: "/kontakt" },
  { title: "Reklama", href: "/reklama" },
  { title: "Podmínky použití", href: "/podminky" },
  { title: "Ochrana osobních údajů", href: "/gdpr" },
  { title: "Nápověda", href: "/napoveda" },
];

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [anchorElSearch, setAnchorElSearch] =
    React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElSocial, setAnchorElSocial] =
    React.useState<null | HTMLElement>(null);

  const handleOpenSearchBar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSearch(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenSocialMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSocial(event.currentTarget);
  };

  const handleCloseSearchBar = () => {
    setAnchorElSearch(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseSocialMenu = () => {
    setAnchorElSocial(null);
  };

  return (
    <Box
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "auto", // Creates scrolling context
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: { xs: 1, md: 0 },
            }}
          >
            <Box sx={{ display: "flex", flexGrow: 1, width: "100%", gap: 2 }}>
              <Typography
                color="white"
                sx={{ fontSize: "12px", lineHeight: "16px" }}
              >
                Pondělí 12. února 2024
              </Typography>
              <Typography
                color="white"
                sx={{ fontSize: "12px", lineHeight: "16px" }}
              >
                Bořivoj
              </Typography>
              <Typography
                color="white"
                sx={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: { xs: "flex-end", md: "flex-start" },
                }}
              >
                8°C Praha
              </Typography>
            </Box>

            {/* Social menu */}
            <Box
              sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  onClick={handleOpenSocialMenu}
                  endIcon={<ExpandMoreIcon />}
                  sx={{
                    color: "white.main",
                    textTransform: "none",
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: 500,
                    textWrap: "nowrap",
                  }}
                >
                  Sledujte Blesk na sítích
                </Button>
              </Box>

              <Menu
                sx={{ mt: "24px" }}
                id="menu-social"
                anchorEl={anchorElSocial}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElSocial)}
                onClose={handleCloseSocialMenu}
              >
                {socialLinks.map((link) => (
                  <MenuItem key={link} onClick={handleCloseSocialMenu}>
                    <Typography sx={{ textAlign: "center" }}>{link}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* AppBar */}
      <AppBar
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          boxShadow: isSticky ? 3 : 0,
          transition: "box-shadow 0.3s",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* Search bar (mobile + desktop) */}
              <Box>
                <IconButton
                  size="large"
                  aria-label="search bar"
                  aria-controls="menu-searchbar"
                  aria-haspopup="true"
                  onClick={handleOpenSearchBar}
                  color="inherit"
                >
                  <ManageSearchIcon />
                </IconButton>
                <Menu
                  id="menu-searchbar"
                  anchorEl={anchorElSearch}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  open={Boolean(anchorElSearch)}
                  onClose={handleCloseSearchBar}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseSearchBar}>
                      <Typography sx={{ textAlign: "center" }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Main menu (desktop only) */}
              <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseSearchBar}
                    sx={{
                      my: 2,
                      color: "white.main",
                      display: "block",
                      boxShadow: "none",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 600,
                      textTransform: "none",
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Logo */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexGrow: 1,
                  mr: 2,
                }}
              >
                <Image
                  src="/img/blesk-logo.svg"
                  alt="Logo"
                  width={92}
                  height={32}
                />
              </Box>

              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  mr: 2,
                }}
              >
                <Image
                  src="/img/blesk-logo.svg"
                  alt="Logo"
                  width={70}
                  height={24}
                />
              </Box>
            </Box>

            {/* User menu */}
            <Box
              sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
            >
              {/* Mobile version - icon only */}
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Tooltip title="Uživatelské menu">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <PersonOutline sx={{ color: "white.main" }} />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Desktop version - normal button */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  onClick={handleOpenUserMenu}
                  variant="contained"
                  sx={{
                    color: "white.contrastText",
                    backgroundColor: "white.main",
                    textTransform: "none",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 600,
                  }}
                >
                  Přihlásit se
                </Button>
              </Box>

              {/* Menu stays the same for both */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Grid
        size={12}
        direction="row"
        maxWidth="lg"
        sx={{
          position: "sticky",
          top: { xs: "56px", md: "64px" },
          zIndex: 1100,
          display: "flex",
          gap: "6px",
          marginLeft: "auto",
          marginRight: "auto",
          mt: { xs: 0, md: 10 },
          textAlign: "center",
          justifyContent: { xs: "flex-start", md: "center" },
          alignItems: "center",
          backgroundColor: "primary.main",
          py: "6px",
          width: "100%",
          flexWrap: "nowrap",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          minHeight: "50px",
          px: 2,
          boxSizing: "border-box",
        }}
      >
        {mainMenu.length > 1 &&
          mainMenu.map((category: string, index: number) => (
            <Chip
              component="a"
              href={category}
              key={index}
              label={category}
              clickable
              sx={{
                backgroundColor: "primary.main",
                color: "white.main",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 600,
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "6px",
                padding: "8px 12px",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
            />
          ))}
      </Grid>

      {/* Content wrapper */}
      <Box sx={{ flex: 1 }}>
        {" "}
        {/* Takes remaining space */}
        <Container sx={{ backgroundColor: "#fff", pt: 1 }} maxWidth="lg">
          {children}
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          mt: 4,
          py: 3,
          backgroundColor: "primary.main",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}
          >
            {footerLinks.map((link) => (
              <Typography key={link.title}>
                <a
                  href={link.href}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                  }}
                >
                  {link.title}
                </a>
              </Typography>
            ))}
          </Box>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Blesk.cz. Všechna práva vyhrazena.
          </Typography>
          <Typography variant="body2" color="inherit">
            Tento web používá cookies ke zlepšení uživatelského zážitku.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;

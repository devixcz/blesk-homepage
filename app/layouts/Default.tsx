import React, { ReactNode, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";

const pages = [
  "Celebrity",
  "Zprávy",
  "Politika",
  "Hráči",
  "Krimi",
  "Sport",
  "Fotbal",
  "Pro ženy",
  "Horoskopy",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
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
      setIsSticky(scrollTop > 100); // Trigger sticky navigation after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      {/* AppBar changes position dynamically */}
      <AppBar
        position={isSticky ? "fixed" : "static"} // Changes between static and fixed
        sx={{
          top: 0,
          zIndex: 1100,
          boxShadow: isSticky ? 3 : 0, // Adds shadow when sticky
          transition: "box-shadow 0.3s",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
              <Image
                src="/img/blesk-logo.svg"
                alt="Logo"
                width={100}
                height={40}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
              <Image
                src="/img/blesk-logo.svg"
                alt="Logo"
                width={80}
                height={32}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>
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

      {/* Add margin to avoid overlapping when sticky */}
      <Container
        sx={{ backgroundColor: "#fff", pt: 1, mt: { xs: 2, md: 10 } }}
        maxWidth="lg"
      >
        {children}
      </Container>

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

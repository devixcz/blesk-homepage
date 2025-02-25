"use client";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PersonOutline from "@mui/icons-material/PersonOutline";
import {
  Container,
  IconButton,
  Menu,
  Typography,
  MenuItem,
  Button,
  Tooltip,
  Box,
  Toolbar,
  AppBar,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const pages = ["Celebrity", "Zprávy", "Sport"];

const settings = ["Můj profil", "Odhlásit se"];

const MainBar = () => {
  const [anchorElSearch, setAnchorElSearch] =
    React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenSearchBar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSearch(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseSearchBar = () => {
    setAnchorElSearch(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        boxShadow: "none",
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
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
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
  );
};

export default MainBar;

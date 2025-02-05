"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

const socialLinks = ["Facebook", "Twitter", "Instagram", "YouTube"];

const TopBar = () => {
  const [anchorElSocial, setAnchorElSocial] =
    React.useState<null | HTMLElement>(null);

  const handleOpenSocialMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSocial(event.currentTarget);
  };

  const handleCloseSocialMenu = () => {
    setAnchorElSocial(null);
  };

  return (
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
  );
};

export default TopBar;

import { Box, Container, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";

const topArticles = [
  "Blesk Tlapky",
  "Festival ABC",
  "F.O.O.D piknik",
  "Hráči na Blesku",
  "Atentát na Roberta Fica",
  "Zemřel Vlastimil Harapes",
];

const categoryArticles = [
  {
    title: "Významné dny",
    items: ["Masopust 2024", "Státní svátky v roce 2024", "Školní prázdniny"],
  },
  {
    title: "Header",
    items: ["MS v hokeji 2024", "EURO 2024", "LOH 2024"],
  },
  {
    title: "Politika",
    items: ["Válka na Ukrajině", "Kdy budou volby", "Eurovolby 2024"],
  },
  {
    title: "Festivaly",
    items: [
      "Colours of Ostrava 2024",
      "Brutal Assault 2024",
      "Rock for People 2024",
    ],
  },
  {
    title: "Technologie",
    items: ["ChatGPT", "Midjourney", "Jak stáhnout video z Youtube"],
  },
];

const footerMainLinks = [
  "Kontakty",
  "Redakce",
  "Inzerce",
  "Předplatné",
  "RSS",
  "Kariéra",
];

const footerLegalLinks = [
  "Autorská práva k publikovaným materiálům",
  "Podmínky pro užívání služby informační společnosti",
  "Informace o zpracování osobních údajů",
  "Cookies",
  "Nastavení soukromí",
  "Vlastnická struktura",
  "Jednotné kontaktní místo / Single Point of Contact",
];

const socialIcons = [
  { name: "Facebook", icon: "/img/icons/facebook.svg" },
  { name: "Instagram", icon: "/img/icons/instagram.svg" },
  { name: "YouTube", icon: "/img/icons/youtube.svg" },
  { name: "X", icon: "/img/icons/x.svg" },
  { name: "TikTok", icon: "/img/icons/tiktok.svg" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        pt: 4,
        pb: 4,
        backgroundColor: "white.main",
        color: "text.primary",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", gap: 6 }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: 2,
          }}
        >
          <Image
            src="/img/logo_footer.svg"
            alt="Blesk Logo"
            width={70}
            height={24}
          />
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              gap: 1,
              alignItems: "center",
              pl: 3,
            }}
          >
            {/* Social Icons */}
            {socialIcons.map(({ name, icon }) => (
              <IconButton key={name} aria-label={name}>
                <Image src={icon} alt={name} width={16} height={16} />
              </IconButton>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Image
              src="/img/google-play.png"
              alt="Google Play"
              width={128}
              height={40}
            />
            <Image
              src="/img/app-store.png"
              alt="App Store"
              width={128}
              height={40}
            />
          </Box>
        </Box>

        {/* Top Articles Section */}
        <Box>
          <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Nejvíce vás zajímá:
            </Typography>
            {topArticles.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={item}>
                <Link
                  href="#"
                  style={{ color: "text.primary", textDecoration: "none" }}
                >
                  <Typography variant="body2">{item}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Categories Section */}
        <Grid container spacing={4} sx={{ justifyContent: "flex-start" }}>
          {categoryArticles.map((category) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={category.title}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
                {category.title}
              </Typography>
              {category.items.map((item) => (
                <Link
                  key={item}
                  href="#"
                  style={{
                    display: "block",
                    color: "text.secondary",
                    textDecoration: "none",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Typography variant="body2">{item}</Typography>
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>

        {/* Links Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          {footerMainLinks.map((link) => (
            <Link
              key={link}
              href="#"
              style={{
                color: "text.primary",
                textDecoration: "none",
              }}
            >
              <Typography variant="body2">{link}</Typography>
            </Link>
          ))}
        </Box>

        {/* Legal Section */}
        <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
          {footerLegalLinks.map((link) => (
            <Link
              key={link}
              href="#"
              style={{
                color: "text.secondary",
                textDecoration: "none",
              }}
            >
              <Typography variant="body2">{link}</Typography>
            </Link>
          ))}
        </Grid>

        {/* Copyright */}
        <Typography
          variant="caption"
          style={{
            display: "block",
            color: "text.secondary",
          }}
        >
          © {new Date().getFullYear()} Copyright CZECH NEWS CENTER a.s. a
          dodavatelé obsahu.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

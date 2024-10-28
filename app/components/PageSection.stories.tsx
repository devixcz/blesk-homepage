import React from "react";
import { Meta, Story } from "@storybook/react";
import PageSection, { PageSectionProps } from "@components/PageSection";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import theme from "@/app/theme";

const initialBannerData = {
  title: "Kousnul mě, tvrdí Dopita!",
  overline: "Rvačka Soukupa s manželem Hanychové:",
  href: "https://www.blesk.cz",
  image: "/img/banners/full.png",
};

export default {
  title: "Components/PageSection",
  component: PageSection,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ overflow: "hidden", width: "1024px" }}>
          <Story />
        </Container>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<PageSectionProps> = (args) => <PageSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Celebrity",
  subCategories: [
    { title: "Karel Gott", slug: "karel-gott" },
    { title: "Kateřina Jacques", slug: "katerina-jacques" },
    { title: "Lucie Bílá", slug: "lucie-bila" },
    { title: "Karel Gott", slug: "karel-gott" },
    { title: "Kateřina Jacques", slug: "katerina-jacques" },
    { title: "Lucie Bílá", slug: "lucie-bila" },
  ],
  content: [
    {
      direction: "column",
      items: [
        { variant: "rectangle-horizontal-third", content: initialBannerData },
        { variant: "rectangle-horizontal-third", content: initialBannerData },
        { variant: "rectangle-horizontal-third", content: initialBannerData },
      ],
    },
    {
      direction: "column",
      items: [{ variant: "square-two-thirds", content: initialBannerData }],
    },
  ],
};

export const SpecialTopic = Template.bind({});

const themeOptions = {
  backgroundImage: "/img/ukraine.jpg", // Obrázek pozadí
  palette: {
    primary: {
      main: "#d1b200", // Modrá barva ukrajinské vlajky
      contrastText: "#FFFFFF", // Bílý text pro kontrast
    },
    secondary: {
      main: "#d1b200", // Žlutá barva ukrajinské vlajky
      contrastText: "#d1b200", // Černý text pro kontrast
    },
    background: {
      default: "#0057B7", // Světlé pozadí
      paper: "#F2F2F2", // Mírně šedé pozadí pro papírové prvky
    },
    text: {
      primary: "#F2F2F2", // Černá pro hlavní text
      secondary: "#d1b200", // Modrá pro sekundární text
    },
  },
  typography: {
    heading: { color: "#F2F2F2" },
    h1: { color: "#F2F2F2" },
    h2: { color: "#F2F2F2" },
    h3: { color: "#F2F2F2" },
    overline: { color: "#d1b200" },
    button: { textTransform: "none" }, // Tlačítka bez velkých písmen
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Mírně zaoblené rohy
          fontWeight: "bold",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0057B7", // Modré AppBar pozadí
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#0057B7",
          "&:hover": {
            color: "#FFD700", // Žlutá barva na hover
          },
        },
      },
    },
  },
};

SpecialTopic.args = {
  title: "Ukrajina",
  subCategories: [{ title: "Volodymyr Zelensky", slug: "karel-gott" }],
  themeOverrides: themeOptions,
  content: [
    {
      direction: "column",
      items: [
        { variant: "rectangle-horizontal-third", content: initialBannerData },
        { variant: "rectangle-horizontal-third", content: initialBannerData },
        { variant: "rectangle-horizontal-third", content: initialBannerData },
      ],
    },
    {
      direction: "column",
      items: [{ variant: "square-two-thirds", content: initialBannerData }],
    },
  ],
};

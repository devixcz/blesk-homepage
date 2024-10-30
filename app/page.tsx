"use client";

import PageSection, { PageSectionProps } from "@components/PageSection";
import Layout from "./layouts/Default";
import { ArticlesProvider, Article } from "@contexts/ArticlesContext";

const pageSectionSimple: PageSectionProps = {
  contentStructure: [
    {
      direction: "column",
      items: [
        {
          variant: "rectangle-horizontal-full",
          voter: (articles: Article[]) =>
            articles.find((a) => a.top == 0) || articles[0], // Custom voter example
        },
      ],
    },
    {
      direction: "row",
      items: [
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-horizontal-third" },
      ],
    },
  ],
};

const pageSectionTopic: PageSectionProps = {
  filterFunction: (articles: Article[]) =>
    articles.filter((a) => a.href.includes("celebrity")),
  header: {
    title: "Celebrity",
    subCategories: [
      { title: "Karel Gott", slug: "karel-gott" },
      { title: "Kateřina Jacques", slug: "katerina-jacques" },
      { title: "Lucie Bílá", slug: "lucie-bila" },
      { title: "Pepa Zdepa", slug: "karel-gott" },
      { title: "Pavel Novotný", slug: "katerina-jacques" },
      { title: "Helena Vondráčková", slug: "lucie-bila" },
    ],
  },
  contentStructure: [
    {
      direction: "column",
      items: [
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-horizontal-third" },
      ],
    },
    {
      direction: "column",
      items: [{ variant: "square-two-thirds" }],
    },
    {
      direction: "row",
      items: [
        { variant: "rectangle-vertical-third" },
        { variant: "rectangle-vertical-third" },
        { variant: "rectangle-vertical-third" },
      ],
    },
  ],
};

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

const pageSectionSpecialTopic: PageSectionProps = {
  filterFunction: (articles: Article[]) =>
    articles.filter((a) => a.href.includes("zpravy-valka-na-ukrajine")),
  header: {
    title: "Ukrajina",
    subCategories: [{ title: "Volodymyr Zelensky", slug: "karel-gott" }],
  },
  themeOverrides: themeOptions,
  contentStructure: [
    {
      direction: "row",
      items: [
        {
          variant: "rectangle-horizontal-third",
          voter: (articles: Article[]) => articles[0],
        },
        {
          variant: "rectangle-horizontal-third",
          voter: (articles: Article[]) => articles[1],
        },
        {
          variant: "rectangle-horizontal-third",
          voter: (articles: Article[]) => articles[2],
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <ArticlesProvider>
      <Layout>
        <PageSection {...pageSectionSimple} />
        <PageSection {...pageSectionTopic} />
        <PageSection {...pageSectionSpecialTopic} />
      </Layout>
    </ArticlesProvider>
  );
}

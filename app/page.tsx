"use client";

import PageSection, { PageSectionProps } from "@components/PageSection";
import { ArticlesProvider, Article } from "@contexts/ArticlesContext";

import Layout from "./layouts/Default";

const pageSectionSimple: PageSectionProps = {
  filterFunction: (articles: Article[]) => articles.filter((a) => a.top == 0),
  contentStructure: [
    {
      direction: "column",
      items: [
        {
          variant: "rectangle-horizontal-full",
          voter: (articles: Article[]) => articles[0],
        },
      ],
    },
    {
      direction: "row",
      items: [
        {
          variant: "rectangle-horizontal-third",
          voter: (articles: Article[]) => articles[1],
        },
        {
          variant: "rectangle-horizontal-third",
          voter: (articles: Article[]) => articles[2],
        },
        {
          variant: "rectangle-horizontal-third",
          voter: (articles: Article[]) => articles[3],
        },
      ],
    },
    {
      direction: "row",
      items: [
        {
          variant: "rectangle-horizontal-half",
          voter: (articles: Article[]) => articles[4],
        },
        {
          variant: "rectangle-horizontal-half",
          voter: (articles: Article[]) => articles[5],
        },
      ],
    },
  ],
};

const pageSectionTopic: PageSectionProps = {
  filterFunction: (articles: Article[]) =>
    articles.filter((a) => a.href.includes("celebrity")),
  header: {
    title: "Celebrity",
  },
  contentStructure: [
    {
      direction: "column",
      items: [
        {
          variant: "rectangle-horizontal-third",
          voter: (articles: Article[]) => articles[1],
        },
        {
          variant: "rectangle-horizontal-third",
          voter: (articles: Article[]) => articles[2],
        },
        {
          variant: "rectangle-horizontal-third",
          voter: (articles: Article[]) => articles[3],
        },
      ],
    },
    {
      direction: "column",
      items: [
        {
          variant: "square-two-thirds",
          voter: (articles: Article[]) => articles[0],
        },
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
    h1: {
      color: "#F2F2F2",
      fontWeight: 500,
      fontSize: 90,
      "@media (max-width: 900px)": {
        fontSize: 60,
      },
    },
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

const pageSectionZpravy: PageSectionProps = {
  filterFunction: (articles: Article[]) =>
    articles.filter((a) => a.href.includes("zpravy")),
  header: {
    title: "Zprávy",
  },
  contentStructure: [
    {
      direction: "row",
      items: [
        {
          variant: "article-preview-third",
          voter: (articles: Article[]) => articles[0],
        },
        {
          variant: "article-preview-third",
          voter: (articles: Article[]) => articles[1],
        },
        {
          variant: "article-preview-third",
          voter: (articles: Article[]) => articles[2],
        },
      ],
    },
  ],
};

const pageSectionRegiony: PageSectionProps = {
  filterFunction: (articles: Article[]) =>
    articles.filter((a) => a.href.includes("regiony")),
  header: {
    title: "Regiony",
  },
  contentStructure: [
    {
      direction: "row",
      items: [
        {
          variant: "rectangle-horizontal-half",
          voter: (articles: Article[]) => articles[0],
        },
        {
          variant: "rectangle-horizontal-half",
          voter: (articles: Article[]) => articles[1],
        },
      ],
    },
    {
      direction: "row",
      items: [
        {
          variant: "rectangle-horizontal-half",
          voter: (articles: Article[]) => articles[2],
        },
        {
          variant: "rectangle-horizontal-half",
          voter: (articles: Article[]) => articles[3],
        },
      ],
    },
  ],
};

const pageSectionSpecialTopic: PageSectionProps = {
  filterFunction: (articles: Article[]) =>
    articles.filter((a) => a.href.includes("zpravy-valka-na-ukrajine")),
  header: {
    title: "Válka na Ukrajině",
    variant: "h1",
  },
  themeOverrides: themeOptions,
  contentStructure: [
    {
      direction: "column",
      items: [
        {
          variant: "rectangle-horizontal-two-thirds",
          voter: (articles: Article[]) => articles[0],
        },
      ],
    },
    {
      direction: "column",
      items: [
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
    <ArticlesProvider apiUrl="/api/rss">
      <Layout>
        <PageSection {...pageSectionSimple} />
        <PageSection {...pageSectionTopic} />
        <PageSection {...pageSectionZpravy} />
        <PageSection {...pageSectionRegiony} />
        <PageSection {...pageSectionSpecialTopic} />
      </Layout>
    </ArticlesProvider>
  );
}

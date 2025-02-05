import React from "react";
import { Grid2 as Grid, Typography, Chip } from "@mui/material";
import { usePageSection } from "@contexts/PageSectionContext";

export interface SubCategory {
  title: string;
  slug: string;
}

export interface HeadingProps {
  title: string;
  categories?: SubCategory[];
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
const extractSlug = (url: string) => {
  const parts = url.split("/");
  return parts[4] || "";
};

const Heading = ({ title, categories = [], variant = "h1" }: HeadingProps) => {
  const { articles, isLoading, error } = usePageSection();

  if (categories.length === 0) {
    if (!isLoading && !error) {
      const uniqueCategoriesMap = articles.reduce(
        (acc: { [key: string]: SubCategory }, article) => {
          const title = article.section as string;
          if (!acc[title]) {
            acc[title] = {
              title,
              slug: extractSlug(article.href),
            };
          }
          return acc;
        },
        {}
      );

      // Převod objektu zpět na pole unikátních kategorií
      categories = Object.values(uniqueCategoriesMap);
    }
  }

  return (
    <>
      <Grid
        size={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          pt: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
          variant={variant}
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        size={12}
        direction="row"
        sx={{
          position: "sticky",
          top: { xs: "106px", md: "114px" },
          zIndex: 1000,
          backgroundColor: "white.main",
          py: 1,
          width: "100%",
          display: "flex",
          gap: "6px",
          flexWrap: "nowrap",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
          px: 0,
          justifyContent: {
            xs: "flex-start",
            md: "center",
          },
          WebkitOverflowScrolling: "touch",
        }}
      >
        {categories.length > 1 &&
          categories.map((category: SubCategory, index: number) => (
            <Chip
              component="a"
              href={category.slug}
              key={index}
              label={category.title}
              clickable
              sx={{
                backgroundColor: "white.main",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 600,
                border: "1px solid #E4E4E7",
                borderRadius: "6px",
                padding: "8px 12px",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
            />
          ))}
      </Grid>
    </>
  );
};

export default Heading;

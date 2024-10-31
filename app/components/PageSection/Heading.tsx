import React from "react";
import { Grid2 as Grid, Typography, Chip } from "@mui/material";
import { usePageSection } from "@contexts/PageSectionContext";

export interface SubCategory {
  title: string;
  slug: string;
}

interface HeadingProps {
  title: string;
  categories?: SubCategory[];
}
const extractSlug = (url: string) => {
  const parts = url.split("/");
  return parts[4] || "";
};

const Heading = ({ title, categories = [] }: HeadingProps) => {
  const { articles, isLoading, error } = usePageSection();

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

  return (
    <Grid size={12} container>
      <Grid
        size={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 60, md: 140 },
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 1000,
          }}
          variant="h1"
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        size={12}
        direction="row"
        spacing={1}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {categories.length > 1 &&
          categories.map((category: SubCategory, index: number) => (
            <Chip
              color="primary"
              component="a"
              href={category.slug}
              key={index}
              label={category.title}
              clickable
            />
          ))}
      </Grid>
    </Grid>
  );
};

export default Heading;

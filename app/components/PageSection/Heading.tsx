import React from "react";
import { Grid2 as Grid, Typography, Chip, Stack } from "@mui/material";

export interface SubCategory {
  title: string;
  slug: string;
}

interface HeadingProps {
  title: string;
  categories?: SubCategory[];
}

const Heading = ({ title, categories = [] }: HeadingProps) => (
  <Grid container>
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
      {categories.map((category: SubCategory, index: number) => (
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

export default Heading;

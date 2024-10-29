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
      }}
    >
      <Typography variant="heading">{title}</Typography>
    </Grid>
    <Grid size={12}>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        {categories.map((categories: SubCategory, index: number) => (
          <Chip color="primary" key={index} label={categories.title} />
        ))}
      </Stack>
    </Grid>
  </Grid>
);

export default Heading;

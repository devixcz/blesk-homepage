import React from "react";
import { Grid2 as Grid } from "@mui/material";
import BannerGrid from "@components/BannerGrid";
import Heading from "./PageSection/Heading";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import _ from "lodash";

export interface PageSectionProps {
  title: string;
  subCategories?: any[];
  content: any[];
  themeOverrides?: any;
}

const PageSection: React.FC<PageSectionProps> = ({
  title,
  content,
  subCategories,
  themeOverrides = {},
}) => {
  const mainTheme = useTheme(); // Získání hlavního theme z nadřazené komponenty

  const mergedTheme = createTheme(_.merge({}, mainTheme, themeOverrides));

  return (
    <ThemeProvider theme={mergedTheme}>
      <Grid
        container
        spacing={4}
        sx={{
          width: "100%",
          justifyContent: "space-between",
          backgroundColor: "background.default",
          backgroundImage: themeOverrides?.backgroundImage
            ? `url(${themeOverrides?.backgroundImage})`
            : "none",
        }}
      >
        <Heading title={title} categories={subCategories} />
        <BannerGrid content={content} />
      </Grid>
    </ThemeProvider>
  );
};

export default PageSection;

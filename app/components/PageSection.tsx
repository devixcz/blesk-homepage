// PageSection.tsx

"use client";

import React from "react";
import { Grid2 as Grid } from "@mui/material";
import BannerGrid from "@components/BannerGrid";
import Heading, { SubCategory } from "./PageSection/Heading";
import { Article } from "@contexts/ArticlesContext";
import {
  createTheme,
  ThemeProvider,
  useTheme,
  ThemeOptions,
} from "@mui/material/styles";
import { PageSectionProvider } from "@contexts/PageSectionContext"; // Import kontextu
import _ from "lodash";

export interface PageSectionHeader {
  title: string;
  subCategories?: SubCategory[];
}

export interface PageSectionProps {
  header?: PageSectionHeader;
  contentStructure: [];
  themeOverrides?: ThemeOptions & PageSectionThemeOverrides;
  filterFunction?: (articles: Article[]) => Article[];
}

export interface PageSectionThemeOverrides {
  backgroundColor?: string;
  backgroundImage?: string;
}

const PageSection: React.FC<PageSectionProps> = ({
  header,
  contentStructure,
  themeOverrides = {},
  filterFunction,
}) => {
  const mainTheme = useTheme();
  const mergedTheme = createTheme(_.merge({}, mainTheme, themeOverrides));

  return (
    <ThemeProvider theme={mergedTheme}>
      <PageSectionProvider filterFunction={filterFunction}>
        <Grid
          container
          spacing={4}
          size={12}
          sx={{
            mt: 2,
            pb: 4,
            mb: 12,
            overflow: "scroll",
            justifyContent: "space-between",
            backgroundColor: themeOverrides?.backgroundColor,
            backgroundImage: themeOverrides?.backgroundImage
              ? `url(${themeOverrides?.backgroundImage})`
              : "none",
          }}
        >
          {header && (
            <Heading title={header.title} categories={header.subCategories} />
          )}
          <BannerGrid contentStructure={contentStructure} />
        </Grid>
      </PageSectionProvider>
    </ThemeProvider>
  );
};

export default PageSection;

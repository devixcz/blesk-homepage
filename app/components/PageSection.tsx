"use client";

import React from "react";
import { Grid2 as Grid } from "@mui/material";
import BannerGrid from "@components/BannerGrid";
import Heading, { SubCategory } from "./PageSection/Heading";
import {
  createTheme,
  ThemeProvider,
  useTheme,
  ThemeOptions,
} from "@mui/material/styles";
import _ from "lodash";

export interface PageSectionHeader {
  title: string;
  subCategories?: SubCategory[];
}

export interface PageSectionProps {
  header?: PageSectionHeader;
  contentStructure: [];
  themeOverrides?: ThemeOptions & PageSectionThemeOverrides;
}

export interface PageSectionThemeOverrides {
  backgroundColor?: string;
  backgroundImage?: string;
}

const PageSection: React.FC<PageSectionProps> = ({
  header,
  contentStructure,
  themeOverrides = {},
}) => {
  const mainTheme = useTheme();

  const mergedTheme = createTheme(_.merge({}, mainTheme, themeOverrides));

  return (
    <ThemeProvider theme={mergedTheme}>
      <Grid
        container
        spacing={4}
        size={12}
        sx={{
          mt: 6,
          overflow: "scroll",
          justifyContent: "space-between",
          backgroundColor: themeOverrides?.backgroundColor
            ? themeOverrides?.backgroundImage
            : "background.default",
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
    </ThemeProvider>
  );
};

export default PageSection;

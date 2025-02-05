// PageSection.tsx

"use client";

import React from "react";
import { Grid2 as Grid } from "@mui/material";
import BannerGrid from "@components/BannerGrid";
import Heading, { HeadingProps } from "./PageSection/Heading";
import { Article } from "@contexts/ArticlesContext";
import { BannerStackProps } from "@components/BannerGrid/BannerStack";
import {
  createTheme,
  ThemeProvider,
  useTheme,
  ThemeOptions,
} from "@mui/material/styles";
import { PageSectionProvider } from "@contexts/PageSectionContext"; // Import kontextu
import _ from "lodash";

export interface PageSectionProps {
  header?: HeadingProps;
  contentStructure: BannerStackProps[];
  themeOverrides?: ThemeOptions & PageSectionThemeOverrides;
  filterFunction?: (articles: Article[]) => Article[];
}

export interface PageSectionThemeOverrides {
  backgroundColor?: string;
  backgroundImage?: string;
}

/**
 * # PageSection Component
 *
 * The `PageSection` component organizes content sections within a page layout. It features
 * a configurable header and grid layout for banners, as well as theme and filter customizations.
 * Wrapped in `PageSectionProvider`, it provides filtered articles to the section's content.
 *
 * ## Core Functionality:
 * - **Filter Function**: Allows for customizable filtering of articles displayed within the section.
 * - **Theming Options**: Supports theme overrides, enabling special styling for thematic sections.
 * - **Optional Header**: Allows for sections with or without headers.
 *
 * ## Key Props:
 * - **header**: Configures the section header, including title and categories.
 * - **contentStructure**: Defines the layout and structure of the section's banners.
 * - **themeOverrides**: Enables customized styles, like background images and colors, specific to this section.
 * - **filterFunction**: Allows selection of specific articles based on custom filter logic.
 *
 * ## Usage Examples:
 * - **Filter Function**: Demonstrates the ability to filter articles by specific criteria.
 * - **Themed Section**: Shows a custom themed section with a background image and special colors.
 * - **No Header Section**: Demonstrates a section layout without a header, useful for more streamlined pages.
 */
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
            position: "relative",
            overflow: "visible",
            justifyContent: "space-between",
            backgroundColor: themeOverrides?.backgroundColor,
            backgroundImage: themeOverrides?.backgroundImage
              ? `url(${themeOverrides?.backgroundImage})`
              : "none",
          }}
        >
          {header && <Heading {...header} />}
          <BannerGrid contentStructure={contentStructure} />
        </Grid>
      </PageSectionProvider>
    </ThemeProvider>
  );
};

export default PageSection;

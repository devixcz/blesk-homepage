import { Grid2 as Grid } from "@mui/material";
import React from "react";

import BannerStack, {
  BannerStackProps,
} from "@components/BannerGrid/BannerStack";

export interface BannerGridProps {
  contentStructure: BannerStackProps[];
}

/**
 * # BannerGrid Component
 *
 * The `BannerGrid` component is designed to arrange a structured grid of banners using nested `BannerStack` components.
 * It accepts a `contentStructure` prop that defines the layout of each `BannerStack` within the grid, providing flexibility
 * for various banner configurations and layouts.
 *
 * ## Core Functionality:
 * - **Grid Layout**: Uses MUI's `Grid` component to display multiple `BannerStack` instances within a flexible grid.
 * - **Context-Driven**: Each `BannerStack` and its children (`BannerPosition`) pulls data from `PageSectionContext`,
 *   which is nested within `ArticlesContext`.
 * - **Content Structure**: The `contentStructure` prop allows for a flexible setup of different `BannerStack` configurations
 *   in the grid, with each stack independently defining its layout and direction.
 *
 * ## Key Props:
 * - **contentStructure**: Array of `BannerStackProps` configurations, each defining a `BannerStack` instance in the grid.
 *
 * ## Usage Examples:
 * - **Single Row with Multiple Stacks**: Showcases a horizontal grid layout with multiple stacks in a single row.
 * - **Multi-Row Layout**: Demonstrates a grid layout with stacks arranged in multiple rows.
 * - **Scrollable Row Layout**: Displays a single scrollable row of banners, ideal for mobile or limited-width displays.
 *
 * `BannerGrid` provides a robust layout solution for showcasing multiple banners in organized rows and columns.
 */
export default function BannerGrid({ contentStructure }: BannerGridProps) {
  return (
    <Grid
      spacing={2}
      size={12}
      container
      sx={{ justifyContent: "space-between" }}
    >
      {contentStructure.map((stack, index) => (
        <BannerStack key={index} {...stack} />
      ))}
    </Grid>
  );
}

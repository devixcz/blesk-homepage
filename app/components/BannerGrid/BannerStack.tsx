import { Grid2 as Grid } from "@mui/material";
import React from "react";

import BannerPosition, { BannerPositionProps } from "./BannerPosition";

export interface BannerStackProps {
  direction?: "row" | "column";
  items: BannerPositionProps[];
}

/**
 * # BannerStack Component
 *
 * The `BannerStack` component is a flexible container for displaying a series of `BannerPosition` components
 * in either a row or column layout. It uses `BannerPosition` to display individual banners based on props, and
 * adapts to different layouts and screen sizes.
 *
 * ## Core Functionality:
 * - **Direction Control**: The `direction` prop allows you to set the stack orientation (`row` or `column`).
 * - **Context-Driven**: Each `BannerPosition` within the `BannerStack` pulls data from `PageSectionContext`, itself nested within `ArticlesContext`.
 * - **Item Propagation**: The `items` prop passes a list of configurations for each `BannerPosition`, enabling varied content and layouts within the stack.
 *
 * ## Key Props:
 * - **direction**: Controls layout orientation (`row` for horizontal stacking, `column` for vertical).
 * - **items**: An array of `BannerPositionProps` defining each banner’s configuration.
 *
 * ## Usage Examples:
 * - **Row Layout**: Demonstrates a horizontally scrolling `BannerStack`.
 * - **Column Layout**: Displays banners in a vertical stack for a mobile-friendly layout.
 *
 * The `BannerStack` component provides flexibility for creating organized layouts of multiple banners, suitable for various page sections and content displays.
 */
export default function BannerStack({
  direction = "row",
  items,
}: BannerStackProps) {
  // Výchozí hodnota pro direction
  return (
    <Grid
      container
      direction={direction}
      spacing={{ xs: 1, md: 2 }}
      size={{ xs: 12, md: "auto" }}
      sx={{ justifyContent: "space-between" }}
    >
      {items.map((item, index) => (
        <BannerPosition key={index} {...item} />
      ))}
    </Grid>
  );
}

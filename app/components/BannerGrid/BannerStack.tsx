import React from "react";
import { Grid2 as Grid } from "@mui/material";
import BannerPosition, { BannerPositionProps } from "./BannerPosition";

export interface BannerStackProps {
  direction?: "row" | "column";
  items: BannerPositionProps[];
}

export default function BannerStack({
  direction = "row",
  items,
}: BannerStackProps) {
  // Výchozí hodnota pro direction
  return (
    <Grid
      container
      direction={direction}
      spacing={4}
      sx={{ justifyContent: "space-between" }}
    >
      {items.map((item, index) => (
        <BannerPosition key={index} {...item} />
      ))}
    </Grid>
  );
}

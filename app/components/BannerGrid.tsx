import React from "react";
import { Grid2 as Grid } from "@mui/material";
import BannerStack, {
  BannerStackProps,
} from "@components/BannerGrid/BannerStack";

export interface BannerGridProps {
  contentStructure: BannerStackProps[];
}

export default function BannerGrid({ contentStructure }: BannerGridProps) {
  return (
    <Grid
      spacing={4}
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

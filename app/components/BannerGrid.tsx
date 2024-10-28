import React from "react";
import { Grid2 as Grid } from "@mui/material";
import BannerStack, {
  BannerStackProps,
} from "@components/BannerGrid/BannerStack";

export interface BannerGridProps {
  content: BannerStackProps[];
}

export default function BannerGrid({ content }: BannerGridProps) {
  return (
    <Grid
      spacing={4}
      container
      sx={{ width: "100%", justifyContent: "space-between" }}
    >
      {content.map((stack, index) => (
        <BannerStack key={index} {...stack} />
      ))}
    </Grid>
  );
}

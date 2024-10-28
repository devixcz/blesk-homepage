import React from "react";
import { Grid2 as Grid, Typography, Chip, Stack } from "@mui/material";
import BannerGrid from "@components/BannerGrid";
import Heading from "./PageSection/Heading";

interface PageSectionProps {
  title: string;
  subCategories?: any[];
  gridSetup: any;
}

const PageSection: React.FC<PageSectionProps> = ({
  title,
  gridSetup,
  subCategories,
}) => (
  <Grid
    container
    spacing={4}
    sx={{ width: "100%", justifyContent: "space-between" }}
  >
    <Heading title={title} categories={subCategories} />
    <BannerGrid
      bannerStacks={[
        {
          direction: "column",
          items: [
            { variant: "rectangle-horizontal-third" },
            { variant: "rectangle-horizontal-third" },
            { variant: "rectangle-horizontal-third" },
          ],
        },
        {
          direction: "column",
          items: [{ variant: "square-two-thirds" }],
        },
      ]}
    />
  </Grid>
);

PageSection.displayName = "PageSection";

export default PageSection;

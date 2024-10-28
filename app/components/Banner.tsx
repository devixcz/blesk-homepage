import React from "react";
import { Grid2 as Grid, Typography } from "@mui/material";
import Link from "next/link";
import { BannerProps } from "./Banner/Types";
import { BannerVariants } from "./Banner/Variants";
import {
  calculateHeightPercent,
  isBannerAdaptiveImages,
} from "./Banner/helpers";

const Banner = ({
  variant,
  content: { title, href, overline, image },
  textAlign = "left",
}: BannerProps) => {
  const dimensions = BannerVariants[variant];

  if (isBannerAdaptiveImages(image)) {
    image = image[variant] || image.default;
  }

  return (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <Grid
        container
        sx={{
          width: { xs: "100%", md: dimensions.width },
          height: {
            xs: calculateHeightPercent(dimensions.width, dimensions.height),
            md: dimensions.height,
          },
          backgroundImage: `url(${
            typeof image === "string" ? image : image.src
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "primary.contrastText",
          textAlign: textAlign,
          alignItems: "flex-end",
          p: 1,
          cursor: "pointer",
          "&:hover": { opacity: 0.95 },
        }}
      >
        <Grid
          sx={{ backgroundColor: "blue", maxWidth: "72%", maxHeight: "46%" }}
        >
          {overline && (
            <Typography
              variant="caption"
              sx={{
                backgroundColor: "primary.main",
                fontWeight: 900,
                fontSize: dimensions.typography.overline,
              }}
            >
              {overline}
            </Typography>
          )}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              textShadow: "0px 2px 4px #0F171F33",
              fontSize: dimensions.typography.title,
            }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};

export default Banner;

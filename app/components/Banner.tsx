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
            md: dimensions.height,
            xs: dimensions.height,
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
          sx={{
            maxWidth: { xs: "100%", md: dimensions.textZone.width },
            maxHeight: { xs: "100%", md: dimensions.textZone.height },
          }}
        >
          {overline && (
            <Typography
              variant="caption"
              sx={{
                backgroundColor: "primary.main",
                padding: 0.5,
                fontWeight: 900,
                fontSize: dimensions.typography.overline,
              }}
            >
              {overline}
            </Typography>
          )}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              textShadow: "0px 2px 4px #0F171F33",
              fontSize: dimensions.typography.title,
              overflow: "hidden", // Skryje přetékající text
              display: "-webkit-box", // Podporuje víceřádkový ořez
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3, // Počet řádků, které se zobrazí (zde 2)
              textOverflow: "ellipsis", // Přidá "..." na konci přetékajícího textu
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

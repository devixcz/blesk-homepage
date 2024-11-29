import React from "react";
import { Grid2 as Grid, Typography, Box } from "@mui/material";
import Link from "next/link";
import { BannerProps } from "../Types";
import { BannerVariants } from "../Variants";
import { isBannerAdaptiveImages } from "../helpers";
import Image from "next/image";

const ArticlePreviewThirdBanner = ({
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
      <Grid container>
        <Grid size={12}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "56.25%",
            }}
          >
            <Image
              src={image.src}
              layout="fill"
              objectFit="cover"
              alt={title}
            />
          </Box>
        </Grid>
        <Grid size={12}>
          <Typography
            sx={{
              color: "#60606C",
              fontSize: 16,
              fontWeight: "bold",
              lineHeight: 2,
              textWrap: "nowrap",
            }}
            variant="caption"
          >
            {overline}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography
            sx={{
              color: "#18181B",
              fontSize: 20,
              fontWeight: 900,
              lineHeight: 1.3,
            }}
            variant="h3"
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};

export default ArticlePreviewThirdBanner;

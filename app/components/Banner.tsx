import React from "react";
import { Grid2 as Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BannerProps } from "./Banner/Types";
import { BannerVariants } from "./Banner/Variants";
import { isBannerAdaptiveImages } from "./Banner/helpers";

const Banner = ({
  variant,
  content: { title, href, overline, image },
  textAlign = "left",
}: BannerProps) => {
  const dimensions = BannerVariants[variant];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (isBannerAdaptiveImages(image)) {
    image = image[variant] || image.default;
  }

  return (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <Grid
        ref={ref}
        container
        sx={{
          width: dimensions.width,
          height: dimensions.height,
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
          opacity: inView ? 1 : 0, // Nastavení opacity pro fade-in efekt
          transition: "opacity 1s ease-in-out", // Plynulý přechod opacity
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
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              textOverflow: "ellipsis",
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

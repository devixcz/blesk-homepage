import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography, Box, useMediaQuery, Theme } from "@mui/material";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BannerProps } from "../Types";
import { BannerVariants } from "../Variants";
import { isBannerAdaptiveImages } from "../helpers";

const DefaultBanner = ({
  variant,
  content: { title, href, overline, image },
  textAlign = "left",
}: BannerProps) => {
  const dimensions = BannerVariants[variant];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(dimensions.typography.title);

  // Check if screen size is md or larger
  const isMdOrLarger = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );

  useEffect(() => {
    if (!isMdOrLarger) return; // Skip adjustment if screen size is smaller than md

    const adjustFontSize = () => {
      const element = titleRef.current;
      if (element) {
        const computedStyle = getComputedStyle(element);
        const lineHeight = parseFloat(computedStyle.lineHeight);
        const currentFontSize = parseFloat(computedStyle.fontSize);
        const actualLines = Math.ceil(element.scrollHeight / lineHeight);
        if (actualLines < 3) return;

        const linesToUse = Math.min(
          actualLines,
          dimensions.typography.maxLinesCount
        );

        const newFontSize = (currentFontSize * 2) / linesToUse;
        setFontSize(`${newFontSize}px`);
      }
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
    return () => window.removeEventListener("resize", adjustFontSize);
  }, [isMdOrLarger, dimensions.typography.maxLinesCount]);

  if (isBannerAdaptiveImages(image)) {
    image = image[variant] || image.default;
  }

  return (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <Grid
        ref={ref}
        container
        sx={{
          border:
            "1px solid var(--border-avatar-default, rgba(15, 23, 31, 0.05));",
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
          cursor: "pointer",
          opacity: inView ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          "&:hover": { opacity: 0.95 },
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(180deg, rgba(15, 23, 31, 0.00) 0%, rgba(15, 23, 31, 0.80) 100%);",
            width: "100%",
          }}
        >
          <Grid
            sx={{
              maxWidth: { xs: "100%", md: dimensions.textZone.width },
              maxHeight: { xs: "100%", md: dimensions.textZone.height },
              p: 1.5,
            }}
          >
            {overline && (
              <Typography
                variant="caption"
                sx={{
                  backgroundColor: "primary.main",
                  padding: 0.5,
                  fontWeight: 700,
                  textWrap: "nowrap",
                  fontSize: dimensions.typography.overline,
                }}
              >
                {overline}
              </Typography>
            )}
            <Typography
              ref={titleRef}
              variant="h2"
              sx={{
                mt: 1,
                fontWeight: 900,
                letterSpacing: "-1.08px",
                lineHeight: 1.1,
                textShadow:
                  "0px 1px 2px var(--gradient-neutral-40, rgba(15, 23, 31, 0.40)), 0px 0px 4px var(--gradient-neutral-20, rgba(15, 23, 31, 0.20));",
                fontSize: fontSize,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: dimensions.typography.maxLinesCount,
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Link>
  );
};

export default DefaultBanner;

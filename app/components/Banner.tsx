import React from "react";
import { Grid2 as Grid, Typography, Box } from "@mui/material";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BannerProps } from "./Banner/Types";
import { BannerVariants } from "./Banner/Variants";
import { isBannerAdaptiveImages } from "./Banner/helpers";

/**
 * # Banner Component
 *
 * The `Banner` component is used to display a visually rich banner with a background image, title, overline, and link.
 * It supports several layout variants, adaptive image rendering, and responsive typography settings.
 *
 * ## Core Functionality:
 * - **Content Display**: Uses props to display an article or promotional content with configurable title, overline, and background image.
 * - **Responsive Layout**: The component adapts to different screen sizes, supporting several layout variants.
 * - **Variants**: The `variant` prop defines the banner’s layout, dimensions, and typography settings (e.g., `rectangle-horizontal-full`, `square-full`).
 *
 * ## Key Props:
 * - **variant**: Defines the layout and size of the banner.
 * - **content**: An object containing `title`, `href`, `overline`, and `image` properties that populate the banner.
 * - **textAlign**: Optional prop to align text (`left`, `center`, or `right`) within the banner.
 *
 * ## Usage Examples:
 * - **Variant Showcase**: Displays all available banner variants for quick testing and design validation.
 * - **Text Alignment Options**: Demonstrates different text alignments within the banner layout.
 * - **Adaptive Images**: Showcases how the banner adapts to different image resolutions based on screen size and variant.
 *
 * Overall, `Banner` is designed to provide an adaptable, content-rich display solution with fine-grained control over layout and style.
 *
 */
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
          opacity: inView ? 1 : 0, // Nastavení opacity pro fade-in efekt
          transition: "opacity 1s ease-in-out", // Plynulý přechod opacity
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
              variant="h2"
              sx={{
                fontWeight: 900,
                letterSpacing: "-1.08px",
                textShadow:
                  "0px 1px 2px var(--gradient-neutral-40, rgba(15, 23, 31, 0.40)), 0px 0px 4px var(--gradient-neutral-20, rgba(15, 23, 31, 0.20));",
                fontSize: dimensions.typography.title,
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

export default Banner;

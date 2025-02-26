import { Grid2 as Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import VideoPreview from "@/app/components/VideoPreview";

import { isBannerAdaptiveImages, isVideoUrl } from "../helpers";
import { BannerProps } from "../Types";

const ArticlePreviewThirdBanner = ({ variant, content }: BannerProps) => {
  const title = content?.title ?? "Default Title";
  const href = content?.href ?? "#";
  const overline = content?.overline ?? "";
  let image = content?.image;

  const defaultImage = "https://picsum.photos/seed/article${index}/800/600";

  if (!image) {
    image = defaultImage;
  } else if (isBannerAdaptiveImages(image)) {
    image = image[variant] || image.default || defaultImage;
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
            {isVideoUrl(href) ? (
              <VideoPreview videoUrl={href} />
            ) : (
              <Image
                src={
                  typeof image === "string" ? image : image?.src || defaultImage
                }
                fill
                style={{ objectFit: "cover" }}
                alt={title}
              />
            )}
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

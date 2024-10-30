// BannerPosition.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, Skeleton } from "@mui/material";
import { BannerVariants } from "@components/Banner/Variants";
import Banner from "@components/Banner";
import { Article } from "@contexts/ArticlesContext";
import { usePageSection } from "@contexts/PageSectionContext";
import {
  defaultVoter,
  getVoterFunction,
} from "@components/BannerPosition/Voters";

type BannerVariantsType = keyof typeof BannerVariants;

export interface BannerPositionProps {
  variant: BannerVariantsType;
  attributes?: object | null;
  devMode?: boolean;
  voter?:
    | ((articles: Article[], attributes?: object | null) => Article)
    | string;
}

export default function BannerPosition({
  variant,
  attributes = null,
  devMode = false,
  voter,
}: BannerPositionProps) {
  const theme = useTheme();
  const dimensions = BannerVariants[variant];
  const { articles, isLoading, error } = usePageSection();
  const [content, setContent] = useState<Article | null>(null);
  const [status, setStatus] = useState<"loading" | "dev" | "loaded">("loading");

  useEffect(() => {
    if (devMode) {
      setStatus("dev");
    } else if (!isLoading && !error) {
      const voterFunction =
        typeof voter === "string"
          ? getVoterFunction(voter)
          : voter || defaultVoter;
      const article = voterFunction(articles, attributes);
      setContent(article);
      setStatus("loaded");
    }
  }, [devMode, articles, attributes, isLoading, error, voter]);

  if (!dimensions) return null;

  if (status === "loading") {
    return (
      <Box sx={{ width: dimensions.width, height: dimensions.height }}>
        <Skeleton variant="rectangular" height="100%" width="100%" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          width: dimensions.width,
          height: dimensions.height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.palette.error.main,
        }}
      >
        <Typography variant="body2">{error}</Typography>
      </Box>
    );
  }

  if (status === "loaded" && content) {
    return (
      <Box
        sx={{
          width: dimensions.width,
          height: dimensions.height,
          maxWidth: dimensions.width,
          maxHeight: dimensions.height,
          overflow: "hidden",
        }}
      >
        <Banner variant={variant} content={content} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f6f6f6",
        color: theme.palette.text.primary,
        width: dimensions.width,
        height: dimensions.height,
        maxWidth: dimensions.width,
        maxHeight: dimensions.height,
        overflow: "hidden",
      }}
    >
      <Typography variant="h6">{variant}</Typography>

      {attributes && (
        <>
          <Typography variant="overline">Special Attributes:</Typography>
          <Box
            sx={{
              whiteSpace: "pre-wrap",
              textAlign: "left",
              maxWidth: "100%",
              maxHeight: "30%",
              overflowY: "auto",
              padding: 1,
              backgroundColor: "#e0e0e0",
              borderRadius: 1,
              mt: 1,
            }}
          >
            <Typography
              variant="caption"
              component="pre"
              sx={{ fontSize: "0.65rem" }}
            >
              {JSON.stringify(attributes, null, 2)}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}

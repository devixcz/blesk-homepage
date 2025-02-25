import { ApolloError } from "@apollo/client";
import { Box, Typography, useTheme, Skeleton } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";

import Banner from "@components/Banner";
import { BannerVariants } from "@components/Banner/Variants";
import {
  defaultVoter,
  getVoterFunction,
} from "@components/BannerPosition/Voters";
import { Article } from "@contexts/ArticlesContext";
import { usePageSection } from "@contexts/PageSectionContext";

import { BannerDimensions } from "../Banner/Types";

type BannerVariantsType = keyof typeof BannerVariants;

export interface Attributes {
  [key: string]: string | number | boolean | null;
}

export interface BannerPositionProps {
  variant: BannerVariantsType;
  attributes?: Attributes | null;
  devMode?: boolean;
  voter?:
    | ((articles: Article[], attributes?: Attributes | null) => Article)
    | string;
}

/**
 * The `BannerPosition` component is designed to display a promotional banner within specified layout dimensions.
 * This component is highly adaptable, supporting multiple layout variants, custom content, and adaptive images,
 * making it ideal for showcasing articles or featured content in different formats.
 *
 * ## Core Functionality:
 * - **Content Display**: Fetches content from `PageSectionContext` (which itself is nested inside `ArticlesContext`)
 *   and renders it within the banner layout defined by the selected variant.
 * - **State Management**:
 *   - `loading`: Shows a loading skeleton while articles are being fetched.
 *   - `loaded`: Displays content when articles are loaded and successfully passed through the voter function.
 *   - `dev`: Displays placeholder content with attribute values, allowing for quick preview and testing.
 * - **Variants**: The `variant` prop defines the banner's dimensions and layout, allowing it to adapt to various designs
 *   (e.g., `rectangle-horizontal-half`, `square-full`).
 *
 * ## Key Props:
 * - **variant**: Determines the layout and dimensions of the banner.
 * - **attributes**: Optional object for custom data (e.g., `id`, `category`), allowing for fine-grained control over article selection.
 * - **devMode**: When `true`, displays placeholder content and any provided `attributes`, useful for development and testing.
 * - **voter**: Custom function or identifier string that defines logic for selecting an article from `articles` in context.
 *   It enables the selection of specific content based on `attributes`, metadata, or other conditions.
 *
 * ## Usage Examples:
 * - **Attribute-Based Voting**: Selects a specific article by matching an attribute, such as an `id`, against articles in context.
 * - **Category Filtering**: Displays articles based on categories specified in the `attributes` prop, such as `Science` or `Tech`.
 * - **Development Mode**: Allows testing banner layouts and data flow by rendering dummy content without requiring real data.
 *
 * Overall, `BannerPosition` is designed to be flexible and customizable, enabling developers to showcase a variety of
 * articles and promotional content in visually distinct layouts that adapt seamlessly to the application's design.
 */

const Loading = ({ dimensions }: { dimensions: BannerDimensions }) => (
  <Box sx={{ width: dimensions.width, height: dimensions.height }}>
    <Skeleton variant="rectangular" height="100%" width="100%" />
  </Box>
);

export default function BannerPosition({
  variant,
  attributes = null,
  devMode = false,
  voter,
}: BannerPositionProps) {
  const theme = useTheme();
  const dimensions = BannerVariants[variant];
  const { articles, error } = usePageSection();
  const [content, setContent] = useState<Article | undefined | null>(null);
  const [, setStatus] = useState<"loading" | "dev" | "loaded">("loading");

  useEffect(() => {
    if (devMode) {
      setStatus("dev");
    } else if (!error) {
      const voterFunction =
        typeof voter === "string"
          ? getVoterFunction(voter)
          : voter || defaultVoter;
      const article = voterFunction(articles, attributes);
      setContent(article);
      setStatus("loaded");
    }
  }, [devMode, articles, attributes, error, voter]);

  if (!dimensions) return null;

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
        <Typography variant="body2">
          {error instanceof ApolloError ? error.message : error}
        </Typography>
      </Box>
    );
  }

  if (content) {
    return (
      <Suspense fallback={<Loading dimensions={dimensions} />}>
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
      </Suspense>
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

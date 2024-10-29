"use client";

import React, { useContext, useEffect } from "react";
import { Box, Typography, useTheme, Skeleton } from "@mui/material";
import { BannerVariants } from "@components/Banner/Variants";
import Banner from "@components/Banner"; // Validní komponenta Banner, která se zobrazí ve stavu loaded
import { BannerContent } from "@components/Banner/Types";

type BannerVariantsType = keyof typeof BannerVariants;

export interface BannerPositionProps {
  variant: BannerVariantsType;
  attributes?: object | null;
  content?: BannerContent;
  status?: "loading" | "dev" | "loaded";
}

// Kontext pro řízení stavu dev
const BannerContext = React.createContext({ status: "loaded" });

export default function BannerPosition({
  variant,
  attributes = null,
  content,
  status,
}: BannerPositionProps) {
  const theme = useTheme();
  const { status: contextStatus } = useContext(BannerContext);
  const currentStatus = status ?? contextStatus; // Pokud je status přímo nastaven, má přednost před contextStatus
  const dimensions = BannerVariants[variant];

  if (!dimensions) {
    return null;
  }

  if (currentStatus === "loading") {
    return (
      <Skeleton
        variant="rectangular"
        width={dimensions.width}
        height={dimensions.height}
      />
    );
  }

  if (currentStatus === "loaded" && content) {
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

  // Výchozí stav dev, pokud currentStatus === "dev"
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
      <Typography variant="h6">
        {dimensions.width} x {dimensions.height}
      </Typography>

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

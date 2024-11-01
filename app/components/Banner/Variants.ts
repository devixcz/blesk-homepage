import { BannerDimensions } from "./Types";

export const BannerWidths = {
  FULL: 976,
  TWO_THIRDS: 640,
  HALF: 472,
  THIRD: 304,
};

export const BannerHeights = {
  FULL: 640,
  TWO_THIRDS: 416,
  HALF: 304,
  THIRD: 192,
};

const hugeTypography = { overline: {xs: 15, md: 20}, title: {xs: 45, md: 100,}, maxLinesCount: 3 };
const mediumTypography = { overline: {xs: 15, md: 15}, title: {xs: 45, md: 60}, maxLinesCount: 2 };
const smallTypography = { overline: {xs: 12, md: 15}, title: 20, maxLinesCount: 2 };

export const RectangleHorizontalBannerVariants: Record<string, BannerDimensions> = {
  "rectangle-horizontal-full": {
    height: {xs: BannerHeights.TWO_THIRDS, md: BannerHeights.FULL},
    width: { xs: '100%', md: BannerWidths.FULL },
    typography: hugeTypography,
    textZone: { height: 0.66, width: 1 },
  },
  "rectangle-horizontal-two-thirds": {
    height: BannerHeights.TWO_THIRDS,
    width: { xs: '100%', md: BannerWidths.TWO_THIRDS },
    typography: mediumTypography,
    textZone: { height: 0.66, width: 1 },
  },
  "rectangle-horizontal-half": {
    height: BannerHeights.HALF,
    width: {xs: '100%', md: BannerWidths.HALF},
    typography: mediumTypography,
    textZone: { height: 0.66, width: 1 },
  },
  "rectangle-horizontal-third": {
    height: BannerHeights.THIRD,
    width: { xs: '100%', md: BannerWidths.THIRD },
    typography: smallTypography,
    textZone: { height: 0.66, width: 1 },
  },
};

export const RectangleVerticalBannerVariants: Record<string, BannerDimensions> = {
  "rectangle-vertical-two-thirds": {
    height: BannerHeights.FULL,
    width: { xs: '100%', md: BannerWidths.HALF, },
    typography: mediumTypography,
    textZone: { height: 0.46, width: 0.72 },
  },
  "rectangle-vertical-half": {
    height: BannerHeights.FULL,
    width: { xs: '100%', md: BannerWidths.HALF },
    typography: mediumTypography,
    textZone: { height: 0.46, width: 0.72 },
  },
  "rectangle-vertical-third": {
    height: {md: BannerHeights.FULL, xs: BannerHeights.HALF},
    width: { xs: '100%', md: BannerWidths.THIRD },
    typography: mediumTypography,
    textZone: { height: 0.6, width: 1 },
  },
};

export const SquareBannerVariants: Record<string, BannerDimensions> = {
  "square-full": {
    height: BannerWidths.FULL,
    width: { xs: '100%', md: BannerWidths.FULL },
    typography: hugeTypography,
    textZone: { height: 0.46, width: 0.72 },
  },
  "square-two-thirds": {
    height: BannerHeights.FULL,
    width: { xs: '100%', md: BannerWidths.TWO_THIRDS },
    typography: mediumTypography,
    textZone: { height: 0.46, width: 1 },
  },
  "square-half": {
    height: BannerHeights.TWO_THIRDS,
    width: { xs: '100%', md: BannerWidths.HALF },
    typography: mediumTypography,
    textZone: { height: 0.46, width: 0.72 },
  },
  "square-third": {
    height: BannerHeights.HALF,
    width: { xs: '100%', md: BannerWidths.THIRD },
    typography: smallTypography,
    textZone: { height: 0.46, width: 0.72 },
  },
};

export const BannerVariants = {
  ...RectangleHorizontalBannerVariants,
  ...RectangleVerticalBannerVariants,
  ...SquareBannerVariants,
};

import { BannerDimensions } from "./Types";

export const BannerWidths = {
  FULL: 976,
  TWO_THIRDS: 644,
  HALF: 478,
  THIRD: 312,
};

export const BannerHeights = {
  FULL: 644,
  TWO_THIRDS: 416,
  HALF: 312,
  THIRD: 201,
};

const hugeTypography = { overline: {xs: 16, md: 24}, title: {xs: 32, md: 128,}, maxLinesCount: 3 };
const bigTypography = { overline: {xs: 16, md: 20}, title: {xs: 32, md: 64}, maxLinesCount: 2 };
const mediumTypography = { overline: {xs: 16, md: 18}, title: {xs: 32, md: 48}, maxLinesCount: 2 };
const smallTypography = { overline: {xs: 16, md: 16}, title: 32, maxLinesCount: 2 };
const tinyTypography = { overline: {xs: 16, md: 14}, title: 32, maxLinesCount: 2 };

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
    typography: bigTypography,
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
    typography: tinyTypography,
    textZone: { height: 0.66, width: 1 },
  },
};

export const RectangleVerticalBannerVariants: Record<string, BannerDimensions> = {
  "rectangle-vertical-two-thirds": {
    height: BannerHeights.FULL,
    width: { xs: '100%', md: BannerWidths.HALF, },
    typography: bigTypography,
    textZone: { height: 0.46, width: 0.72 },
  },
  "rectangle-vertical-half": {
    height: BannerHeights.FULL,
    width: { xs: '100%', md: BannerWidths.HALF },
    typography: bigTypography,
    textZone: { height: 0.46, width: 0.72 },
  },
  "rectangle-vertical-third": {
    height: {md: BannerHeights.FULL, xs: BannerHeights.HALF},
    width: { xs: '100%', md: BannerWidths.THIRD },
    typography: bigTypography,
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
    typography: {...hugeTypography},
    textZone: { height: 0.6, width: 1 },
  },
  "square-half": {
    height: BannerHeights.TWO_THIRDS,
    width: { xs: '100%', md: BannerWidths.HALF },
    typography: bigTypography,
    textZone: { height: 0.46, width: 0.72 },
  },
  "square-third": {
    height: BannerHeights.HALF,
    width: { xs: '100%', md: BannerWidths.THIRD },
    typography: smallTypography,
    textZone: { height: 0.46, width: 0.72 },
  },
};

const ArticlePreviewVariants: Record<string, BannerDimensions> = {
  "article-preview-third": {
    height: BannerHeights.HALF,
    width: { xs: '100%', md: BannerWidths.THIRD },
    typography: tinyTypography,
    textZone: { height: 0.66, width: 1 },
  }
};


export const BannerVariants = {
  ...RectangleHorizontalBannerVariants,
  ...RectangleVerticalBannerVariants,
  ...SquareBannerVariants,
  ...ArticlePreviewVariants,
};

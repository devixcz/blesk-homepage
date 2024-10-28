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

const defaultTypography = { overline: 20, title: 36 };
const hugeTypography = { overline: 24, title: 128 };
const mediumTypography = { overline: 20, title: 60 };
const smallTypography = { overline: 16, title: 28 };

export const RectangleHorizontalBannerVariants: Record<string, BannerDimensions> = {
  "rectangle-horizontal-full": {
    height: BannerHeights.FULL,
    width: BannerWidths.FULL,
    typography: hugeTypography,
  },
  "rectangle-horizontal-two-thirds": {
    height: BannerHeights.TWO_THIRDS,
    width: BannerWidths.TWO_THIRDS,
    typography: mediumTypography,
  },
  "rectangle-horizontal-half": {
    height: BannerHeights.HALF,
    width: BannerWidths.HALF,
    typography: defaultTypography,
  },
  "rectangle-horizontal-third": {
    height: BannerHeights.THIRD,
    width: BannerWidths.THIRD,
    typography: smallTypography,
  },
};

export const RectangleVerticalBannerVariants: Record<string, BannerDimensions> = {
  "rectangle-vertical-two-thirds": {
    height: BannerHeights.FULL,
    width: BannerWidths.HALF,
    typography: mediumTypography,
  },
  "rectangle-vertical-half": {
    height: BannerHeights.FULL,
    width: BannerWidths.HALF,
    typography: mediumTypography,
  },
  "rectangle-vertical-third": {
    height: BannerHeights.FULL,
    width: BannerWidths.THIRD,
    typography: defaultTypography,
  },
};

export const SquareBannerVariants: Record<string, BannerDimensions> = {
  "square-full": {
    height: BannerWidths.FULL,
    width: BannerWidths.FULL,
    typography: hugeTypography,
  },
  "square-two-thirds": {
    height: BannerHeights.FULL,
    width: BannerWidths.TWO_THIRDS,
    typography: mediumTypography,
  },
  "square-half": {
    height: BannerHeights.TWO_THIRDS,
    width: BannerWidths.HALF,
    typography: mediumTypography,
  },
  "square-third": {
    height: BannerHeights.HALF,
    width: BannerWidths.THIRD,
    typography: smallTypography,
  },
};

export const BannerVariants = {
  ...RectangleHorizontalBannerVariants,
  ...RectangleVerticalBannerVariants,
  ...SquareBannerVariants,
};

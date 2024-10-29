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

const defaultTypography = { overline: '1vw', title: '5vw' };
const hugeTypography = { overline: '1vw', title: '5vw' };
const mediumTypography = { overline: '0.8vw', title: '3vw' };
const smallTypography = { overline: '0.66vw', title: '1vw' };

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

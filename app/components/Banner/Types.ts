import { Breakpoint } from "@mui/system";

import { BannerVariants } from "./Variants";

// Definice typu pro rozměry s breakpointy
export type DimensionsWithBreakpoints = number | string | { [key in Breakpoint]?: number | string };

/**
 * Interface representing the typography settings for a banner.
 * 
 * @property overline - The typography settings for the overline text.
 * @property title - The typography settings for the title text.
 * @property maxLinesCount - The maximum number of lines for the text.
 */
export interface BannerTypography {
  overline: DimensionsWithBreakpoints;
  title: DimensionsWithBreakpoints;
  maxLinesCount: number;
}

/**
 * Interface representing the dimensions and typography of a banner.
 */
export interface BannerDimensions {
  /**
   * The height of the banner, which can vary based on breakpoints.
   */
  height: DimensionsWithBreakpoints;

  /**
   * The width of the banner, which can vary based on breakpoints.
   */
  width: DimensionsWithBreakpoints;

  /**
   * The typography settings for the banner.
   */
  typography: BannerTypography;

  /**
   * The dimensions of the text zone within the banner.
   * @property height - The height of the text zone.
   * @property width - The width of the text zone.
   */
  textZone: { height: number; width: number };
}

export interface BannerImage {
  src: string;
  alt?: string;
}

export interface BannerAdaptiveImages {
  default: BannerImage  | string;
  [key: keyof typeof BannerVariants]: BannerImage | string;
}

export interface BannerContent {
  title: string;
  href: string;
  overline?: string;
  image: string | BannerImage | BannerAdaptiveImages;
}

export interface BannerProps {
  variant: keyof typeof BannerVariants;
  content: BannerContent;
  textAlign?: "left" | "center" | "right";
}

import { BannerVariants } from "./Variants";

export interface DimensionsWithBreakpoints {
  xs: number | string;
  md: number | string;
}

export interface BannerDimensions {
  height: number | DimensionsWithBreakpoints;
  width: number  | DimensionsWithBreakpoints;
  typography: { 
    overline: number | DimensionsWithBreakpoints; 
    title: number | DimensionsWithBreakpoints;
   };
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

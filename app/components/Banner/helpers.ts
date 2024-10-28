import { BannerAdaptiveImages } from "./Types";

export const calculateHeightPercent = (width: number, height: number) => {
    return `${(height / width) * 100}%`;
  };

export function isBannerAdaptiveImages(image: any): image is BannerAdaptiveImages {
    return typeof image === "object" && image !== null && "default" in image;
}
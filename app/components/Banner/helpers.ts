import { BannerAdaptiveImages } from "./Types";

export const calculateHeightPercent = (width: number, height: number) => {
  return `${(height / width) * 100}%`;
};

export function isBannerAdaptiveImages(
  image: unknown
): image is BannerAdaptiveImages {
  return typeof image === "object" && image !== null && "default" in image;
}

export const isVideoUrl = (url: string): boolean => {
  return (
    url.match(/\.(mp4|webm|ogg)($|\?)/i) !== null ||
    url.includes("vimeo.com") ||
    url.includes("youtube.com") ||
    url.includes("youtu.be")
  );
};

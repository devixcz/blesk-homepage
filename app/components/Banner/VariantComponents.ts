import { BannerProps } from "./Types";
import ArticlePreviewThirdBanner from "./Variants/ArticlePreviewThirdBanner";
import DefaultBanner from "./Variants/DefaultBanner";

// Typ pro mapování variant na komponenty
export const BannerVariantComponents: Record<
  string,
  React.FC<BannerProps>
> = {
  default: DefaultBanner,
  "article-preview-third": ArticlePreviewThirdBanner,
};

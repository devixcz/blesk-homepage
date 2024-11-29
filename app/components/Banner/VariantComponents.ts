import DefaultBanner from "./Variants/DefaultBanner";
import ArticlePreviewThirdBanner from "./Variants/ArticlePreviewThirdBanner";
import { BannerProps } from "./Types";

// Typ pro mapování variant na komponenty
export const BannerVariantComponents: Record<
  string,
  React.FC<BannerProps>
> = {
  default: DefaultBanner,
  "article-preview-third": ArticlePreviewThirdBanner,
};

// Banner.tsx
import React from "react";
import { BannerProps } from "./Banner/Types";
import { BannerVariantComponents } from "./Banner/VariantComponents";

const Banner = (props: BannerProps) => {
  const { variant } = props;

  const VariantComponent =
    BannerVariantComponents[variant] || BannerVariantComponents.default;
  return <VariantComponent {...props} />;
};

export default Banner;

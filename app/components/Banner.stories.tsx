import React from "react";
import { Meta, StoryFn } from "@storybook/react"; // Změněno `Story` na `StoryFn`
import Banner from "./Banner";
import { BannerProps } from "./Banner/Types";
import { BannerVariants } from "./Banner/Variants";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";

export default {
  title: "Components/Banner",
  component: Banner,
  decorators: [
    (StoryComponent) => (
      <ThemeProvider theme={theme}>
        <StoryComponent />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    textAlign: {
      control: {
        type: "radio",
        options: ["left", "center", "right"],
      },
    },
  },
} as Meta;

const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />; // Změněno na `StoryFn`

// Helper function to generate placeholder image URL
const generateImageUrl = (width: number, height: number, text?: string) => {
  if (text) {
    return `https://placehold.co/${width}x${height}/?text=${text}`;
  }
  return `https://placehold.co/${width}x${height}`;
};

// Stories for each banner variant
export const RectangleHorizontalFull = Template.bind({});
RectangleHorizontalFull.args = {
  variant: "rectangle-horizontal-full",
  content: {
    title: "Rectangle Horizontal Full",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      typeof BannerVariants["rectangle-horizontal-full"].width === "number"
        ? BannerVariants["rectangle-horizontal-full"].width
        : 0,
      typeof BannerVariants["rectangle-horizontal-full"].height === "number"
        ? BannerVariants["rectangle-horizontal-full"].height
        : 0
    ),
  },
  textAlign: "left",
};

export const RectangleHorizontalTwoThirds = Template.bind({});
RectangleHorizontalTwoThirds.args = {
  variant: "rectangle-horizontal-two-thirds",
  content: {
    title: "Rectangle Horizontal 2/3",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      typeof BannerVariants["rectangle-horizontal-two-thirds"].width ===
        "number"
        ? BannerVariants["rectangle-horizontal-two-thirds"].width
        : 0,
      typeof BannerVariants["rectangle-horizontal-two-thirds"].height ===
        "number"
        ? BannerVariants["rectangle-horizontal-two-thirds"].height
        : 0
    ),
  },
  textAlign: "center",
};

export const RectangleHorizontalHalf = Template.bind({});
RectangleHorizontalHalf.args = {
  variant: "rectangle-horizontal-half",
  content: {
    title: "Rectangle Horizontal 1/2",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      typeof BannerVariants["rectangle-horizontal-half"].width === "number"
        ? BannerVariants["rectangle-horizontal-half"].width
        : 0,
      typeof BannerVariants["rectangle-horizontal-half"].height === "number"
        ? BannerVariants["rectangle-horizontal-half"].height
        : 0
    ),
  },
  textAlign: "right",
};

export const AdaptiveImageSize = Template.bind({});
AdaptiveImageSize.args = {
  variant: "square-half",
  content: {
    title: "Adaptive Image Based on Variant",
    href: "/",
    overline: "Overline Text",
    image: {
      default: generateImageUrl(640, 640, "Default+Fallback+Image"),
      "square-half": generateImageUrl(304, 304),
      "square-third": generateImageUrl(192, 192),
    },
  },
  textAlign: "center",
};

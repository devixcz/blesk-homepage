import React from "react";
import { Meta, Story } from "@storybook/react";
import Banner from "./Banner";
import { BannerProps } from "./Banner/Types";
import { BannerVariants } from "./Banner/Variants";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";

export default {
  title: "Components/Banner",
  component: Banner,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
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

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

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
      BannerVariants["rectangle-horizontal-full"].width,
      BannerVariants["rectangle-horizontal-full"].height
    ),
  },
};

export const RectangleHorizontalTwoThirds = Template.bind({});
RectangleHorizontalTwoThirds.args = {
  variant: "rectangle-horizontal-two-thirds",
  content: {
    title: "Rectangle Horizontal 2/3",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      BannerVariants["rectangle-horizontal-two-thirds"].width,
      BannerVariants["rectangle-horizontal-two-thirds"].height
    ),
  },
};

export const RectangleHorizontalHalf = Template.bind({});
RectangleHorizontalHalf.args = {
  variant: "rectangle-horizontal-half",
  content: {
    title: "Rectangle Horizontal 1/2",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      BannerVariants["rectangle-horizontal-half"].width,
      BannerVariants["rectangle-horizontal-half"].height
    ),
  },
};

export const RectangleHorizontalThird = Template.bind({});
RectangleHorizontalThird.args = {
  variant: "rectangle-horizontal-third",
  content: {
    title: "Rectangle Horizontal 1/3",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      BannerVariants["rectangle-horizontal-third"].width,
      BannerVariants["rectangle-horizontal-third"].height
    ),
  },
};

export const RectangleVerticalTwoThirds = Template.bind({});
RectangleVerticalTwoThirds.args = {
  variant: "rectangle-vertical-two-thirds",
  content: {
    title: "Rectangle Vertical 2/3",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      BannerVariants["rectangle-vertical-two-thirds"].width,
      BannerVariants["rectangle-vertical-two-thirds"].height
    ),
  },
};

export const RectangleVerticalHalf = Template.bind({});
RectangleVerticalHalf.args = {
  variant: "rectangle-vertical-half",
  content: {
    title: "Rectangle Vertical 1/2",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      BannerVariants["rectangle-vertical-half"].width,
      BannerVariants["rectangle-vertical-half"].height
    ),
  },
};

export const RectangleVerticalThird = Template.bind({});
RectangleVerticalThird.args = {
  variant: "rectangle-vertical-third",
  content: {
    title: "Rectangle Vertical 1/3",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      BannerVariants["rectangle-vertical-third"].width,
      BannerVariants["rectangle-vertical-third"].height
    ),
  },
};

export const SquareFull = Template.bind({});
SquareFull.args = {
  variant: "square-full",
  content: {
    title: "Square Full",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      BannerVariants["square-full"].width,
      BannerVariants["square-full"].height
    ),
  },
};

export const SquareTwoThirds = Template.bind({});
SquareTwoThirds.args = {
  variant: "square-two-thirds",
  content: {
    title: "Square 2/3",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      BannerVariants["square-two-thirds"].width,
      BannerVariants["square-two-thirds"].height
    ),
  },
};

export const SquareHalf = Template.bind({});
SquareHalf.args = {
  variant: "square-half",
  content: {
    title: "Square 1/2",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      BannerVariants["square-half"].width,
      BannerVariants["square-half"].height
    ),
  },
};

export const SquareThird = Template.bind({});
SquareThird.args = {
  variant: "square-third",
  content: {
    title: "Square 1/3",
    href: "/",
    overline: "Overline Text",
    image: generateImageUrl(
      BannerVariants["square-third"].width,
      BannerVariants["square-third"].height
    ),
  },
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
};

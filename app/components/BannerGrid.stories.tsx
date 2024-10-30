import React from "react";
import { Meta, StoryFn } from "@storybook/react"; // Použití StoryFn namísto Story
import BannerGrid, { BannerGridProps } from "@components/BannerGrid";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import theme from "@/app/theme";

export default {
  title: "Components/BannerGrid",
  component: BannerGrid,
  decorators: [
    (StoryComponent) => (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ overflow: "hidden", width: "1024px" }}>
          <StoryComponent />
        </Container>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<BannerGridProps> = (args) => <BannerGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  contentStructure: [
    {
      direction: "column",
      items: [
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-horizontal-third" },
      ],
    },
    {
      direction: "column",
      items: [{ variant: "square-two-thirds" }],
    },
  ],
};

export const Complex = Template.bind({});
Complex.args = {
  contentStructure: [
    {
      direction: "row",
      items: [
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-horizontal-third" },
      ],
    },
    {
      direction: "column",
      items: [{ variant: "rectangle-vertical-half" }],
    },
    {
      direction: "column",
      items: [
        { variant: "rectangle-horizontal-half" },
        { variant: "rectangle-horizontal-half" },
      ],
    },
  ],
};

export const Thirds = Template.bind({});
Thirds.args = {
  contentStructure: [
    {
      direction: "row",
      items: [
        { variant: "rectangle-vertical-third" },
        { variant: "rectangle-vertical-third" },
        { variant: "rectangle-vertical-third" },
      ],
    },
  ],
};

export const VariousThirds = Template.bind({});
VariousThirds.args = {
  contentStructure: [
    {
      direction: "column",
      items: [
        { variant: "rectangle-vertical-third" },
        { variant: "rectangle-horizontal-third" },
      ],
    },
    {
      direction: "column",
      items: [
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-vertical-third" },
      ],
    },
    {
      direction: "column",
      items: [
        { variant: "rectangle-vertical-third" },
        { variant: "rectangle-horizontal-third" },
      ],
    },
  ],
};

export const MainWithChilds = Template.bind({});
MainWithChilds.args = {
  contentStructure: [
    {
      direction: "row",
      items: [{ variant: "rectangle-horizontal-full" }],
    },
    {
      direction: "row",
      items: [
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-horizontal-third" },
        { variant: "rectangle-horizontal-third" },
      ],
    },
  ],
};

import React from "react";
import { Meta, Story } from "@storybook/react";
import BannerGrid, { BannerGridProps } from "@components/BannerGrid";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import theme from "@/app/theme";

export default {
  title: "Components/BannerGrid",
  component: BannerGrid,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ overflow: "hidden", width: "1024px" }}>
          <Story />
        </Container>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<BannerGridProps> = (args) => <BannerGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: [
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
  content: [
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
  content: [
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
  content: [
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
  content: [
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

import React from "react";
import { Meta, Story } from "@storybook/react";
import BannerPosition, {
  BannerPositionProps,
} from "@components/BannerGrid/BannerPosition";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";

export default {
  title: "Components/BannerPosition",
  component: BannerPosition,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<BannerPositionProps> = (args) => (
  <BannerPosition {...args} />
);

// Stav loaded s příslušným obsahem
export const Default = Template.bind({});
Default.args = {
  variant: "rectangle-horizontal-two-thirds",
  status: "loaded",
  content: {
    title: "Loaded banner",
    overline: "Loaded banner overline",
    href: "https://www.blesk.cz",
    image: "https://placehold.co/640x416",
  },
};

// Stav dev se specifickými atributy
export const DevMode = Template.bind({});
DevMode.args = {
  variant: "rectangle-horizontal-two-thirds",
  status: "dev",
  attributes: {
    example: "data",
    test: 123,
  },
};

// Stav loading
export const LoadingState = Template.bind({});
LoadingState.args = {
  variant: "rectangle-horizontal-two-thirds",
  status: "loading",
};

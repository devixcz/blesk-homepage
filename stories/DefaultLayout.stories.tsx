import React from "react";
import { Meta, Story } from "@storybook/react";
import Layout from "@/app/layouts/Default";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";

export default {
  title: "Components/Layout",
  component: Layout,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the Storybook Layout</h1>
      <p>
        This is an example of how the layout component displays its content.
      </p>
    </div>
  ),
};

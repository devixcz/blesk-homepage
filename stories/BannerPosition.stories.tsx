import React from 'react';
import { Meta, Story } from '@storybook/react';
import BannerPosition, { BannerPositionProps } from '@components/BannerGrid/BannerPosition';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/theme';

export default {
    title: 'Components/BannerPosition',
    component: BannerPosition,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as Meta;

const Template: Story<BannerPositionProps> = (args) => <BannerPosition {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'square-full',
};

export const CustomPosition = Template.bind({});
CustomPosition.args = {
    // Add custom position props here
};
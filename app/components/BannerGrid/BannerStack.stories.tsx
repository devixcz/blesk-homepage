import React from 'react';
import { Meta, Story } from '@storybook/react';
import BannerStack from '@components/BannerGrid/BannerStack';
import { BannerVariants } from '@/app/components/Banners';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/theme';

type BannerVariantsType = keyof typeof BannerVariants;

export default {
    title: 'Components/BannerStack',
    component: BannerStack,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as Meta;

interface BannerStackProps {
    direction: 'row' | 'column';
    bannerVariant: BannerVariantsType
}

const Template: Story<BannerStackProps> = (args) => (
    <BannerStack {...args} />
);

export const RowVariant = Template.bind({});
RowVariant.args = {
    direction: 'row',
    items: [
        { variant: 'rectangle-horizontal-third' },
        { variant: 'rectangle-horizontal-third' },
        { variant: 'rectangle-horizontal-third' },
    ],
};

export const ColumnVariant = Template.bind({});
ColumnVariant.args = {
    direction: 'column',
    items: [
        { variant: 'rectangle-horizontal-third' },
        { variant: 'rectangle-horizontal-third' },
        { variant: 'rectangle-horizontal-third' },
    ],
};

import React from 'react';
import { Meta, Story } from '@storybook/react';
import PageSection, { PageSectionProps } from '@components/PageSection';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import theme from '@/app/theme';
import { title } from 'process';


const initialBannerData = {
    title: "Kousnul mě, tvrdí Dopita!",
    overline: "Rvačka Soukupa s manželem Hanychové:",
    href: "https://www.blesk.cz",
    image: "/img/banners/full.png",
  };

export default {
    title: 'Components/PageSection',
    component: PageSection,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg" sx={{overflow: 'hidden'}}>
                    <Story />
                </Container>
            </ThemeProvider>
        ),
    ],
} as Meta;

const Template: Story<PageSectionProps> = (args) => <PageSection {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Celebrity',
    subCategories: [
        {title: 'Karel Gott', slug: 'karel-gott'},
        {title: 'Kateřina Jacques', slug: 'katerina-jacques'},
        {title: 'Lucie Bílá', slug: 'lucie-bila'},
        {title: 'Karel Gott', slug: 'karel-gott'},
        {title: 'Kateřina Jacques', slug: 'katerina-jacques'},
        {title: 'Lucie Bílá', slug: 'lucie-bila'},

    ],
};
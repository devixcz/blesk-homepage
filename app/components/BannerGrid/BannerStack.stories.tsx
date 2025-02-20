/**
 * # BannerStack Component
 *
 * The `BannerStack` component is a flexible container for displaying a series of `BannerPosition` components
 * in either a row or column layout. It uses `BannerPosition` to display individual banners based on props, and
 * adapts to different layouts and screen sizes.
 *
 * ## Core Functionality:
 * - **Direction Control**: The `direction` prop allows you to set the stack orientation (`row` or `column`).
 * - **Context-Driven**: Each `BannerPosition` within the `BannerStack` pulls data from `PageSectionContext`, itself nested within `ArticlesContext`.
 * - **Item Propagation**: The `items` prop passes a list of configurations for each `BannerPosition`, enabling varied content and layouts within the stack.
 *
 * ## Key Props:
 * - **direction**: Controls layout orientation (`row` for horizontal stacking, `column` for vertical).
 * - **items**: An array of `BannerPositionProps` defining each banner’s configuration.
 *
 * ## Usage Examples:
 * - **Row Layout**: Demonstrates a horizontally scrolling `BannerStack`.
 * - **Column Layout**: Displays banners in a vertical stack for a mobile-friendly layout.
 *
 * The `BannerStack` component provides flexibility for creating organized layouts of multiple banners, suitable for various page sections and content displays.
 */

import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import theme from "@/app/theme";
import { ArticlesProvider, Article } from "@contexts/ArticlesContext";
import { PageSectionProvider } from "@contexts/PageSectionContext";

import BannerStack, { BannerStackProps } from "./BannerStack";

// Mock articles to use within stories, with IDs in `metadata` for voter-based selections
const mockArticles: Article[] = [
  {
    title: "Exclusive Celebrity Insights!",
    href: "/articles/1",
    overline: "Entertainment | Today",
    image: {
      src: "https://picsum.photos/600/400?random=1",
      alt: "Article 1",
    },
    metadata: { id: "article-1" },
  },
  {
    title: "Science Breakthroughs Revealed",
    href: "/articles/2",
    overline: "Science | Yesterday",
    image: {
      src: "https://picsum.photos/600/400?random=2",
      alt: "Article 2",
    },
    metadata: { id: "article-2" },
  },
  {
    title: "Latest Tech Innovations",
    href: "/articles/3",
    overline: "Technology | 2 days ago",
    image: {
      src: "https://picsum.photos/600/400?random=3",
      alt: "Article 3",
    },
    metadata: { id: "article-3" },
  },
];

export default {
  title: "Components/BannerStack",
  component: BannerStack,
  decorators: [
    (StoryComponent) => (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ overflow: "hidden", width: "1024px" }}>
          <ArticlesProvider initialArticles={mockArticles}>
            <PageSectionProvider>
              <StoryComponent />
            </PageSectionProvider>
          </ArticlesProvider>
        </Container>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<BannerStackProps> = (args) => <BannerStack {...args} />;

// **Story: Row Layout Example**
/**
 * This story demonstrates `BannerStack` in a horizontal row layout.
 * Each banner in the stack is configured with a unique `BannerPosition` variant and content.
 * This layout is suitable for displaying a sequence of banners across the screen width.
 */
export const RowLayoutExample = Template.bind({});
RowLayoutExample.args = {
  direction: "row",
  items: [
    { variant: "rectangle-horizontal-half", attributes: { id: "article-1" } },
    { variant: "rectangle-horizontal-half", attributes: { id: "article-2" } },
    { variant: "rectangle-horizontal-half", attributes: { id: "article-3" } },
  ],
};
RowLayoutExample.parameters = {
  docs: {
    source: {
      code: `
<BannerStack
  direction="row"
  items={[
    { variant: "rectangle-horizontal-half", attributes: { id: "article-1" } },
    { variant: "rectangle-horizontal-half", attributes: { id: "article-2" } },
    { variant: "rectangle-horizontal-half", attributes: { id: "article-3" } },
  ]}
/>
      `,
    },
  },
};

/**
 * Explanation:
 * This story demonstrates the `BannerStack` in a `row` layout, displaying banners horizontally.
 * Each item in the `items` array is a unique `BannerPosition` with its own variant and content.
 * Use this layout to showcase multiple banners across the screen width in a single row.
 */

// **Story: Column Layout Example**
/**
 * This story demonstrates `BannerStack` in a vertical column layout.
 * Each `BannerPosition` within the stack displays an article, with banners stacked vertically.
 * This layout is ideal for mobile views and narrow layouts.
 */
export const ColumnLayoutExample = Template.bind({});
ColumnLayoutExample.args = {
  direction: "column",
  items: [
    { variant: "rectangle-horizontal-half", attributes: { id: "article-1" } },
    { variant: "rectangle-horizontal-half", attributes: { id: "article-2" } },
    { variant: "rectangle-horizontal-half", attributes: { id: "article-3" } },
  ],
};
ColumnLayoutExample.parameters = {
  docs: {
    source: {
      code: `
<BannerStack
  direction="column"
  items={[
    { variant: "rectangle-horizontal-half", attributes: { id: "article-1" } },
    { variant: "rectangle-horizontal-half", attributes: { id: "article-2" } },
    { variant: "rectangle-horizontal-half", attributes: { id: "article-3" } },
  ]}
/>
      `,
    },
  },
};

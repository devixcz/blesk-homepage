/**
 * # BannerGrid Component
 *
 * The `BannerGrid` component is designed to arrange a structured grid of banners using nested `BannerStack` components.
 * It accepts a `contentStructure` prop that defines the layout of each `BannerStack` within the grid, providing flexibility
 * for various banner configurations and layouts.
 *
 * ## Core Functionality:
 * - **Grid Layout**: Uses MUI's `Grid` component to display multiple `BannerStack` instances within a flexible grid.
 * - **Context-Driven**: Each `BannerStack` and its children (`BannerPosition`) pulls data from `PageSectionContext`,
 *   which is nested within `ArticlesContext`.
 * - **Content Structure**: The `contentStructure` prop allows for a flexible setup of different `BannerStack` configurations
 *   in the grid, with each stack independently defining its layout and direction.
 *
 * ## Key Props:
 * - **contentStructure**: Array of `BannerStackProps` configurations, each defining a `BannerStack` instance in the grid.
 *
 * ## Usage Examples:
 * - **Single Row with Multiple Stacks**: Showcases a horizontal grid layout with multiple stacks in a single row.
 * - **Multi-Row Layout**: Demonstrates a grid layout with stacks arranged in multiple rows.
 * - **Scrollable Row Layout**: Displays a single scrollable row of banners, ideal for mobile or limited-width displays.
 *
 * `BannerGrid` provides a robust layout solution for showcasing multiple banners in organized rows and columns.
 */

import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import theme from "@/app/theme";
import { ArticlesProvider, Article } from "@contexts/ArticlesContext";
import { PageSectionProvider } from "@contexts/PageSectionContext";

import BannerGrid, { BannerGridProps } from "./BannerGrid";

// Mock articles for stories, with IDs in `metadata` for selection by `BannerPosition`
const mockArticles: Article[] = [
  {
    title: "Exclusive Celebrity Scandals!",
    href: "/articles/1",
    overline: "Entertainment | Today",
    image: {
      src: "https://picsum.photos/600/400?random=1",
      alt: "Article 1",
    },
    metadata: { id: "article-1" },
  },
  {
    title: "New Scientific Discoveries",
    href: "/articles/2",
    overline: "Science | Yesterday",
    image: {
      src: "https://picsum.photos/600/400?random=2",
      alt: "Article 2",
    },
    metadata: { id: "article-2" },
  },
  {
    title: "Tech Innovation Unveiled",
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
  title: "Components/BannerGrid",
  component: BannerGrid,
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

const Template: StoryFn<BannerGridProps> = (args) => <BannerGrid {...args} />;

// **Story: Single Row of Stacks**
/**
 * This story demonstrates a single-row layout with multiple `BannerStack` instances.
 * Each stack in the row displays a single banner, allowing for a compact, horizontal layout.
 */
export const SingleRowOfStacks = Template.bind({});
SingleRowOfStacks.args = {
  contentStructure: [
    {
      direction: "row",
      items: [
        {
          variant: "rectangle-horizontal-half",
          attributes: { id: "article-1" },
        },
      ],
    },
    {
      direction: "row",
      items: [
        {
          variant: "rectangle-horizontal-half",
          attributes: { id: "article-2" },
        },
      ],
    },
    {
      direction: "row",
      items: [
        {
          variant: "rectangle-horizontal-half",
          attributes: { id: "article-3" },
        },
      ],
    },
  ],
};
SingleRowOfStacks.parameters = {
  docs: {
    source: {
      code: `
<BannerGrid
  contentStructure={[
    { direction: "row", items: [{ variant: "rectangle-horizontal-half", attributes: { id: "article-1" } }] },
    { direction: "row", items: [{ variant: "rectangle-horizontal-half", attributes: { id: "article-2" } }] },
    { direction: "row", items: [{ variant: "rectangle-horizontal-half", attributes: { id: "article-3" } }] },
  ]}
/>
      `,
    },
  },
};
SingleRowOfStacks.storyName = "Single Row of Stacks";

/**
 * Explanation:
 * This story demonstrates a single-row grid layout where each `BannerStack` displays a single banner.
 * It is ideal for showcasing a simple, horizontally oriented layout with multiple stacks.
 */

// **Story: Multi-Row Layout Example**
/**
 * This story demonstrates a multi-row grid layout, with each row containing multiple `BannerStack` instances.
 * The layout is ideal for displaying multiple banners across both rows and columns.
 */
export const MultiRowLayout = Template.bind({});
MultiRowLayout.args = {
  contentStructure: [
    {
      direction: "row",
      items: [
        {
          variant: "rectangle-horizontal-third",
          attributes: { id: "article-1" },
        },
        {
          variant: "rectangle-horizontal-third",
          attributes: { id: "article-2" },
        },
        {
          variant: "rectangle-horizontal-third",
          attributes: { id: "article-3" },
        },
      ],
    },
    {
      direction: "row",
      items: [
        { variant: "square-full", attributes: { id: "article-1" } },
        { variant: "square-full", attributes: { id: "article-2" } },
      ],
    },
  ],
};
MultiRowLayout.parameters = {
  docs: {
    source: {
      code: `
<BannerGrid
  contentStructure={[
    { direction: "row", items: [
      { variant: "rectangle-horizontal-third", attributes: { id: "article-1" } },
      { variant: "rectangle-horizontal-third", attributes: { id: "article-2" } },
      { variant: "rectangle-horizontal-third", attributes: { id: "article-3" } },
    ]},
    { direction: "row", items: [
      { variant: "square-full", attributes: { id: "article-1" } },
      { variant: "square-full", attributes: { id: "article-2" } },
    ]},
  ]}
/>
      `,
    },
  },
};
MultiRowLayout.storyName = "Multi-Row Layout";

/**
 * Explanation:
 * This story demonstrates a multi-row grid layout where banners are organized across multiple rows.
 * Each row can display different banner configurations, providing flexibility for complex grid structures.
 */

// **Story: Scrollable Row Layout Example**
/**
 * This story demonstrates a scrollable row layout within the `BannerGrid`, displaying banners horizontally
 * with a scrollable container to accommodate more banners within limited screen space.
 */
export const ScrollableRowLayout = Template.bind({});
ScrollableRowLayout.args = {
  contentStructure: [
    {
      direction: "row",
      items: [
        {
          variant: "rectangle-horizontal-third",
          attributes: { id: "article-1" },
        },
        {
          variant: "rectangle-horizontal-third",
          attributes: { id: "article-2" },
        },
        {
          variant: "rectangle-horizontal-third",
          attributes: { id: "article-3" },
        },
        {
          variant: "rectangle-horizontal-third",
          attributes: { id: "article-1" },
        },
        {
          variant: "rectangle-horizontal-third",
          attributes: { id: "article-2" },
        },
      ],
    },
  ],
};
ScrollableRowLayout.parameters = {
  docs: {
    source: {
      code: `
<BannerGrid
  contentStructure={[
    {
      direction: "row-scrollable",
      items: [
        { variant: "rectangle-horizontal-third", attributes: { id: "article-1" } },
        { variant: "rectangle-horizontal-third", attributes: { id: "article-2" } },
        { variant: "rectangle-horizontal-third", attributes: { id: "article-3" } },
        { variant: "rectangle-horizontal-third", attributes: { id: "article-1" } },
        { variant: "rectangle-horizontal-third", attributes: { id: "article-2" } },
      ],
    },
  ]}
/>
      `,
    },
  },
};

/**
 * Explanation:
 * This story demonstrates a scrollable row layout, useful for limited screen widths.
 * Banners are organized in a horizontal row that can be scrolled, ideal for showcasing additional content without taking up extra vertical space.
 */

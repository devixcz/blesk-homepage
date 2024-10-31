/**
 * # PageSection Component
 *
 * The `PageSection` component organizes content sections within a page layout. It features
 * a configurable header and grid layout for banners, as well as theme and filter customizations.
 * Wrapped in `PageSectionProvider`, it provides filtered articles to the section’s content.
 *
 * ## Core Functionality:
 * - **Filter Function**: Allows for customizable filtering of articles displayed within the section.
 * - **Theming Options**: Supports theme overrides, enabling special styling for thematic sections.
 * - **Optional Header**: Allows for sections with or without headers.
 *
 * ## Key Props:
 * - **header**: Configures the section header, including title and categories.
 * - **contentStructure**: Defines the layout and structure of the section’s banners.
 * - **themeOverrides**: Enables customized styles, like background images and colors, specific to this section.
 * - **filterFunction**: Allows selection of specific articles based on custom filter logic.
 *
 * ## Usage Examples:
 * - **Filter Function**: Demonstrates the ability to filter articles by specific criteria.
 * - **Themed Section**: Shows a custom themed section with a background image and special colors.
 * - **No Header Section**: Demonstrates a section layout without a header, useful for more streamlined pages.
 */

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import PageSection, { PageSectionProps } from "./PageSection";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import { Container } from "@mui/material";
import { ArticlesProvider, Article } from "@contexts/ArticlesContext";
import { BannerStackProps } from "@components/BannerGrid/BannerStack";

// Mock articles for demonstrating different filter functions and theme overrides
const mockArticles: Article[] = [
  {
    title: "Celebrity News: Uncovering the Latest!",
    href: "/articles/celebrity-news",
    overline: "Celebrity",
    image: "https://picsum.photos/800/400?random=1",
    section: "Entertainment",
    metadata: { id: "article-1" },
  },
  {
    title: "The World of Science Advances",
    href: "/articles/science-advances",
    overline: "Science",
    image: "https://picsum.photos/800/400?random=2",
    section: "Science",
    metadata: { id: "article-2" },
  },
  {
    title: "Latest Technology Trends",
    href: "/articles/tech-trends",
    overline: "Tech",
    image: "https://picsum.photos/800/400?random=3",
    section: "Technology",
    metadata: { id: "article-3" },
  },
];

// Sample content structure for banners
const sampleContentStructure: BannerStackProps[] = [
  {
    direction: "row",
    items: [
      { variant: "rectangle-horizontal-half", attributes: { id: "article-1" } },
      { variant: "rectangle-horizontal-half", attributes: { id: "article-2" } },
    ],
  },
  {
    direction: "column",
    items: [{ variant: "square-full", attributes: { id: "article-3" } }],
  },
];

export default {
  title: "Components/PageSection",
  component: PageSection,
  decorators: [
    (StoryComponent) => (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ overflow: "hidden", width: "1024px" }}>
          <ArticlesProvider initialArticles={mockArticles}>
            <StoryComponent />
          </ArticlesProvider>
        </Container>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<PageSectionProps> = (args) => <PageSection {...args} />;

// **Story: Page Section with Filter Function**
/**
 * This story demonstrates using `filterFunction` to display only articles within a specific section.
 * Here, only articles from the "Science" section are shown.
 */
export const FilterFunctionExample = Template.bind({});
FilterFunctionExample.args = {
  header: { title: "Science Section" },
  contentStructure: sampleContentStructure,
  filterFunction: (articles) =>
    articles.filter((article) => article.section === "Science"),
};
FilterFunctionExample.parameters = {
  docs: {
    source: {
      code: `
<PageSection 
  header={{ title: "Science Section" }}
  contentStructure={sampleContentStructure}
  filterFunction={(articles) => articles.filter(article => article.section === "Science")}
/>
      `,
    },
  },
};

/**
 * Explanation:
 * This story demonstrates the use of a `filterFunction` prop to limit displayed articles
 * to those in the "Science" section. The `filterFunction` allows custom filtering logic for article selection.
 */

// **Story: Page Section with Theme Overrides**
/**
 * This story demonstrates the use of `themeOverrides` to create a custom themed section.
 * It applies a background image and specific colors for a visually distinct layout.
 */
export const ThemeOverridesExample = Template.bind({});
ThemeOverridesExample.args = {
  header: { title: "Entertainment Highlights" },
  contentStructure: sampleContentStructure,
  themeOverrides: {
    backgroundColor: "#f5f5f5",
    backgroundImage: "url('https://picsum.photos/1200/600?random=4')",
    palette: {
      primary: { main: "#ff4081" },
    },
  },
};
ThemeOverridesExample.parameters = {
  docs: {
    source: {
      code: `
<PageSection 
  header={{ title: "Entertainment Highlights" }}
  contentStructure={sampleContentStructure}
  themeOverrides={{
    backgroundColor: "#f5f5f5",
    backgroundImage: "url('https://picsum.photos/1200/600?random=4')",
    palette: { primary: { main: "#ff4081" } }
  }}
/>
      `,
    },
  },
};

/**
 * Explanation:
 * This story uses `themeOverrides` to customize the appearance of the section.
 * By setting `backgroundColor` and `backgroundImage`, a distinct visual theme is created,
 * making it useful for highlighting specific content sections like "Entertainment".
 */

// **Story: Page Section without Header**
/**
 * This story demonstrates the `PageSection` component without a header,
 * making it useful for more streamlined page layouts.
 */
export const NoHeaderExample = Template.bind({});
NoHeaderExample.args = {
  contentStructure: sampleContentStructure,
};
NoHeaderExample.parameters = {
  docs: {
    source: {
      code: `
<PageSection 
  contentStructure={sampleContentStructure}
/>
      `,
    },
  },
};

/**
 * Explanation:
 * This story shows `PageSection` without a header, which is useful for sections where a title
 * or categories are not needed, providing a cleaner layout.
 */

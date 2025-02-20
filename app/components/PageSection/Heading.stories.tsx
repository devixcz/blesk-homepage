/**
 * # Heading Component
 *
 * The `Heading` component is designed to display a section title with optional categories as clickable links.
 * The component uses data from the `PageSectionContext`, retrieving unique categories based on article sections,
 * or it can accept predefined categories through props.
 *
 * ## Core Functionality:
 * - **Dynamic Categories**: If no categories are provided, the component dynamically generates them
 *   from the articles in `PageSectionContext`.
 * - **Variant Support**: Title heading variant (e.g., "h1", "h2") can be customized.
 *
 * ## Key Props:
 * - **title**: The main title of the heading section.
 * - **categories**: Optional list of category objects with `title` and `slug`.
 * - **variant**: Determines the heading size (e.g., "h1", "h2").
 *
 * ## Usage Examples:
 * - **Default Categories from Context**: Shows categories extracted from articles when no categories are provided.
 * - **Custom Category List**: Demonstrates how to pass a specific list of categories.
 * - **Heading Variants**: Displays the title in different typography variants.
 */

import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import theme from "@/app/theme";
import { ArticlesProvider, Article } from "@contexts/ArticlesContext";
import { PageSectionProvider } from "@contexts/PageSectionContext";

import Heading, { HeadingProps } from "./Heading";

// Mock articles for testing unique categories
const mockArticles: Article[] = [
  {
    title: "Celebrity News",
    href: "/celebrity/world/123",
    overline: "Today",
    image: {
      src: "https://picsum.photos/600/400?random=1",
      alt: "Article 1",
    },
    section: "World Celebrities",
    metadata: { id: "article-1" },
  },
  {
    title: "Scientific Discoveries",
    href: "/science/research/456",
    overline: "Yesterday",
    image: {
      src: "https://picsum.photos/600/400?random=2",
      alt: "Article 2",
    },
    section: "Science",
    metadata: { id: "article-2" },
  },
  {
    title: "Latest Tech Trends",
    href: "/technology/latest/789",
    overline: "Tech Today",
    image: {
      src: "https://picsum.photos/600/400?random=3",
      alt: "Article 3",
    },
    section: "Technology",
    metadata: { id: "article-3" },
  },
];

export default {
  title: "Components/Heading",
  component: Heading,
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

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

// **Story: Default Categories from Context**
/**
 * This story displays the `Heading` component with dynamically generated categories
 * based on `PageSectionContext` data. No categories are provided, so they are extracted from articles.
 */
export const DefaultCategoriesFromContext = Template.bind({});
DefaultCategoriesFromContext.args = {
  title: "Section Heading",
  variant: "h2",
};
DefaultCategoriesFromContext.parameters = {
  docs: {
    source: {
      code: `
<Heading
  title="Section Heading"
  variant="h2"
/>
      `,
    },
  },
};

/**
 * Explanation:
 * This story demonstrates the automatic generation of categories from `PageSectionContext` data.
 * Categories are derived from unique article sections, so each section shows as a clickable chip.
 */

// **Story: Custom Category List**
/**
 * This story demonstrates the `Heading` component with a custom list of categories.
 * The categories are directly provided in `categories` prop, bypassing context data.
 */
export const CustomCategoryList = Template.bind({});
CustomCategoryList.args = {
  title: "Custom Categories",
  variant: "h3",
  categories: [
    { title: "Health", slug: "/health" },
    { title: "Science", slug: "/science" },
    { title: "Technology", slug: "/technology" },
  ],
};
CustomCategoryList.parameters = {
  docs: {
    source: {
      code: `
<Heading
  title="Custom Categories"
  variant="h3"
  categories={[
    { title: "Health", slug: "/health" },
    { title: "Science", slug: "/science" },
    { title: "Technology", slug: "/technology" }
  ]}
/>
      `,
    },
  },
};

/**
 * Explanation:
 * This story shows how to directly pass a list of categories to `Heading`.
 * Useful when specific categories are required without depending on context data.
 */

// **Story: Heading Variants**
/**
 * This story demonstrates the `Heading` component in different typography variants.
 * The variant prop adjusts the size and style of the title.
 */
export const HeadingVariants = Template.bind({});
HeadingVariants.args = {
  title: "Different Heading Sizes",
  categories: [
    { title: "Tech", slug: "/tech" },
    { title: "Business", slug: "/business" },
  ],
};
HeadingVariants.parameters = {
  docs: {
    source: {
      code: `
<>
  <Heading title="Heading H1" variant="h1" categories={[{ title: "Tech", slug: "/tech" }, { title: "Business", slug: "/business" }]} />
  <Heading title="Heading H2" variant="h2" categories={[{ title: "Tech", slug: "/tech" }, { title: "Business", slug: "/business" }]} />
  <Heading title="Heading H3" variant="h3" categories={[{ title: "Tech", slug: "/tech" }, { title: "Business", slug: "/business" }]} />
  <Heading title="Heading H4" variant="h4" categories={[{ title: "Tech", slug: "/tech" }, { title: "Business", slug: "/business" }]} />
</>
      `,
    },
  },
};

/**
 * Explanation:
 * This story demonstrates the use of different heading variants.
 * Adjusting the `variant` prop allows for flexible heading sizes.
 */

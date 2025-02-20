// BannerPosition.stories.tsx
/**
 * # BannerPosition Component
 *
 * The `BannerPosition` component is designed to display a promotional banner within specified layout dimensions.
 * This component is highly adaptable, supporting multiple layout variants, custom content, and adaptive images,
 * making it ideal for showcasing articles or featured content in different formats.
 *
 * ## Core Functionality:
 * - **Content Display**: Fetches content from `PageSectionContext` (which itself is nested inside `ArticlesContext`)
 *   and renders it within the banner layout defined by the selected variant.
 * - **State Management**:
 *   - `loading`: Shows a loading skeleton while articles are being fetched.
 *   - `loaded`: Displays content when articles are loaded and successfully passed through the voter function.
 *   - `dev`: Displays placeholder content with attribute values, allowing for quick preview and testing.
 * - **Variants**: The `variant` prop defines the banner's dimensions and layout, allowing it to adapt to various designs
 *   (e.g., `rectangle-horizontal-half`, `square-full`).
 *
 * ## Key Props:
 * - **variant**: Determines the layout and dimensions of the banner.
 * - **attributes**: Optional object for custom data (e.g., `id`, `category`), allowing for fine-grained control over article selection.
 * - **devMode**: When `true`, displays placeholder content and any provided `attributes`, useful for development and testing.
 * - **voter**: Custom function or identifier string that defines logic for selecting an article from `articles` in context.
 *   It enables the selection of specific content based on `attributes`, metadata, or other conditions.
 *
 * ## Usage Examples:
 * - **Attribute-Based Voting**: Selects a specific article by matching an attribute, such as an `id`, against articles in context.
 * - **Category Filtering**: Displays articles based on categories specified in the `attributes` prop, such as `Science` or `Tech`.
 * - **Development Mode**: Allows testing banner layouts and data flow by rendering dummy content without requiring real data.
 *
 * Overall, `BannerPosition` is designed to be flexible and customizable, enabling developers to showcase a variety of
 * articles and promotional content in visually distinct layouts that adapt seamlessly to the application’s design.
 */
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import theme from "@/app/theme";
import { ArticlesProvider, Article } from "@contexts/ArticlesContext";
import { PageSectionProvider } from "@contexts/PageSectionContext";

import BannerPosition, { BannerPositionProps } from "./BannerPosition";

// Mock articles for story examples, with `id` inside `metadata`
const mockArticles: Article[] = [
  {
    title: "Celebrity Scandals Uncovered!",
    href: "/articles/1",
    overline: "Exclusive | Today",
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
    title: "Breaking Tech News!",
    href: "/articles/3",
    overline: "Tech | 2 days ago",
    image: {
      src: "https://picsum.photos/600/400?random=3",
      alt: "Article 3",
    },
    metadata: { id: "article-3" },
  },
];

export default {
  title: "Components/BannerPosition",
  component: BannerPosition,
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

const Template: StoryFn<BannerPositionProps> = (args) => (
  <BannerPosition {...args} />
);

// **Story: Attribute-Based Voter Example**
/**
 * This story demonstrates using `attributes` with a custom `voter` to match articles by `id` inside `metadata`.
 * The voter function selects the article with the matching `metadata.id` from `attributes`.
 */
export const AttributeBasedVoterExample = Template.bind({});
AttributeBasedVoterExample.args = {
  variant: "rectangle-horizontal-half",
  attributes: { id: "article-2" },
  voter: (articles, attributes) => {
    return (
      articles.find((article) => article.metadata?.id === attributes?.id) ||
      articles[0]
    );
  },
};
AttributeBasedVoterExample.parameters = {
  docs: {
    source: {
      code: `
<BannerPosition
  variant="rectangle-horizontal-half"
  attributes={{ id: "article-2" }}
  voter={(articles, attributes) =>
    articles.find(article => article.metadata?.id === attributes?.id) || articles[0]
  }
/>
      `,
    },
  },
};

/**
 * Explanation:
 * This story showcases how to use `attributes` in conjunction with a custom `voter`.
 * By setting `attributes` to `{ id: "article-2" }`, the `voter` function
 * locates and returns the article with a matching `metadata.id`.
 * This is useful for displaying specific articles based on unique identifiers.
 */

// **Story: Category-Based Voter Example**
/**
 * This story demonstrates how to use `attributes` to filter articles by category.
 * The voter function filters articles to find one with a matching category.
 */
export const CategoryBasedVoterExample = Template.bind({});
CategoryBasedVoterExample.args = {
  variant: "square-full",
  attributes: { category: "Science" },
  voter: (articles, attributes) => {
    return (
      articles.find((article) =>
        article.title
          .toLowerCase()
          .includes(
            typeof attributes?.category === "string"
              ? attributes.category.toLowerCase()
              : ""
          )
      ) || articles[0]
    );
  },
};
CategoryBasedVoterExample.parameters = {
  docs: {
    source: {
      code: `
<BannerPosition
  variant="square-full"
  attributes={{ category: "Science" }}
  voter={(articles, attributes) =>
    articles.find(article =>
      article.title.toLowerCase().includes(attributes?.category?.toLowerCase())
    ) || articles[0]
  }
/>
      `,
    },
  },
};

/**
 * Explanation:
 * This story shows how `attributes` can use categories to filter articles.
 * Setting `attributes` to `{ category: "Science" }`, the `voter` function finds articles
 * containing "Science" in the title, useful for categorizing content.
 */

// **Story: Dev Mode with Attributes Example**
/**
 * This story demonstrates `devMode` with additional attributes.
 * When `devMode` is true, BannerPosition displays placeholder content and any provided attributes.
 */
export const DevModeWithAttributesExample = Template.bind({});
DevModeWithAttributesExample.args = {
  variant: "rectangle-horizontal-full",
  devMode: true,
  attributes: { id: "dev-article", category: "Exclusive", tag: "Featured" },
};
DevModeWithAttributesExample.parameters = {
  docs: {
    source: {
      code: `
<BannerPosition
  variant="rectangle-horizontal-full"
  devMode={true}
  attributes={{ id: "dev-article", category: "Exclusive", tag: "Featured" }}
/>
      `,
    },
  },
};

/**
 * Explanation:
 * In this story, `devMode` is activated with specific attributes.
 * This allows the component to display placeholder content along with the attributes.
 * Useful for development and testing without needing real data.
 */

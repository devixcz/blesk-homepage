import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Banner from "./Banner";
import { BannerProps } from "./Banner/Types";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import { Container } from "@mui/material";

export default {
  title: "Components/Banner",
  component: Banner,
  decorators: [
    (StoryComponent) => (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ overflow: "hidden", width: "1024px" }}>
          <StoryComponent />
        </Container>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />;

// Explanation for Story 1
/**
 * This story demonstrates the "rectangle-horizontal-full" banner variant.
 * You can experiment with different banner variants like "rectangle-horizontal-half", "square-two-thirds", etc.
 * Each variant affects the layout and typography dimensions, so the banner adjusts based on the variant used.
 */
export const BannerVariantsExample = Template.bind({});
BannerVariantsExample.args = {
  variant: "rectangle-horizontal-full",
  content: {
    title: "Breaking News: Celebrities in the Spotlight",
    href: "/articles/1",
    overline: "Entertainment",
    image: "https://picsum.photos/800/600?random=1",
  },
};
BannerVariantsExample.parameters = {
  docs: {
    source: {
      code: `
<Banner 
  variant="rectangle-horizontal-full" 
  content={{
    title: "Breaking News: Celebrities in the Spotlight",
    href: "/articles/1",
    overline: "Entertainment",
    image: "https://picsum.photos/800/600?random=1"
  }}
/>
      `,
    },
  },
};
BannerVariantsExample.storyName = "Banner Variants";

// Explanation for Story 2
/**
 * This story shows the "rectangle-horizontal-half" banner with centered text alignment.
 * The textAlign prop allows you to control the horizontal alignment of the banner content.
 * Other options for textAlign include "left" (default) and "right".
 */
export const TextAlignExample = Template.bind({});
TextAlignExample.args = {
  variant: "rectangle-horizontal-half",
  content: {
    title: "Exclusive Interview: Inside the World of Celebrities",
    href: "/articles/2",
    overline: "Feature",
    image: "https://picsum.photos/800/600?random=2",
  },
  textAlign: "center",
};
TextAlignExample.parameters = {
  docs: {
    source: {
      code: `
<Banner 
  variant="rectangle-horizontal-half" 
  content={{
    title: "Exclusive Interview: Inside the World of Celebrities",
    href: "/articles/2",
    overline: "Feature",
    image: "https://picsum.photos/800/600?random=2"
  }}
  textAlign="center"
/>
      `,
    },
  },
};
TextAlignExample.storyName = "Text Alignment Options";

// Explanation for Story 3
/**
 * This story demonstrates the adaptive images feature.
 * The `image` prop here provides a different image URL for each banner variant.
 * This allows the banner to display images optimized for each variant's dimensions.
 */
export const AdaptiveImagesExample = Template.bind({});
AdaptiveImagesExample.args = {
  variant: "square-full",
  content: {
    title: "Major Update: New Releases in the Entertainment Industry",
    href: "/articles/3",
    overline: "Latest News",
    image: {
      default: "https://picsum.photos/600/400?random=3",
      "square-full": "https://picsum.photos/800/800?random=4",
      "rectangle-horizontal-half": "https://picsum.photos/800/400?random=5",
    },
  },
};
AdaptiveImagesExample.parameters = {
  docs: {
    source: {
      code: `
<Banner 
  variant="square-full" 
  content={{
    title: "Major Update: New Releases in the Entertainment Industry",
    href: "/articles/3",
    overline: "Latest News",
    image: {
      default: "https://picsum.photos/600/400?random=3",
      "square-full": "https://picsum.photos/800/800?random=4",
      "rectangle-horizontal-half": "https://picsum.photos/800/400?random=5"
    }
  }}
/>
      `,
    },
  },
};
AdaptiveImagesExample.storyName = "Adaptive Images Example";

// Explanation for Story 4
/**
 * This story shows a long title that spans multiple lines.
 * The Banner component uses `line-clamp` and ellipsis overflow to control text length,
 * ensuring that the title fits within the designated area.
 */
export const TextLengthExample = Template.bind({});
TextLengthExample.args = {
  variant: "square-two-thirds",
  content: {
    title:
      "This is a really long title that will demonstrate how the component handles multiple lines and truncates them when necessary to fit within the design limits",
    href: "/articles/4",
    overline: "Long-Text Showcase",
    image: "https://picsum.photos/800/600?random=6",
  },
};
TextLengthExample.parameters = {
  docs: {
    source: {
      code: `
<Banner 
  variant="square-two-thirds" 
  content={{
    title: "This is a really long title that will demonstrate how the component handles multiple lines and truncates them when necessary to fit within the design limits",
    href: "/articles/4",
    overline: "Long-Text Showcase",
    image: "https://picsum.photos/800/600?random=6"
  }}
/>
      `,
    },
  },
};
TextLengthExample.storyName = "Different Text Lengths";

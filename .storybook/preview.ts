import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import type { Preview } from '@storybook/react';

import DocumentationTemplate from './DocumentationTemplate.mdx';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'requiredFirst',
    },
    docs: {
      page: DocumentationTemplate,
      toc: {
        headingSelector: 'h1, h2, h3',
        title: 'Contents',
      },
    },
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default preview;

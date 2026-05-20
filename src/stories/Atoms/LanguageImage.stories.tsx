import type { Meta, StoryObj } from '@storybook/react';

import { LanguageImage } from '../../components/LanguageImage';

const meta = {
  title: 'Atoms/Dropdowns/LanguageImage',
  component: LanguageImage,
  tags: ['autodocs'],
  args: {
    language: 'english',
    size: 40,
  },
  argTypes: {
    language: {
      description: 'Language variant from Figma.',
      control: { type: 'radio' },
      options: ['english', 'spanish'],
      table: {
        category: 'Content',
        defaultValue: { summary: 'english' },
        type: { summary: "'english' | 'spanish'" },
      },
    },
    size: {
      description: 'Image size in pixels.',
      control: { type: 'number', min: 24, max: 80, step: 4 },
      table: { category: 'Layout', defaultValue: { summary: '40' }, type: { summary: 'number' } },
    },
    label: {
      description: 'Accessible label. Defaults to the selected language.',
      control: { type: 'text' },
      table: { category: 'Accessibility', type: { summary: 'string' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7878-11296',
    },
    docs: {
      description: {
        component: 'LanguageImage visually identifies the selected language inside language dropdown patterns.',
      },
    },
  },
} satisfies Meta<typeof LanguageImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const Spanish: Story = {
  args: { language: 'spanish' },
};

export const Small: Story = {
  args: { size: 32 },
};

export const InDropdownRow: Story = {
  tags: ['!test'],
  render: () => (
    <div
      style={{
        alignItems: 'center',
        border: '1px solid #E6E6E6',
        borderRadius: 8,
        display: 'inline-flex',
        fontFamily: 'Open Sans, Arial, sans-serif',
        gap: 12,
        padding: '8px 12px',
      }}
    >
      <LanguageImage language="english" />
      <span style={{ color: '#434343', fontSize: 14, fontWeight: 600 }}>English</span>
    </div>
  ),
};

export const AllLanguages: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      <LanguageImage language="english" />
      <LanguageImage language="spanish" />
    </div>
  ),
};

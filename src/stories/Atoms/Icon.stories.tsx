import type { Meta, StoryObj } from '@storybook/react';

import { Icon, type IconName } from '../../components/Icon';

const iconNames: IconName[] = [
  'arrowLeft',
  'arrowRight',
  'bell',
  'chevronDown',
  'check',
  'document',
  'externalLink',
  'helpCircle',
  'info',
  'menu',
  'minus',
  'person',
  'plus',
  'globe',
  'search',
  'settings',
  'upload',
];

const meta = {
  title: 'Classic Components/Media/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: { name: 'info', title: 'Information', width: 24, height: 24 },
  argTypes: {
    name: { control: { type: 'select' }, options: iconNames, table: { category: 'Content' } },
    title: { control: 'text', table: { category: 'Accessibility' } },
    width: { control: { type: 'number', min: 12, max: 48, step: 2 }, table: { category: 'Layout' } },
    height: { control: { type: 'number', min: 12, max: 48, step: 2 }, table: { category: 'Layout' } },
  },
  parameters: {
    docs: {
      description: {
        component: 'Icon exposes the local typed SVG icon set used across buttons, navigation, headers, and feedback components.',
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IconGallery: Story = {
  args: { title: undefined },
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
      {iconNames.map((name) => (
        <div key={name} style={{ alignItems: 'center', color: '#313131', display: 'grid', gap: 8, justifyItems: 'center' }}>
          <Icon name={name} width={24} height={24} />
          <span style={{ fontFamily: 'Open Sans, Arial, sans-serif', fontSize: 12 }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

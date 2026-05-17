import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { ExternalLinkButton } from '../../components/ExternalLinkButton';

const meta = {
  title: 'Atoms/Buttons/ExternalLinkButton',
  component: ExternalLinkButton,
  tags: ['autodocs'],
  args: {
    label: 'External Link',
    href: '#external-link',
    textSize: 'medium',
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    label: {
      description: 'Visible link text.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    href: {
      description: 'Destination URL.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    textSize: {
      description: 'Text size.',
      control: { type: 'radio' },
      options: ['large', 'medium'],
      table: { category: 'Appearance', defaultValue: { summary: 'medium' }, type: { summary: "'large' | 'medium'" } },
    },
    disabled: {
      description: 'Prevents navigation.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    onClick: {
      description: 'Runs when the link is clicked.',
      table: { category: 'Events', type: { summary: '(event: React.MouseEvent) => void' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9182-7501',
    },
    docs: {
      description: {
        component: 'ExternalLinkButton opens a page outside the current app.',
      },
    },
  },
} satisfies Meta<typeof ExternalLinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {};

export const Large: Story = {
  args: { textSize: 'large' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Clickable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('link', { name: /external link/i }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

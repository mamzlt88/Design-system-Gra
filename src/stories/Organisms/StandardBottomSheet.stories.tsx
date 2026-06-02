import type { Meta, StoryObj } from '@storybook/react';

import { StandardBottomSheet } from '../../components/StandardBottomSheet';

const meta = {
  title: 'Classic Components/Overlays/StandardBottomSheet',
  component: StandardBottomSheet,
  tags: ['autodocs'],
  args: { title: 'Confirm action', description: 'Review the information before continuing.', primaryLabel: 'Continue', secondaryLabel: 'Cancel' },
  argTypes: {
    title: { control: 'text', table: { category: 'Content' } },
    description: { control: 'text', table: { category: 'Content' } },
    primaryLabel: { control: 'text', table: { category: 'Content' } },
    secondaryLabel: { control: 'text', table: { category: 'Content' } },
    onPrimaryClick: { action: 'primary click', table: { category: 'Events' } },
    onSecondaryClick: { action: 'secondary click', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7482-653' },
    docs: { description: { component: 'StandardBottomSheet is a presentational bottom-sheet surface with controlled action events. App-level overlays own focus trapping, escape close, and dismissal behavior.' } },
  },
} satisfies Meta<typeof StandardBottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

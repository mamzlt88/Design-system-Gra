import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { AmountSelector } from '../../components/AmountSelector';

const meta = {
  title: 'Atoms/Buttons/AmountSelector',
  component: AmountSelector,
  tags: ['autodocs'],
  args: {
    value: 'Value',
    state: 'initial',
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    value: {
      description: 'Visible amount or placeholder.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    state: {
      description: 'Whether the amount is empty or selected.',
      control: { type: 'radio' },
      options: ['initial', 'default'],
      table: { category: 'State', defaultValue: { summary: 'initial' }, type: { summary: "'initial' | 'default'" } },
    },
    disabled: {
      description: 'Prevents opening the amount choice flow.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    onClick: {
      description: 'Runs when the selector is clicked.',
      table: { category: 'Events', type: { summary: '(event: React.MouseEvent) => void' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=8273-7829',
    },
    docs: {
      description: {
        component: 'AmountSelector shows a starting placeholder or a selected amount.',
      },
    },
  },
} satisfies Meta<typeof AmountSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {};

export const Selected: Story = {
  args: { value: 'Value', state: 'default' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Clickable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /select amount/i }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

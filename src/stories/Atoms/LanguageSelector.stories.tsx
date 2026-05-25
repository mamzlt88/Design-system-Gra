import type { Meta, StoryObj } from '@storybook/react';

import { LanguageSelector } from '../../components/LanguageSelector';

const states = ['default', 'pressed', 'selected'] as const;

const meta = {
  title: 'Classic Components/Media/LanguageSelector',
  component: LanguageSelector,
  tags: ['autodocs'],
  args: { state: 'default', langText: 'Eng', imageLabel: 'English' },
  argTypes: {
    state: { control: { type: 'select' }, options: states, table: { category: 'State' } },
    langText: { control: 'text', table: { category: 'Content' } },
    imageLabel: { control: 'text', table: { category: 'Accessibility' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9274-12691' },
    docs: { description: { component: 'LanguageSelector displays a selectable language option with sourced default, pressed, and selected states.' } },
  },
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Pressed: Story = { args: { state: 'pressed' } };
export const Selected: Story = { args: { state: 'selected' } };
export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {states.map((state) => <LanguageSelector key={state} state={state} />)}
    </div>
  ),
};

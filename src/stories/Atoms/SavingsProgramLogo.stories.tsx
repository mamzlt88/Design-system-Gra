import type { Meta, StoryObj } from '@storybook/react';

import { SavingsProgramLogo } from '../../components/SavingsProgramLogo';

const types = ['small', 'medium'] as const;

const meta = {
  title: 'Domain Components/Brand/SavingsProgramLogo',
  component: SavingsProgramLogo,
  tags: ['autodocs'],
  args: { type: 'small', label: 'Savings Program logo' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    label: { control: 'text', table: { category: 'Accessibility' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=8625-10563' },
    docs: { description: { component: 'SavingsProgramLogo maps the small and medium Figma sizes. Artwork is approximated until the embedded JPG is exported.' } },
  },
} satisfies Meta<typeof SavingsProgramLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};
export const Medium: Story = { args: { type: 'medium' } };
export const SizeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: 32 }}>
      {types.map((type) => <SavingsProgramLogo key={type} type={type} />)}
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';

import { WebHeader, type WebHeaderProps } from '../../components/WebHeader';

const sizes = ['mobile', 'tabletDesktop'] as const;
const states = ['default', 'loading'] as const;

function WebHeaderCanvas(args: WebHeaderProps) {
  const targetWidth = args.size === 'mobile' ? 390 : 520;
  const { style, ...webHeaderProps } = args;

  return (
    <div style={{ boxSizing: 'border-box', maxWidth: '100%', width: targetWidth }}>
      <WebHeader {...webHeaderProps} style={{ ...style, width: '100%' }} />
    </div>
  );
}

const meta = {
  title: 'Classic Components/Navigation/WebHeader',
  component: WebHeader,
  tags: ['autodocs'],
  args: { size: 'tabletDesktop', state: 'default', countryLabel: 'US', languageLabel: 'Eng' },
  render: (args) => <WebHeaderCanvas {...args} />,
  argTypes: {
    size: { control: { type: 'select' }, options: sizes, table: { category: 'Variant' } },
    state: { control: { type: 'select' }, options: states, table: { category: 'State' } },
    countryLabel: { control: 'text', table: { category: 'Content' } },
    languageLabel: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7994-1560' },
    docs: {
      description: {
        component: 'WebHeader represents the Figma Web Header component set: mobile and tablet/desktop sizes with default and loading states.',
      },
    },
  },
} satisfies Meta<typeof WebHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabletDesktopDefault: Story = {};
export const MobileDefault: Story = { args: { size: 'mobile' } };
export const TabletDesktopLoading: Story = { args: { state: 'loading' } };
export const MobileLoading: Story = { args: { size: 'mobile', state: 'loading' } };

export const ReferenceMatrix: Story = {
  tags: ['!test', '!dev'],
  parameters: {
    docs: {
      description: {
        story: 'The matrix mirrors the Figma Web Header reference: size rows and default/loading state columns.',
      },
    },
  },
  render: (args) => (
    <div style={{ backgroundColor: '#FFFFFF', color: '#313131', display: 'grid', gap: 24, padding: 24 }}>
      {sizes.map((size) => (
        <section key={size} style={{ display: 'grid', gap: 10 }}>
          <h3 style={{ color: '#313131', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 18, margin: 0 }}>{size}</h3>
          <div style={{ alignItems: 'start', display: 'grid', gap: 12 }}>
            {states.map((state) => (
              <div key={`${size}-${state}`} style={{ display: 'grid', gap: 6 }}>
                <span style={{ color: '#5C5C5C', fontFamily: 'Open Sans, Arial, sans-serif', fontSize: 12, fontWeight: 700 }}>{state}</span>
                <WebHeaderCanvas {...args} size={size} state={state} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

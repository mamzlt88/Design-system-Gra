import type { Meta, StoryObj } from '@storybook/react';

import { AppHeader, type AppHeaderSize, type AppHeaderType } from '../../components/AppHeader';

const sizes = ['large', 'medium', 'mediumRounded', 'small'] as const;
const types = ['standard', 'informative', 'navigational', 'profile'] as const;

const meta = {
  title: 'Classic Components/Navigation/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  args: {
    size: 'large',
    type: 'standard',
    title1: 'Header Title 1',
    title2: 'Header Title 2',
    label1: 'Label 1:',
    label2: 'Label 2:',
    value1: 'Value 1',
    value2: 'Value 2',
    description: 'Description that gives detailed information about the current status or next steps the user should take.',
    mainMessage: 'Main Message.',
    name: 'Full Name',
    business: 'Type of Business',
    counter: '1 of 8',
    primaryLabel: 'Approve',
    secondaryLabel: 'Decline',
  },
  argTypes: {
    size: { control: { type: 'select' }, options: sizes, table: { category: 'Variant' } },
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    title1: { control: 'text', table: { category: 'Content' } },
    title2: { control: 'text', table: { category: 'Content' } },
    label1: { control: 'text', table: { category: 'Content' } },
    label2: { control: 'text', table: { category: 'Content' } },
    value1: { control: 'text', table: { category: 'Content' } },
    value2: { control: 'text', table: { category: 'Content' } },
    description: { control: 'text', table: { category: 'Content' } },
    mainMessage: { control: 'text', table: { category: 'Content' } },
    name: { control: 'text', table: { category: 'Content' } },
    business: { control: 'text', table: { category: 'Content' } },
    counter: { control: 'text', table: { category: 'Content' } },
    primaryLabel: { control: 'text', table: { category: 'Content' } },
    secondaryLabel: { control: 'text', table: { category: 'Content' } },
    showLanguage: { control: 'boolean', table: { category: 'Content' } },
    showNotice: { control: 'boolean', table: { category: 'Content' } },
    notice: { control: 'text', table: { category: 'Content' } },
    onBack: { action: 'back', table: { category: 'Events' } },
    onPrimaryClick: { action: 'primary click', table: { category: 'Events' } },
    onSecondaryClick: { action: 'secondary click', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7591-4171' },
    docs: {
      description: {
        component:
          'AppHeader represents the Figma App Header component set. The header surface uses the sourced Primary/Gradient/Linear color style, with Standard, Informative, Navigational, and Profile variants across the sourced mobile sizes.',
      },
    },
  },
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardLarge: Story = {};
export const StandardMedium: Story = { args: { size: 'medium' } };
export const StandardMediumRounded: Story = { args: { size: 'mediumRounded' } };
export const StandardSmall: Story = { args: { size: 'small' } };

export const InformativeLarge: Story = { args: { type: 'informative' } };
export const InformativeMedium: Story = { args: { size: 'medium', type: 'informative' } };
export const InformativeMediumRounded: Story = { args: { size: 'mediumRounded', type: 'informative' } };
export const InformativeSmall: Story = { args: { size: 'small', type: 'informative' } };

export const NavigationalLarge: Story = { args: { type: 'navigational' } };
export const NavigationalMedium: Story = { args: { size: 'medium', type: 'navigational' } };
export const NavigationalMediumRounded: Story = { args: { size: 'mediumRounded', type: 'navigational' } };

export const ProfileLarge: Story = { args: { type: 'profile' } };
export const ProfileMedium: Story = { args: { size: 'medium', type: 'profile' } };

const matrixRows: Array<{ label: string; variants: Array<{ size: AppHeaderSize; type: AppHeaderType }> }> = [
  {
    label: 'Standard',
    variants: [
      { size: 'large', type: 'standard' },
      { size: 'medium', type: 'standard' },
      { size: 'mediumRounded', type: 'standard' },
      { size: 'small', type: 'standard' },
    ],
  },
  {
    label: 'Informative',
    variants: [
      { size: 'large', type: 'informative' },
      { size: 'medium', type: 'informative' },
      { size: 'mediumRounded', type: 'informative' },
      { size: 'small', type: 'informative' },
    ],
  },
  {
    label: 'Navigational',
    variants: [
      { size: 'large', type: 'navigational' },
      { size: 'medium', type: 'navigational' },
      { size: 'mediumRounded', type: 'navigational' },
    ],
  },
  {
    label: 'Profile',
    variants: [
      { size: 'large', type: 'profile' },
      { size: 'medium', type: 'profile' },
    ],
  },
];

export const ReferenceMatrix: Story = {
  tags: ['!test', '!dev'],
  parameters: {
    docs: {
      description: {
        story: 'The variant matrix mirrors the Figma App Header reference: rows are header types and columns are the supported mobile sizes.',
      },
    },
  },
  render: (args) => (
    <div style={{ backgroundColor: '#FFFFFF', color: '#313131', display: 'grid', gap: 24, padding: 24 }}>
      {matrixRows.map((row) => (
        <section key={row.label} style={{ display: 'grid', gap: 10 }}>
          <h3 style={{ color: '#313131', fontFamily: 'Raleway, Open Sans, Arial, sans-serif', fontSize: 18, margin: 0 }}>{row.label}</h3>
          <div style={{ alignItems: 'start', display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {row.variants.map((variant) => (
              <div key={`${variant.type}-${variant.size}`} style={{ display: 'grid', gap: 6 }}>
                <span style={{ color: '#5C5C5C', fontFamily: 'Open Sans, Arial, sans-serif', fontSize: 12, fontWeight: 700 }}>
                  {variant.size}
                </span>
                <AppHeader {...args} size={variant.size} type={variant.type} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

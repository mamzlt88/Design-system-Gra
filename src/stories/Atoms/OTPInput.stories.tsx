import type { Meta, StoryObj } from '@storybook/react';

import { OTPInput } from '../../components/OTPInput';

const meta = {
  title: 'Atoms/Text Fields/OTPInput',
  component: OTPInput,
  tags: ['autodocs'],
  args: {
    value: '',
    length: 6,
    activeIndex: undefined,
    hasError: false,
    showSupportingText: true,
    supportingText: 'Supporting Text',
    label: 'One-time passcode',
  },
  argTypes: {
    value: {
      description: 'Controlled OTP value as a simple string.',
      control: { type: 'text' },
      table: {
        category: 'Content',
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
    length: {
      description: 'Number of digit boxes.',
      control: { type: 'number', min: 1, max: 6 },
      table: {
        category: 'Structure',
        defaultValue: { summary: '6' },
        type: { summary: 'number' },
      },
    },
    activeIndex: {
      description: 'Index of the active digit box.',
      control: { type: 'number', min: 0, max: 5 },
      table: {
        category: 'State',
        type: { summary: 'number | undefined' },
      },
    },
    hasError: {
      description: 'Applies error states to active and filled boxes.',
      control: 'boolean',
      table: {
        category: 'State',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    showSupportingText: {
      description: 'Maps the Figma Show_Supp.Text property.',
      control: 'boolean',
      table: {
        category: 'Content',
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    supportingText: {
      description: 'Supporting text shown below the OTP boxes.',
      control: { type: 'text' },
      table: {
        category: 'Content',
        defaultValue: { summary: 'Supporting Text' },
        type: { summary: 'string' },
      },
    },
    label: {
      description: 'Accessible group label.',
      control: { type: 'text' },
      table: {
        category: 'Accessibility',
        defaultValue: { summary: 'One-time passcode' },
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7878-736',
    },
    docs: {
      description: {
        component: 'OTPInput composes six OTPInputBox slots and supporting text from the Figma OTP input component.',
      },
    },
  },
} satisfies Meta<typeof OTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Active: Story = {
  args: { activeIndex: 1, value: '2' },
};

export const Filled: Story = {
  args: { value: '234567', showSupportingText: false },
};

export const Error: Story = {
  args: { activeIndex: 1, hasError: true, value: '2', supportingText: 'Enter the code again' },
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <OTPInput showSupportingText={false} value="" />
      <OTPInput activeIndex={1} value="2" />
      <OTPInput showSupportingText={false} value="234567" />
      <OTPInput activeIndex={1} hasError supportingText="Enter the code again" value="2" />
    </div>
  ),
};

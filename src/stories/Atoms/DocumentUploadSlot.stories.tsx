import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { DocumentUploadSlot, type DocumentUploadSlotProps } from '../../components/DocumentUploadSlot';

// Story-only state keeps DocumentUploadSlot controlled by props while demonstrating uploaded and pressed states.
function InteractiveDocumentUploadSlot(args: DocumentUploadSlotProps) {
  const [uploaded, setUploaded] = useState(args.state === 'uploaded');
  const [pressed, setPressed] = useState(false);

  return (
    <DocumentUploadSlot
      {...args}
      state={args.disabled ? args.state : pressed ? 'pressed' : uploaded ? 'uploaded' : 'default'}
      onClick={(event) => {
        setUploaded((current) => !current);
        args.onClick?.(event);
      }}
      onMouseDown={(event) => {
        setPressed(true);
        args.onMouseDown?.(event);
      }}
      onMouseUp={(event) => {
        setPressed(false);
        args.onMouseUp?.(event);
      }}
      onMouseLeave={(event) => {
        setPressed(false);
        args.onMouseLeave?.(event);
      }}
    />
  );
}

const meta = {
  title: 'Classic Components/Inputs/DocumentUploadSlot',
  component: DocumentUploadSlot,
  tags: ['autodocs'],
  args: {
    instructionText: 'Instruction\nText',
    requirement: 'required',
    typeLabel: '(Type)',
    showType: true,
    state: 'default',
    fileName: 'identity.pdf',
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    instructionText: {
      description: 'Main guidance text.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    requirement: {
      description: 'Whether the document is required.',
      control: { type: 'radio' },
      options: ['none', 'optional', 'required'],
      table: { category: 'Content', defaultValue: { summary: 'required' }, type: { summary: "'none' | 'optional' | 'required'" } },
    },
    typeLabel: {
      description: 'Helper label shown under the instruction.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    showType: {
      description: 'Shows or hides the helper label.',
      control: { type: 'boolean' },
      table: { category: 'Content', defaultValue: { summary: 'true' }, type: { summary: 'boolean' } },
    },
    state: {
      description: 'Current upload state.',
      control: { type: 'radio' },
      options: ['default', 'pressed', 'uploaded'],
      table: { category: 'State', defaultValue: { summary: 'default' }, type: { summary: "'default' | 'pressed' | 'uploaded'" } },
    },
    fileName: {
      description: 'Uploaded file name.',
      control: { type: 'text' },
      table: { category: 'Content', type: { summary: 'string' } },
    },
    disabled: {
      description: 'Prevents opening the upload flow.',
      control: { type: 'boolean' },
      table: { category: 'State', defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    onClick: {
      description: 'Runs when the upload slot is clicked.',
      table: { category: 'Events', type: { summary: '(event: React.MouseEvent) => void' } },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=9304-2207',
    },
    docs: {
      description: {
        component: 'DocumentUploadSlot is the place where a person can add or review a document.',
      },
    },
  },
} satisfies Meta<typeof DocumentUploadSlot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Pressed: Story = {
  args: { state: 'pressed' },
};

export const Uploaded: Story = {
  args: { state: 'uploaded' },
};

export const Optional: Story = {
  args: { requirement: 'optional' },
};

export const WithoutType: Story = {
  args: { requirement: 'none', showType: false },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const InteractiveUpload: Story = {
  render: (args) => <InteractiveDocumentUploadSlot {...args} />,
};

export const Clickable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /instruction/i }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const AllStates: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <DocumentUploadSlot instructionText="Upload proof of identity" requirement="required" typeLabel="(PDF or image)" />
      <DocumentUploadSlot instructionText="Upload proof of income" requirement="optional" state="pressed" typeLabel="(PDF)" />
      <DocumentUploadSlot instructionText="Proof uploaded" requirement="required" state="uploaded" fileName="identity.pdf" typeLabel="(PDF)" />
      <DocumentUploadSlot instructionText="Optional upload" requirement="optional" typeLabel="(PDF)" />
      <DocumentUploadSlot instructionText="Upload supporting document" requirement="none" showType={false} />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';

import { AttendanceReportRows } from '../../components/AttendanceReportRows';

const types = ['content', 'header'] as const;

const meta = {
  title: 'Domain Components/Payments & Loans/AttendanceReportRows',
  component: AttendanceReportRows,
  tags: ['autodocs'],
  args: { type: 'content', memberName: 'Maria Lopez', attendedLabel: '8', missedLabel: '1' },
  argTypes: {
    type: { control: { type: 'select' }, options: types, table: { category: 'Variant' } },
    semantic: { control: 'boolean', table: { category: 'Accessibility' } },
    memberName: { control: 'text', table: { category: 'Content' } },
    attendedLabel: { control: 'text', table: { category: 'Content' } },
    missedLabel: { control: 'text', table: { category: 'Content' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7486-956' },
    docs: { description: { component: 'AttendanceReportRows represents the sourced header and content row variants for attendance reports.' } },
  },
} satisfies Meta<typeof AttendanceReportRows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {};
export const Header: Story = { args: { type: 'header' } };
export const TypeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div role="table" style={{ border: '1px solid #E6E6E6', maxWidth: 560 }}>
      <AttendanceReportRows semantic type="header" />
      <AttendanceReportRows semantic />
    </div>
  ),
};

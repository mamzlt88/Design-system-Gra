import { useEffect, useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NavigationBar, type NavigationBarSection } from '../../components/NavigationBar';

const languages = ['English', 'Spanish'] as const;
const sections = ['My Loan', 'Payments', 'New Loan', 'Approvals', 'Resources', 'None'] as const;
const pressedSections = ['My Loan', 'Payments', 'New Loan', 'Approvals', 'Resources'] as const;

const meta = {
  title: 'Atoms/Navigation Bars/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
  args: { language: 'English', section: 'My Loan', ariaLabel: 'Primary navigation' },
  argTypes: {
    language: { control: { type: 'select' }, options: languages, table: { category: 'Variant' } },
    section: { control: { type: 'select' }, options: sections, table: { category: 'Variant' } },
    pressedSection: { control: { type: 'select' }, options: pressedSections, table: { category: 'Interaction' } },
    ariaLabel: { control: 'text', table: { category: 'Accessibility' } },
    onNavigate: { action: 'navigate', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7407-2558' },
    docs: {
      description: {
        component: 'NavigationBar is the bottom app navigation organism for switching between the main loan, payment, approval, and resource sections.',
      },
    },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveNavigationBar(args: ComponentProps<typeof NavigationBar>) {
  // Story-only state: clicking a navigation item updates the selected section.
  const [selectedSection, setSelectedSection] = useState<NavigationBarSection>(args.section ?? 'My Loan');

  useEffect(() => {
    setSelectedSection(args.section ?? 'My Loan');
  }, [args.section]);

  return (
    <NavigationBar
      {...args}
      section={selectedSection}
      onNavigate={(nextSection) => {
        setSelectedSection(nextSection);
        args.onNavigate?.(nextSection);
      }}
    />
  );
}

export const MyLoan: Story = {
  render: (args) => <InteractiveNavigationBar {...args} />,
};

export const Payments: Story = {
  args: { section: 'Payments' },
  render: (args) => <InteractiveNavigationBar {...args} />,
};

export const Resources: Story = {
  args: { section: 'Resources' },
  render: (args) => <InteractiveNavigationBar {...args} />,
};

export const Spanish: Story = {
  args: { language: 'Spanish', section: 'Payments' },
  render: (args) => <InteractiveNavigationBar {...args} />,
};

export const LanguageExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      <NavigationBar language="English" section="My Loan" />
      <NavigationBar language="Spanish" section="My Loan" />
    </div>
  ),
};

export const InteractionExamples: Story = {
  tags: ['!test', '!dev'],
  render: (args) => <InteractiveNavigationBar {...args} />,
};

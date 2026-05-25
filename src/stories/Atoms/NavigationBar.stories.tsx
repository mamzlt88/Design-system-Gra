import { useEffect, useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NavigationBar, type NavigationBarSection } from '../../components/NavigationBar';
import { SectionBar, type SectionBarProps } from '../../components/SectionBar';

const languages = ['English', 'Spanish'] as const;
const sections = ['My Loan', 'Payments', 'New Loan', 'Approvals', 'Resources', 'None'] as const;
const pressedSections = ['My Loan', 'Payments', 'New Loan', 'Approvals', 'Resources'] as const;
const sectionBarStates = ['default', 'selected'] as const;
const sectionBarIcons = ['loan', 'payments', 'newLoan', 'approvals', 'resources', 'document'] as const;
const sectionBarInteractionItems = [
  { label: 'My Loan', icon: 'loan' },
  { label: 'Payments', icon: 'payments' },
  { label: 'New Loan', icon: 'newLoan' },
  { label: 'Approvals', icon: 'approvals' },
  { label: 'Resources', icon: 'resources' },
] as const;

const meta = {
  title: 'Classic Components/Navigation/NavigationBar',
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
type SectionBarStory = StoryObj<SectionBarProps>;

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

function InteractiveSectionBarInteractions() {
  const [pressedItem, setPressedItem] = useState<(typeof sectionBarInteractionItems)[number]['label']>('My Loan');

  return (
    <div style={{ display: 'grid', gap: 24, width: 390 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
        {sectionBarInteractionItems.map((item) => (
          <SectionBar
            key={item.label}
            aria-pressed={pressedItem === item.label}
            icon={item.icon}
            interaction={pressedItem === item.label ? 'pressed' : 'default'}
            label={item.label}
            onClick={() => setPressedItem(item.label)}
          />
        ))}
      </div>
    </div>
  );
}

export const MyLoan: Story = {
  render: (args) => <InteractiveNavigationBar {...args} />,
};

export const Payments: Story = {
  args: { section: 'Payments' },
  render: (args) => <InteractiveNavigationBar {...args} />,
};

export const NewLoan: Story = {
  args: { section: 'New Loan' },
  render: (args) => <InteractiveNavigationBar {...args} />,
};

export const Approvals: Story = {
  args: { section: 'Approvals' },
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

export const SectionBarStates: SectionBarStory = {
  tags: ['!test'],
  args: {
    badgeLabel: 'New activity',
    icon: 'loan',
    label: 'Section',
    showBadge: false,
    state: 'default',
  },
  argTypes: {
    badgeLabel: { control: 'text', table: { category: 'Badge' } },
    icon: { control: { type: 'select' }, options: sectionBarIcons, table: { category: 'Variant' } },
    label: { control: 'text', table: { category: 'Content' } },
    showBadge: { control: 'boolean', table: { category: 'Badge' } },
    state: { control: { type: 'select' }, options: sectionBarStates, table: { category: 'State' } },
  },
  parameters: {
    controls: { include: ['label', 'icon', 'state', 'showBadge', 'badgeLabel'] },
  },
  render: ({ badgeLabel, icon, label, showBadge, state }) => (
    <div style={{ display: 'grid', gap: 24, width: 390 }}>
      <SectionBar badgeLabel={badgeLabel} icon={icon} label={label} showBadge={showBadge} state={state} />
    </div>
  ),
};

export const SectionBarInteractions: Story = {
  tags: ['!test'],
  render: () => <InteractiveSectionBarInteractions />,
};

import { useEffect, useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InformationButton, type InformationButtonState } from '../../components/InformationButton';

const states = ['enabled', 'pressed', 'tooltipOpen'] as const;
const textSizes = ['medium', 'small'] as const;

const meta = {
  title: 'Organisms/Buttons/InformationButton',
  component: InformationButton,
  tags: ['autodocs'],
  args: {
    label: 'Why is this needed?',
    state: 'enabled',
    textSize: 'medium',
    tooltipText: 'This information helps explain why the user is being asked for this step.',
  },
  argTypes: {
    label: { control: 'text', table: { category: 'Content' } },
    state: { control: { type: 'select' }, options: states, table: { category: 'State' } },
    textSize: { control: { type: 'select' }, options: textSizes, table: { category: 'Variant' } },
    tooltipText: { control: 'text', table: { category: 'Content' } },
    tooltipId: { control: 'text', table: { category: 'Accessibility' } },
    onClick: { action: 'click', table: { category: 'Events' } },
  },
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-?node-id=7521-7432' },
    docs: {
      description: {
        component: 'InformationButton is an organism-level helper action with enabled, pressed, and tooltip-open states.',
      },
    },
  },
} satisfies Meta<typeof InformationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveInformationButton(args: ComponentProps<typeof InformationButton>) {
  // Story-only state: clicking toggles the sourced Tooltip Open state.
  const [storyState, setStoryState] = useState<InformationButtonState>(args.state ?? 'enabled');

  useEffect(() => {
    setStoryState(args.state ?? 'enabled');
  }, [args.state]);

  return (
    <InformationButton
      {...args}
      state={storyState}
      onClick={(event) => {
        setStoryState((current) => (current === 'tooltipOpen' ? 'enabled' : 'tooltipOpen'));
        args.onClick?.(event);
      }}
    />
  );
}

export const Enabled: Story = {
  render: (args) => <InteractiveInformationButton {...args} />,
};

export const Pressed: Story = {
  args: { state: 'pressed' },
};

export const TooltipOpen: Story = {
  args: { state: 'tooltipOpen' },
};

export const Small: Story = {
  args: { textSize: 'small' },
};

export const StateExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'start', display: 'flex', flexWrap: 'wrap', gap: 96, minHeight: 128 }}>
      {states.map((state) => (
        <InformationButton
          key={state}
          label={state === 'tooltipOpen' ? 'Tooltip open' : state === 'pressed' ? 'Pressed' : 'Enabled'}
          state={state}
          tooltipText="This tooltip is controlled by the sourced Tooltip Open state."
          tooltipId={`information-button-${state}`}
        />
      ))}
    </div>
  ),
};

export const TextSizeExamples: Story = {
  tags: ['!test', '!dev'],
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {textSizes.map((textSize) => (
        <InformationButton
          key={textSize}
          label={`${textSize === 'medium' ? 'Medium' : 'Small'} information`}
          textSize={textSize}
        />
      ))}
    </div>
  ),
};

export const InteractionExamples: Story = {
  tags: ['!test', '!dev'],
  render: (args) => <InteractiveInformationButton {...args} />,
};

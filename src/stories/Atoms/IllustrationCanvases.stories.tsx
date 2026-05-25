import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

type IllustrationVariant = {
  name: string;
  nodeId: string;
};

type VariantGroup = {
  name: string;
  nodeId: string;
  variants: IllustrationVariant[];
};

type StandaloneIllustration = {
  name: string;
  nodeId: string;
};

type IllustrationSection = {
  description: string;
  figmaNodeId: string;
  frameSize: string;
  groups: VariantGroup[];
  name: string;
  standalone?: StandaloneIllustration[];
};

const figmaFileUrl = 'https://www.figma.com/design/LuOSourQp644YKhg0MrCE0/UI_Kit_-In-progress-';

const sections: IllustrationSection[] = [
  {
    description: 'Investment submission, loading, error, persistent-error, and completion illustration states.',
    figmaNodeId: '7619:17945',
    frameSize: '1358 x 1228',
    groups: [
      {
        name: 'Proof of Investment',
        nodeId: '7619:17950',
        variants: [
          { name: 'Submit', nodeId: '7619:17990' },
          { name: 'Submitting', nodeId: '7619:23895' },
          { name: 'Error', nodeId: '7619:18860' },
          { name: 'Error Persists', nodeId: '7619:18086' },
          { name: 'Complete', nodeId: '7619:23879' },
        ],
      },
    ],
    name: 'Proof of Investment',
  },
  {
    description: 'Loan proposal illustrations plus the two loan-review progress illustrations in the same Figma canvas.',
    figmaNodeId: '5034:10002',
    frameSize: '1352 x 1939',
    groups: [
      {
        name: 'Loan Proposal',
        nodeId: '1958:3239',
        variants: [
          { name: 'Loan Amount', nodeId: '1958:3238' },
          { name: 'Questionnaire', nodeId: '1958:3236' },
          { name: 'Questionnaire Complete', nodeId: '7423:2610' },
          { name: 'ID Verification', nodeId: '1958:3237' },
          { name: 'Proof of Address', nodeId: '1958:3235' },
          { name: 'Continue Process', nodeId: '7423:342' },
          { name: 'Vertical Steps', nodeId: '7619:24961' },
        ],
      },
      {
        name: 'Loan Progress',
        nodeId: '9894:13516',
        variants: [
          { name: 'Loan Amount Change', nodeId: '9894:13515' },
          { name: 'Center Approval', nodeId: '9894:13514' },
        ],
      },
    ],
    name: 'Loan Proposal',
  },
  {
    description: 'Disbursement-ready, disbursed, error, and pending illustration states.',
    figmaNodeId: '7619:22492',
    frameSize: '970 x 1181',
    groups: [
      {
        name: 'Disbursement',
        nodeId: '7619:22497',
        variants: [
          { name: 'Ready', nodeId: '7619:23631' },
          { name: 'Disbursed', nodeId: '7619:23522' },
          { name: 'Error', nodeId: '7619:23404' },
          { name: 'Pending', nodeId: '7810:1255' },
        ],
      },
    ],
    name: 'Disbursement',
  },
  {
    description: 'Disabled approval states and the empty-state loan approvals illustration.',
    figmaNodeId: '7619:23996',
    frameSize: '1020 x 1303',
    groups: [
      {
        name: 'Approvals Disabled',
        nodeId: '7619:24001',
        variants: [
          { name: 'Overdue Payment', nodeId: '7619:24261' },
          { name: 'Not Eligible', nodeId: '7619:24812' },
        ],
      },
    ],
    name: 'Approvals',
    standalone: [{ name: 'Empty State Loan Approvals in Progress', nodeId: '9858:7482' }],
  },
];

const pageStyle: CSSProperties = {
  color: '#313131',
  display: 'grid',
  gap: 24,
  maxWidth: 1160,
};

const boardStyle: CSSProperties = {
  background: '#FFFFFF',
  border: '1px solid #D9E2E7',
  borderRadius: 8,
  display: 'grid',
  gap: 22,
  padding: 24,
};

const headerStyle: CSSProperties = {
  alignItems: 'start',
  display: 'grid',
  gap: 12,
  gridTemplateColumns: 'minmax(0, 1fr) auto',
};

const eyebrowStyle: CSSProperties = {
  color: '#0C6466',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 0,
  margin: 0,
  textTransform: 'uppercase',
};

const titleStyle: CSSProperties = {
  color: '#111827',
  fontFamily: 'Raleway, Open Sans, Arial, sans-serif',
  fontSize: 24,
  lineHeight: 1.2,
  margin: '4px 0 0',
};

const descriptionStyle: CSSProperties = {
  color: '#434343',
  fontSize: 14,
  lineHeight: 1.55,
  margin: '8px 0 0',
  maxWidth: 760,
};

const figmaMetaStyle: CSSProperties = {
  color: '#5C6B73',
  display: 'grid',
  fontSize: 12,
  gap: 4,
  justifyItems: 'end',
  lineHeight: 1.4,
  whiteSpace: 'nowrap',
};

const groupStyle: CSSProperties = {
  borderTop: '1px solid #E7EEF1',
  display: 'grid',
  gap: 14,
  paddingTop: 18,
};

const groupHeaderStyle: CSSProperties = {
  alignItems: 'baseline',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
};

const groupTitleStyle: CSSProperties = {
  color: '#111827',
  fontFamily: 'Raleway, Open Sans, Arial, sans-serif',
  fontSize: 18,
  lineHeight: 1.25,
  margin: 0,
};

const nodeTagStyle: CSSProperties = {
  background: '#F2F7F8',
  border: '1px solid #D7E6E8',
  borderRadius: 4,
  color: '#0C6466',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: 12,
  padding: '2px 6px',
};

const tileGridStyle: CSSProperties = {
  display: 'grid',
  gap: 14,
  gridTemplateColumns: 'repeat(auto-fit, minmax(156px, 1fr))',
};

const tileStyle: CSSProperties = {
  alignItems: 'center',
  background: '#F9FBFC',
  border: '1px solid #E1EAEE',
  borderRadius: 8,
  display: 'grid',
  gap: 10,
  justifyItems: 'center',
  minHeight: 148,
  padding: 14,
};

const labelStyle: CSSProperties = {
  color: '#313131',
  fontSize: 13,
  fontWeight: 700,
  lineHeight: 1.35,
  margin: 0,
  textAlign: 'center',
};

function figmaUrl(nodeId: string) {
  return `${figmaFileUrl}?node-id=${nodeId.replace(':', '-')}`;
}

function variantTone(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes('error') || lower.includes('overdue') || lower.includes('not eligible')) return 'error';
  if (lower.includes('complete') || lower.includes('disbursed') || lower.includes('approval')) return 'success';
  if (lower.includes('submitting') || lower.includes('pending')) return 'pending';
  if (lower.includes('step')) return 'steps';
  return 'ready';
}

function IllustrationPreview({ name }: { name: string }) {
  const tone = variantTone(name);
  const accent = tone === 'error' ? '#EF554E' : tone === 'success' ? '#0B7639' : tone === 'pending' ? '#FBB811' : '#0C989A';
  const soft = tone === 'error' ? '#FFEBEA' : tone === 'success' ? '#E3FFEF' : tone === 'pending' ? '#FFF4CF' : '#E7F7F8';
  const showCheck = tone === 'success';
  const showWarning = tone === 'error';
  const showClock = tone === 'pending';
  const showSteps = tone === 'steps';

  return (
    <svg aria-hidden="true" focusable="false" height="80" viewBox="0 0 120 80" width="120">
      <ellipse cx="60" cy="70" fill="#DDE8EF" rx="38" ry="4" />
      <path d="M32 18h44l12 12v32H32Z" fill="#FFFFFF" stroke="#A4C1DA" strokeWidth="2" />
      <path d="M76 18v13h12" fill="#E8F1F6" stroke="#A4C1DA" strokeWidth="2" />
      <rect fill={soft} height="29" rx="7" width="38" x="41" y="28" />
      {showSteps ? (
        <>
          <circle cx="49" cy="37" fill={accent} r="4" />
          <circle cx="60" cy="43" fill={accent} r="4" />
          <circle cx="71" cy="49" fill={accent} r="4" />
          <path d="M52 39 57 42M63 45l5 3" stroke="#0C6466" strokeLinecap="round" strokeWidth="2" />
        </>
      ) : (
        <circle cx="60" cy="42" fill={accent} r="13" />
      )}
      {showCheck ? <path d="m53 42 5 5 10-12" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /> : null}
      {showWarning ? (
        <>
          <path d="m60 32 14 24H46Z" fill={accent} />
          <path d="M60 40v7M60 53h.1" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="3" />
        </>
      ) : null}
      {showClock ? (
        <>
          <circle cx="60" cy="42" fill="none" r="9" stroke="#FFFFFF" strokeWidth="3" />
          <path d="M60 36v7l5 3" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </>
      ) : null}
      {!showCheck && !showWarning && !showClock && !showSteps ? <path d="M53 41h14M53 47h10" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="3" /> : null}
      <path d="M27 22 17 12l4 16Z" fill="#FBB811" />
      <rect fill="#A4C1DA" height="5" rx="1" transform="rotate(45 88 18)" width="5" x="85.5" y="15.5" />
      <rect fill="#E85801" height="5" rx="1" transform="rotate(45 91 60)" width="5" x="88.5" y="57.5" />
      <path d="m93 29 12-7-5 13Z" fill="#E85801" />
    </svg>
  );
}

function VariantTile({ variant }: { variant: IllustrationVariant }) {
  return (
    <div style={tileStyle}>
      <IllustrationPreview name={variant.name} />
      <p style={labelStyle}>{variant.name}</p>
      <a href={figmaUrl(variant.nodeId)} rel="noreferrer" style={{ color: '#0C6466', fontSize: 12, fontWeight: 700 }} target="_blank">
        {variant.nodeId}
      </a>
    </div>
  );
}

function StandaloneTile({ item }: { item: StandaloneIllustration }) {
  return (
    <div style={tileStyle}>
      <IllustrationPreview name={item.name} />
      <p style={labelStyle}>{item.name}</p>
      <a href={figmaUrl(item.nodeId)} rel="noreferrer" style={{ color: '#0C6466', fontSize: 12, fontWeight: 700 }} target="_blank">
        {item.nodeId}
      </a>
    </div>
  );
}

function IllustrationCanvasBoard({ section }: { section: IllustrationSection }) {
  return (
    <section style={boardStyle}>
      <header style={headerStyle}>
        <div>
          <p style={eyebrowStyle}>Figma Illustration Canvas</p>
          <h2 style={titleStyle}>{section.name}</h2>
          <p style={descriptionStyle}>{section.description}</p>
        </div>
        <div style={figmaMetaStyle}>
          <a href={figmaUrl(section.figmaNodeId)} rel="noreferrer" style={{ color: '#0C6466', fontWeight: 700 }} target="_blank">
            {section.figmaNodeId}
          </a>
          <span>{section.frameSize}</span>
        </div>
      </header>

      {section.groups.map((group) => (
        <div key={group.nodeId} style={groupStyle}>
          <div style={groupHeaderStyle}>
            <h3 style={groupTitleStyle}>{group.name}</h3>
            <a href={figmaUrl(group.nodeId)} rel="noreferrer" style={nodeTagStyle} target="_blank">
              {group.nodeId}
            </a>
          </div>
          <div style={tileGridStyle}>
            {group.variants.map((variant) => (
              <VariantTile key={variant.nodeId} variant={variant} />
            ))}
          </div>
        </div>
      ))}

      {section.standalone?.length ? (
        <div style={groupStyle}>
          <div style={groupHeaderStyle}>
            <h3 style={groupTitleStyle}>Standalone illustrations</h3>
          </div>
          <div style={tileGridStyle}>
            {section.standalone.map((item) => (
              <StandaloneTile key={item.nodeId} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function IllustrationCanvasGallery({ selected }: { selected?: string }) {
  const visibleSections = selected ? sections.filter((section) => section.name === selected) : sections;

  return (
    <div style={pageStyle}>
      {visibleSections.map((section) => (
        <IllustrationCanvasBoard key={section.figmaNodeId} section={section} />
      ))}
    </div>
  );
}

const meta = {
  title: 'Domain Components/Illustrations/Figma Canvases',
  component: IllustrationCanvasGallery,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: figmaUrl('1908:4646') },
    docs: {
      description: {
        component: 'Figma canvas coverage for the Illustration page sections that are not standalone exported atoms yet.',
      },
    },
  },
} satisfies Meta<typeof IllustrationCanvasGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllCanvases: Story = {};
export const ProofOfInvestment: Story = { args: { selected: 'Proof of Investment' } };
export const LoanProposal: Story = { args: { selected: 'Loan Proposal' } };
export const Disbursement: Story = { args: { selected: 'Disbursement' } };
export const Approvals: Story = { args: { selected: 'Approvals' } };

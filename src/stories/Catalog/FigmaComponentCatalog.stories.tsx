import type { Meta, StoryObj } from '@storybook/react';

import { figmaComponentCatalog, type FigmaComponentCatalogItem } from './figmaComponentCatalog';

const levels = ['atoms', 'molecules', 'organisms', 'pages', 'needs_review'] as const;

const statusTone: Record<string, { background: string; color: string }> = {
  implemented: { background: '#CDFCE5', color: '#045728' },
  unmapped: { background: '#FFF6DC', color: '#735425' },
  needs_review: { background: '#FDE0E0', color: '#921512' },
  cataloged: { background: '#D0DEEA', color: '#244555' },
};

function CatalogTable({ items }: { items: FigmaComponentCatalogItem[] }) {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ color: '#5C5C5C', fontFamily: 'Open Sans, Arial, sans-serif', fontSize: 14 }}>
        {items.length} components represented
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', fontFamily: 'Open Sans, Arial, sans-serif', minWidth: 980, width: '100%' }}>
          <thead>
            <tr>
              {['Component', 'Level', 'Family', 'Figma node', 'Type', 'Status', 'Variant axes'].map((heading) => (
                <th
                  key={heading}
                  style={{ borderBottom: '1px solid #D3D3D3', color: '#313131', fontSize: 12, padding: '10px 12px', textAlign: 'left' }}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const tone = statusTone[item.status] ?? statusTone.cataloged;
              const axes = Object.entries(item.variantAxes)
                .map(([axis, values]) => `${axis}: ${values.join(', ')}`)
                .join('; ');
              return (
                <tr key={`${item.nodeId}-${item.name}`}>
                  <td style={{ borderBottom: '1px solid #E6E6E6', fontSize: 13, padding: '10px 12px' }}>
                    <strong>{item.name}</strong>
                    <div style={{ color: '#5C5C5C', fontSize: 12 }}>{item.componentName}</div>
                  </td>
                  <td style={{ borderBottom: '1px solid #E6E6E6', fontSize: 13, padding: '10px 12px' }}>{item.level}</td>
                  <td style={{ borderBottom: '1px solid #E6E6E6', fontSize: 13, padding: '10px 12px' }}>{item.family}</td>
                  <td style={{ borderBottom: '1px solid #E6E6E6', fontSize: 13, padding: '10px 12px' }}>
                    <code>{item.nodeId}</code>
                  </td>
                  <td style={{ borderBottom: '1px solid #E6E6E6', fontSize: 13, padding: '10px 12px' }}>{item.nodeType}</td>
                  <td style={{ borderBottom: '1px solid #E6E6E6', fontSize: 13, padding: '10px 12px' }}>
                    <span style={{ backgroundColor: tone.background, borderRadius: 999, color: tone.color, display: 'inline-block', padding: '3px 8px' }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ borderBottom: '1px solid #E6E6E6', color: '#5C5C5C', fontSize: 12, padding: '10px 12px' }}>{axes || 'None'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LevelSummary() {
  const rows = levels.map((level) => {
    const items = figmaComponentCatalog.filter((item) => item.level === level);
    const implemented = items.filter((item) => item.status === 'implemented').length;
    return { level, total: items.length, implemented };
  });

  return (
    <div style={{ display: 'grid', gap: 16, width: '100%' }}>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        {rows.map((row) => (
          <div
            key={row.level}
            style={{
              border: '1px solid #D3D3D3',
              borderRadius: 8,
              fontFamily: 'Open Sans, Arial, sans-serif',
              padding: 16,
            }}
          >
            <div style={{ color: '#5C5C5C', fontSize: 12, textTransform: 'uppercase' }}>{row.level}</div>
            <div style={{ color: '#141414', fontSize: 28, fontWeight: 700 }}>{row.total}</div>
            <div style={{ color: '#0C6466', fontSize: 13 }}>{row.implemented} implemented atoms/components</div>
          </div>
        ))}
      </div>
      <CatalogTable items={figmaComponentCatalog} />
    </div>
  );
}

const meta = {
  title: 'Catalog/Figma Components',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Catalog coverage for every component asset in the local Figma backlog. Implemented atoms link to real component pages; remaining items stay visible for follow-up implementation.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {
  render: () => <LevelSummary />,
};

export const Atoms: Story = {
  render: () => <CatalogTable items={figmaComponentCatalog.filter((item) => item.level === 'atoms')} />,
};

export const Molecules: Story = {
  render: () => <CatalogTable items={figmaComponentCatalog.filter((item) => item.level === 'molecules')} />,
};

export const Organisms: Story = {
  render: () => <CatalogTable items={figmaComponentCatalog.filter((item) => item.level === 'organisms')} />,
};

export const Pages: Story = {
  render: () => <CatalogTable items={figmaComponentCatalog.filter((item) => item.level === 'pages')} />,
};

export const NeedsReview: Story = {
  render: () => <CatalogTable items={figmaComponentCatalog.filter((item) => item.level === 'needs_review')} />,
};

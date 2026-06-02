import type { CSSProperties, HTMLAttributes } from 'react';

import { SectionBar, type SectionBarIcon } from './SectionBar';
import { componentTokens as tokens } from '../tokens/componentTokens';

export type NavigationBarLanguage = 'English' | 'Spanish';
export type NavigationBarSection = 'My Loan' | 'Payments' | 'New Loan' | 'Approvals' | 'Resources' | 'None';

export type NavigationBarProps = {
  language?: NavigationBarLanguage;
  section?: NavigationBarSection;
  pressedSection?: Exclude<NavigationBarSection, 'None'>;
  ariaLabel?: string;
  onNavigate?: (section: Exclude<NavigationBarSection, 'None'>) => void;
} & Omit<HTMLAttributes<HTMLElement>, 'children'>;

const colors = {
  grey00: tokens.color.grey00,
  grey20: tokens.color.grey20,
};

const navItems: Array<{
  section: Exclude<NavigationBarSection, 'None'>;
  icon: SectionBarIcon;
  labels: Record<NavigationBarLanguage, string>;
}> = [
  { section: 'My Loan', icon: 'loan', labels: { English: 'My Loan', Spanish: 'Mi prestamo' } },
  { section: 'Payments', icon: 'payments', labels: { English: 'Payments', Spanish: 'Pagos' } },
  { section: 'New Loan', icon: 'newLoan', labels: { English: 'New Loan', Spanish: 'Nuevo prestamo' } },
  { section: 'Approvals', icon: 'approvals', labels: { English: 'Approvals', Spanish: 'Aprobaciones' } },
  { section: 'Resources', icon: 'resources', labels: { English: 'Resources', Spanish: 'Recursos' } },
];

const wrapperStyle: CSSProperties = {
  backgroundColor: colors.grey00,
  borderTop: `1px solid ${colors.grey20}`,
  boxShadow: tokens.effect.navigationElevation,
  boxSizing: 'border-box',
  display: 'inline-grid',
  fontFamily: tokens.typography.bodyRegular.fontFamily,
  maxWidth: '100%',
  overflow: 'hidden',
  width: 390,
};

const barStyle: CSSProperties = {
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  minHeight: 66,
  width: '100%',
};

export function NavigationBar({
  language = 'English',
  section = 'My Loan',
  pressedSection,
  ariaLabel = 'Primary navigation',
  onNavigate,
  style,
  ...navProps
}: NavigationBarProps) {
  return (
    <nav
      aria-label={ariaLabel}
      data-figma-node-id="7407:2558"
      style={{ ...wrapperStyle, ...style }}
      {...navProps}
    >
      <div style={barStyle}>
        {navItems.map((item) => (
          <SectionBar
            key={item.section}
            label={item.labels[language]}
            icon={item.icon}
            state={section === item.section ? 'selected' : 'default'}
            interaction={pressedSection === item.section ? 'pressed' : 'default'}
            onClick={() => onNavigate?.(item.section)}
          />
        ))}
      </div>
    </nav>
  );
}

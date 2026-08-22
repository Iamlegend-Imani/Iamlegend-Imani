'use client';

import ContactPortal from './ContactPortal';

const links = [
  { label: 'Thesis', href: '#thesis' },
  { label: 'Work', href: '#work' },
  { label: 'Architecture', short: 'Map', href: '#architecture' },
  { label: 'Studio', href: '#studio' },
] as const;

export default function MobileDock() {
  return (
    <nav className="mobileDock" aria-label="Mobile navigation">
      {links.map((link) => (
        <a key={link.label} href={link.href} aria-label={link.label}>
          <span className="mobileDockDot" aria-hidden="true" />
          <span>{'short' in link ? link.short : link.label}</span>
        </a>
      ))}
      <ContactPortal label="Contact" className="mobileDockContact" />
    </nav>
  );
}

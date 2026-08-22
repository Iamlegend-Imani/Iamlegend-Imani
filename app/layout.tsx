import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Imani Kirika | Human Systems & Transformation Strategist',
  description: 'Portfolio of Imani Kirika, an interdisciplinary strategist, systems builder, and researcher working across human systems, AI, health, governance, access, and transformation.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body>{children}</body>
    </html>
  );
}

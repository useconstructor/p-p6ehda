import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788567447998',
  description: 'An ultra-premium, appointment-only barbershop website for The Gilded Chair, positioned as an exclusive grooming ritual rather than a transactional haircut service. The experience emphasizes cinematic restraint, master craftsmanship, membership prestige, and private inquiry.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0A0A0A', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

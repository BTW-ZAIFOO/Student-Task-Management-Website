import React from 'react';
import NavbarProCompact from './NavbarProCompact';
import UnifiedFooter from './UnifiedFooter';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col transition-colors duration-300">
      <NavbarProCompact />
      <main className="pt-16 grow">{children}</main>
      <UnifiedFooter />
    </div>
  );
}

          
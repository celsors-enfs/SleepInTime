import React from 'react';
import { Navigation } from './Navigation';
import AriseFooter from './generated/AriseFooter';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <AriseFooter />
    </div>
  );
};


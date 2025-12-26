import React from 'react';
import { Navigation } from './Navigation';
import AriseFooter from './generated/AriseFooter';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <AriseFooter />
    </>
  );
};


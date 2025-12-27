import React from 'react';
import { cn } from '@/lib/utils';
import { SleepInTimeLogo } from './SleepInTimeLogo';
export interface AriseFooterProps {
  className?: string;
}
export const AriseFooter: React.FC<AriseFooterProps> = ({
  className
}) => {
  return <footer className={cn("relative w-full bg-[#030B1F] text-white border-t border-white/5", className)}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Brand Section */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Logo */}
            <SleepInTimeLogo width={160} height={40} className="cursor-pointer" />
          </div>

          {/* Right Section: Copyright */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Copyright */}
            <p className="text-xs text-white/60">© 2025 SleepInTime</p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 left-[10%] w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 right-[10%] w-[300px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full" />
      </div>
    </footer>;
};
export default AriseFooter;
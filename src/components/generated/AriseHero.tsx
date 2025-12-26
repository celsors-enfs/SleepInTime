import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Menu, X, Globe, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SleepInTimeLogo } from './SleepInTimeLogo';

// --- Constants & Helpers ---

const NAV_ITEMS = [{
  name: 'Home',
  href: '#'
}, {
  name: 'Works',
  href: '#'
}, {
  name: 'Blogs',
  href: '#'
}, {
  name: 'Timeline',
  href: '#'
}, {
  name: 'Waitlist',
  href: '#'
}] as any[];
const StarField = () => {
  const [stars, setStars] = useState<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  }[]>([]);
  useEffect(() => {
    const newStars = Array.from({
      length: 80
    }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2
    }));
    setStars(newStars);
  }, []);
  return <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map(star => <motion.div key={star.id} className="absolute rounded-full bg-white/40" style={{
      left: `${star.x}%`,
      top: `${star.y}%`,
      width: `${star.size}px`,
      height: `${star.size}px`
    }} animate={{
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.2, 1]
    }} transition={{
      duration: star.duration,
      repeat: Infinity,
      ease: "easeInOut"
    }} />)}
    </div>;
};

// @component: AriseHero
export const AriseHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // @return
  return <div className="relative min-h-screen w-full bg-[#030617] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Layer: Stars and Planets */}
      <div className="fixed inset-0 z-0">
        <StarField />
        
        {/* The Main Glowing Orb / Planet */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[140vw] aspect-square max-w-[1200px] pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1E40AF]/20 via-transparent to-transparent blur-3xl opacity-60" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.3)_0%,rgba(0,0,0,0)_70%)]" />
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1.5,
          ease: "easeOut"
        }} className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent shadow-[0_0_40px_rgba(59,130,246,0.5)]" />
        </div>

        {/* Top Radial Glows */}
        <div className="absolute -top-40 left-[10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-40 right-[10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Navigation */}
      <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between", isScrolled ? "bg-[#030617]/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent")}>
        <SleepInTimeLogo width={180} height={45} className="cursor-pointer" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
          {NAV_ITEMS.map(item => <a key={item.name} href={item.href} className="px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
              {item.name}
            </a>)}
          <div className="relative group px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white flex items-center gap-1 cursor-pointer transition-colors">
            All Pages <ChevronRight className="w-3.5 h-3.5 rotate-90" />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-500 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95">
            Contact Us
          </button>
          <button className="md:hidden p-2 text-white/80" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="fixed inset-0 z-40 bg-[#030617] pt-24 px-8 md:hidden">
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map(item => <a key={item.name} href={item.href} className="text-2xl font-semibold hover:text-blue-500 transition-colors">
                  {item.name}
                </a>)}
              <hr className="border-white/10" />
              <button className="w-full py-4 bg-blue-600 rounded-xl font-bold">Contact Us</button>
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* Hero Content */}
      <main className="relative z-10 pt-32 pb-20 px-6 flex flex-col items-center text-center">
        {/* Tagline Pill */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="group inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mb-8 cursor-pointer hover:bg-white/10 transition-colors">
          <span className="text-sm font-medium text-white/80">We Design websites that matter, user's can't resist</span>
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-4xl leading-[1.1] mb-8">
          Design That Powers Real Business Growth
        </motion.h1>

        {/* Subtitle */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-lg md:text-xl text-white/60 max-w-2xl font-light mb-12 leading-relaxed">
          Elevating brands through innovative and engaging web solutions.
        </motion.p>

        {/* CTA Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="flex flex-col items-center gap-6">
          <button className="group relative px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all active:scale-95 overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-40" />
            </div>
            <span className="text-sm font-medium text-white/60">2 Spots Available</span>
          </div>
        </motion.div>

        {/* Decorative Grid or Interactive Element (Optional expansion) */}
        <div className="mt-24 w-full max-w-6xl mx-auto px-4 opacity-30">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </main>

      {/* Floating Sparkles / Particles for depth */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(5)].map((_, i) => <motion.div key={`sparkle-${i}`} className="absolute text-blue-400/20" initial={{
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        scale: 0
      }} animate={{
        y: ["-10%", "110%"],
        scale: [0, 1, 0],
        opacity: [0, 0.5, 0]
      }} transition={{
        duration: 10 + Math.random() * 20,
        repeat: Infinity,
        ease: "linear",
        delay: i * 5
      }}>
            <Sparkles className="w-4 h-4" />
          </motion.div>)}
      </div>

      {/* Footer-like bottom blur */}
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030617] to-transparent pointer-events-none z-0" />
    </div>;
};
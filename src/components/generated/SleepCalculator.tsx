"use client";

import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Clock, Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../../hooks/useLanguage";
import { calculatorTranslations } from "../../i18n/calculator";

// Helper functions
const formatTime = (hours: number, minutes: number) => {
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
};
const addMinutes = (hours: number, minutes: number, minutesToAdd: number) => {
  const totalMinutes = hours * 60 + minutes + minutesToAdd;
  let newHours = Math.floor(totalMinutes / 60) % 24;
  let newMinutes = totalMinutes % 60;
  
  // Handle negative results
  if (newHours < 0) newHours += 24;
  if (newMinutes < 0) {
    newMinutes += 60;
    newHours = (newHours - 1 + 24) % 24;
  }
  
  return {
    hours: newHours,
    minutes: newMinutes
  };
};

const subtractMinutes = (hours: number, minutes: number, minutesToSubtract: number) => {
  return addMinutes(hours, minutes, -minutesToSubtract);
};
const getRelativeDay = (
  currentHours: number, 
  currentMinutes: number,
  targetHours: number, 
  targetMinutes: number,
  referenceHours: number,
  t: { tonight: string; today: string; tomorrow: string }, 
  isBedtime: boolean = true
) => {
  // isBedtime = true means we're showing bedtime suggestions (calculated backwards from wake time)
  // isBedtime = false means we're showing wake time suggestions (calculated forwards from bedtime)
  
  // Convert to total minutes for accurate comparison
  const currentTotalMinutes = currentHours * 60 + currentMinutes;
  const targetTotalMinutes = targetHours * 60 + targetMinutes;
  const referenceTotalMinutes = referenceHours * 60;
  
  if (isBedtime) {
    // For bedtime: target is always before reference (wake time)
    // We need to determine if the bedtime is today or tomorrow based on current time
    
    // Calculate the difference in minutes (can be negative if target is in the past)
    let minutesDiff = targetTotalMinutes - currentTotalMinutes;
    
    // Handle wrap-around at midnight
    // If target is early morning (0-6 AM) and current is late night (10 PM - 11:59 PM),
    // the target is still "today" (tonight, going into early morning)
    // If target is early morning and current is also early morning but later,
    // check if it's the same day
    
    // If target is in the past (negative diff)
    if (minutesDiff < 0) {
      // If target is more than 12 hours in the past, it's likely for tomorrow
      // (e.g., current is 11 PM, target was 1 PM = 10 hours ago, still today)
      // (e.g., current is 2 AM, target was 1 PM yesterday = 13 hours ago, tomorrow)
      if (Math.abs(minutesDiff) > 12 * 60) {
        return t.tomorrow;
      }
      // Otherwise, it's still "today" (the bedtime that just passed or is very recent)
      return t.today;
    }
    
    // Target is in the future
    // If target is more than 12 hours away, it might be tomorrow
    // But typically bedtimes are within 12 hours, so check more carefully
    if (minutesDiff > 12 * 60) {
      // Check if we're crossing a day boundary
      // If current is late night (22-23) and target is early morning (0-6), it's still "today"
      if (currentHours >= 22 && targetHours <= 6) {
        return t.today;
      }
      // Otherwise, it's likely tomorrow
      return t.tomorrow;
    }
    
    // Target is within 12 hours, it's "today"
    return t.today;
  } else {
    // For wake time: target is always after reference (bedtime)
    // If target hour < reference hour, we crossed midnight (e.g., sleep 11pm (23) -> wake 7am (7) = tomorrow)
    if (targetHours < referenceHours) return t.tomorrow;
    
    // If target time has already passed today, it's tomorrow
    if (targetTotalMinutes < currentTotalMinutes) {
      return t.tomorrow;
    }
    
    return t.tonight;
  }
};
interface SleepTime {
  hours: number;
  minutes: number;
  cycles: number;
  totalMinutes: number;
}
// Navigation items - Contact removed per requirements
// Note: This component's nav is hidden when used in Home page, 
// the shared Navigation component is used instead
const NAV_ITEMS = [{
  name: 'Home',
  href: '#'
}, {
  name: 'How it works',
  href: '#'
}, {
  name: 'FAQ',
  href: '#'
}, {
  name: 'Sleep hygiene',
  href: '#'
}, {
  name: 'About',
  href: '#'
}] as any[];

// StarField Component
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
export default function SleepCalculator() {
  const [language] = useLanguage();
  const t = calculatorTranslations[language];
  
  const [activeTab, setActiveTab] = useState<'wake' | 'sleep'>('sleep');
  const [bedtimeHours, setBedtimeHours] = useState(0);
  const [bedtimeMinutes, setBedtimeMinutes] = useState(41);
  const [cycleLength, setCycleLength] = useState(90);
  const [fallAsleepTime, setFallAsleepTime] = useState(15);
  const [numSuggestions, setNumSuggestions] = useState(6);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [wakeRangeStart, setWakeRangeStart] = useState("");
  const [wakeRangeEnd, setWakeRangeEnd] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEditingTime, setIsEditingTime] = useState(false);
  const [timeInput, setTimeInput] = useState("");
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);

  // Get current time on mount and update periodically
  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setCurrentHours(hours);
      setCurrentMinutes(minutes);
      // Set initial bedtime to current time
      setBedtimeHours(hours);
      setBedtimeMinutes(minutes);
    };
    
    updateCurrentTime();
    
    // Update current time every minute
    const interval = setInterval(updateCurrentTime, 60000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate sleep times
  const sleepTimes = useMemo(() => {
    const times: SleepTime[] = [];
    for (let i = 0; i < numSuggestions; i++) {
      const cycles = i + 3;
      const totalSleepMinutes = cycles * cycleLength + fallAsleepTime;
      
      if (activeTab === 'sleep') {
        // Calculate when to wake up based on bedtime
        const wakeTime = addMinutes(bedtimeHours, bedtimeMinutes, totalSleepMinutes);
        times.push({
          hours: wakeTime.hours,
          minutes: wakeTime.minutes,
          cycles,
          totalMinutes: totalSleepMinutes
        });
      } else {
        // Calculate when to go to bed based on wake time
        const bedtime = subtractMinutes(bedtimeHours, bedtimeMinutes, totalSleepMinutes);
        times.push({
          hours: bedtime.hours,
          minutes: bedtime.minutes,
          cycles,
          totalMinutes: totalSleepMinutes
        });
      }
    }
    return times;
  }, [bedtimeHours, bedtimeMinutes, cycleLength, fallAsleepTime, numSuggestions, activeTab]);
  const recommendedIndex = 2; // 5 cycles is typically recommended

  const incrementTime = (amount: number) => {
    const newTime = addMinutes(bedtimeHours, bedtimeMinutes, amount);
    setBedtimeHours(newTime.hours);
    setBedtimeMinutes(newTime.minutes);
  };
  const setToNow = () => {
    const now = new Date();
    setBedtimeHours(now.getHours());
    setBedtimeMinutes(now.getMinutes());
  };
  const handleTimeClick = () => {
    setIsEditingTime(true);
    setTimeInput(formatTime(bedtimeHours, bedtimeMinutes));
  };
  const handleTimeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeInput(e.target.value);
  };
  const handleTimeInputBlur = () => {
    parseTimeInput();
  };
  const handleTimeInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      parseTimeInput();
    } else if (e.key === 'Escape') {
      setIsEditingTime(false);
      setTimeInput("");
    }
  };
  const parseTimeInput = () => {
    // Parse various time formats: "1:46 PM", "13:46", "146pm", etc.
    const input = timeInput.trim().toUpperCase();

    // Match formats like "1:46 PM", "01:46 PM", "1:46PM", "13:46"
    const timeRegex = /^(\d{1,2}):?(\d{2})?\s*(AM|PM)?$/i;
    const match = input.match(timeRegex);
    if (match) {
      let hours = parseInt(match[1]);
      let minutes = match[2] ? parseInt(match[2]) : 0;
      const period = match[3];

      // Convert to 24-hour format if AM/PM is specified
      if (period) {
        if (period === 'PM' && hours !== 12) {
          hours += 12;
        } else if (period === 'AM' && hours === 12) {
          hours = 0;
        }
      }

      // Validate hours and minutes
      if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
        setBedtimeHours(hours);
        setBedtimeMinutes(minutes);
      }
    }
    setIsEditingTime(false);
    setTimeInput("");
  };
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h${mins > 0 ? ` ${mins}m` : ''}`;
  };
  return <div className="relative w-full bg-[#030617] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
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
      <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex flex-col items-center justify-center gap-4", isScrolled ? "bg-[#030617]/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent")}>
        {/* Logo - Center Aligned */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <img className="w-6 h-6 text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{
            width: "fit-content",
            maxWidth: "fit-content",
            height: "36px"
          }} src="https://storage.googleapis.com/storage.magicpath.ai/user/347385894321393664/assets/530f46d9-08bd-4224-8001-71b163469a7b.png" />
          </div>
          <span className="text-xl font-bold tracking-tight" style={{
          display: "none"
        }}>
            SleepInTime
          </span>
        </div>

        {/* Desktop Menu - Center Aligned */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
          {NAV_ITEMS.map(item => <a key={item.name} href={item.href} className="px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
              {item.name}
            </a>)}
        </div>

        {/* Mobile Menu Button - Positioned at Top Right */}
        <button className="md:hidden p-2 text-white/80 absolute right-6 top-4" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
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
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            {/* Tagline Pill */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mb-8">
              <span className="text-xs font-medium text-white/80">
                {t.tagline}
              </span>
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
          }} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl leading-[1.1] mb-3" style={{
            fontWeight: "100",
            fontFamily: "inherit"
          }}>
              {t.title}
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
          }} className="text-sm md:text-base text-white/60 max-w-2xl mx-auto font-light mb-6 leading-relaxed">
              {t.subtitle.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t.subtitle.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.p>
          </div>

          {/* Tabs */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="flex items-center justify-center gap-2 mb-6">
            <button onClick={() => setActiveTab('wake')} className={cn("px-4 py-2 rounded-full text-xs font-semibold transition-all", activeTab === 'wake' ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]" : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10")}>
              {t.tabs.wakeUpAt}
            </button>
            <button onClick={() => setActiveTab('sleep')} className={cn("px-4 py-2 rounded-full text-xs font-semibold transition-all", activeTab === 'sleep' ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]" : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10")}>
              {t.tabs.goToBedAt}
            </button>
          </motion.div>

          {/* Time Picker */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="mb-6 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
            <label className="block text-xs text-white/60 mb-3 text-center font-medium">
              {activeTab === 'sleep' ? t.timePicker.goToBedAt : t.timePicker.wakeUpAt}
            </label>
            <div className="flex items-center justify-center gap-4">
              <button onClick={() => incrementTime(-15)} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                −
              </button>
              <div className="min-w-[180px]">
                {isEditingTime ? <input type="text" value={timeInput} onChange={handleTimeInputChange} onBlur={handleTimeInputBlur} onKeyDown={handleTimeInputKeyDown} autoFocus placeholder="1:46 PM" className="text-4xl font-bold text-center bg-transparent border-b-2 border-blue-400 text-blue-400 outline-none w-full" style={{
                fontFamily: "inherit",
                fontWeight: "500"
              }} /> : <div onClick={handleTimeClick} className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] cursor-pointer hover:scale-105 transition-transform" style={{
                fontFamily: "inherit",
                fontWeight: "500"
              }}>
                    {formatTime(bedtimeHours, bedtimeMinutes)}
                  </div>}
              </div>
              <button onClick={() => incrementTime(15)} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                +
              </button>
            </div>
            <div className="flex justify-center mt-3">
              <button onClick={setToNow} className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-xs font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95">
                {t.timePicker.setToNow}
              </button>
            </div>
          </motion.div>

          {/* Settings */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.7
        }} className="mb-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl overflow-hidden">
            <button onClick={() => setSettingsOpen(!settingsOpen)} className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-white/5 transition-colors">
              <span className="text-sm font-semibold" style={{
              fontFamily: "inherit",
              fontWeight: "300"
            }}>{t.settings.title}</span>
              <ChevronUp className={cn("w-4 h-4 transition-transform", !settingsOpen && "rotate-180")} />
            </button>
            
            {settingsOpen && <div className="px-4 pb-4 space-y-4">
                {/* Cycle Length */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-white/60 font-medium">{t.settings.cycleLength}</label>
                    <span className="text-xs font-bold text-blue-400">{cycleLength} min</span>
                  </div>
                  <input type="range" min="60" max="120" value={cycleLength} onChange={e => setCycleLength(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider" />
                  <p className="text-[10px] text-white/40 mt-1">{t.settings.cycleLengthDesc}</p>
                </div>

                {/* Time to Fall Asleep */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-white/60 font-medium">{t.settings.timeToFallAsleep}</label>
                    <span className="text-xs font-bold text-blue-400">{fallAsleepTime} min</span>
                  </div>
                  <input type="range" min="0" max="60" value={fallAsleepTime} onChange={e => setFallAsleepTime(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider" />
                  <p className="text-[10px] text-white/40 mt-1">{t.settings.timeToFallAsleepDesc}</p>
                </div>

                {/* Number of Suggestions */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-white/60 font-medium">{t.settings.numSuggestions}</label>
                    <span className="text-xs font-bold text-blue-400">{numSuggestions}</span>
                  </div>
                  <input type="range" min="3" max="10" value={numSuggestions} onChange={e => setNumSuggestions(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider" />
                  <p className="text-[10px] text-white/40 mt-1">{t.settings.numSuggestionsDesc}</p>
                </div>

                {/* Wake Window Range */}
                <div>
                  <label className="text-xs text-white/60 font-medium mb-2 block">{t.settings.wakeWindowRange}</label>
                  <p className="text-[10px] text-white/40 mb-3">{t.settings.wakeWindowRangeDesc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-white/40 mb-1 block">{t.settings.startTime}</label>
                      <input type="time" value={wakeRangeStart} onChange={e => setWakeRangeStart(e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="text-[10px] text-white/40 mb-1 block">{t.settings.endTime}</label>
                      <input type="time" value={wakeRangeEnd} onChange={e => setWakeRangeEnd(e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                    </div>
                  </div>
                </div>
              </div>}
          </motion.div>

          {/* Recommended Times */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{
            fontFamily: "inherit",
            fontWeight: "200"
          }}>{t.recommendedTimes}</h2>
            <div className="grid grid-cols-3 gap-2">
              {sleepTimes.map((time, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.9 + index * 0.05
            }} className={cn("p-3 rounded-xl border transition-all", index === recommendedIndex ? "border-blue-500 bg-white/5 shadow-[0_0_30px_rgba(59,130,246,0.2)]" : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10")}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-2xl font-bold" style={{
                      fontFamily: "inherit",
                      fontWeight: "500"
                    }}>
                          {formatTime(time.hours, time.minutes)}
                        </h3>
                        {index === recommendedIndex && <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-500 text-white rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            {t.recommended}
                          </span>}
                      </div>
                      <p className="text-xs text-white/60 mb-0.5 font-medium">
                        {getRelativeDay(currentHours, currentMinutes, time.hours, time.minutes, bedtimeHours, t, activeTab === 'wake')}
                      </p>
                      <p className="text-[10px] text-white/40">
                        {time.cycles} {t.cycles} • {formatDuration(time.totalMinutes)}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* How Sleep Cycles Work */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="mb-12 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
            <button onClick={() => setInfoOpen(!infoOpen)} className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-white/5 transition-colors">
              <span className="text-sm font-semibold" style={{
              fontFamily: "inherit",
              fontWeight: "300"
            }}>{t.howItWorks.title}</span>
              <ChevronUp className={cn("w-4 h-4 transition-transform", !infoOpen && "rotate-180")} />
            </button>
            
            {infoOpen && <div className="px-4 pb-4 text-xs text-white/70 leading-relaxed">
                <ul className="space-y-2.5 list-disc list-inside marker:text-blue-400">
                  {t.howItWorks.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>}
          </motion.div>

          {/* Decorative Grid */}
          <div className="mt-24 w-full max-w-6xl mx-auto px-4 opacity-30">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
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

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          cursor: pointer;
          border: 2px solid #030617;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          cursor: pointer;
          border: 2px solid #030617;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
        
        .slider::-webkit-slider-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        .slider::-moz-range-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>;
}
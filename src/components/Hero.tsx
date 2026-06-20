import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CanvasParticles } from './CanvasParticles';
import { Heart, ChevronDown } from 'lucide-react';
import { familyData } from '../data/tributeData';

interface HeroProps {
  onScrollToMemories: () => void;
  onScrollToTimeline: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToMemories, onScrollToTimeline }) => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = familyData.father.roles;

  // Typing animation logic
  useEffect(() => {
    let timer: number;
    const currentFullText = roles[roleIdx];
    const typingSpeed = isDeleting ? 40 : 100;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText === currentFullText) {
          // Pause before deleting
          timer = window.setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = window.setTimeout(handleTyping, typingSpeed);
    };

    timer = window.setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIdx, roles]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center text-center overflow-hidden bg-[#030a1c] px-4 select-none">
      {/* Background Image with Cinematic overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-1000 scale-105 opacity-50"
        style={{ 
          backgroundImage: `url('${familyData.father.imageUrl}')`,
          backgroundPosition: 'center 10%'
        }}
      />
      {/* Radial vignette glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030a1c] via-transparent to-[#030a1c]/70 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,26,64,0.3),#030a1c_80%)] z-0" />

      {/* Floating Canvas Particles */}
      <CanvasParticles mode="stars" />

      <div /> {/* Top spacing */}

      {/* Hero Core Content */}
      <div className="relative z-20 max-w-4xl space-y-8 flex flex-col items-center justify-center pt-24">
        {/* Animated Heart emblem */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-red-500 bg-red-500/10 p-3 rounded-full border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)] mb-4"
        >
          <Heart fill="currentColor" size={24} />
        </motion.div>

        {/* Small greeting */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-amber-400 font-semibold uppercase tracking-[0.3em] text-xs md:text-sm"
        >
          Happy Father's Day
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white font-serif-lux"
        >
          To My Dearest Dad
        </motion.h1>

        {/* Father's Name with Luxury Glow */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 font-serif text-gold-glow"
        >
          {familyData.father.name}
        </motion.h2>

        {/* Typing Animation */}
        <div className="h-10 flex items-center justify-center">
          <span className="text-xl md:text-2xl text-slate-300 font-light font-serif italic">
            {displayedText}
            <span className="animate-pulse font-bold text-amber-500 ml-1">|</span>
          </span>
        </div>

        {/* Cinematic Subtitles */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-sm md:text-base text-slate-400 max-w-lg font-light leading-relaxed px-4"
        >
          To the strongest man I know, my father, my first hero, my forever inspiration. This is a celebration of your life, love, and sacrifice.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 pt-6"
        >
          <button
            onClick={onScrollToMemories}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-semibold shadow-lg shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Memories
          </button>
          
          <button
            onClick={onScrollToTimeline}
            className="px-8 py-3 rounded-full border border-slate-700 bg-slate-900/40 hover:bg-slate-900/80 hover:border-amber-500 text-slate-300 hover:text-white font-medium backdrop-blur-sm transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Watch Our Journey
          </button>
        </motion.div>
      </div>

      {/* Bounce scroll down button */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="pb-8 z-20 cursor-pointer flex flex-col items-center text-slate-400 hover:text-amber-400 transition-colors"
        onClick={onScrollToMemories}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-1 font-semibold">Scroll to enter</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Map, Heart, Star } from 'lucide-react';
import { familyData } from '../data/tributeData';

export const Achievements: React.FC = () => {
  const [selectedReasonIdx, setSelectedReasonIdx] = useState<number | null>(null);
  const [unlockedReasons, setUnlockedReasons] = useState<number[]>([]);
  const achievements = familyData.achievements;
  const reasons = familyData.reasons;

  // Icon chooser
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award': return <Award className="text-amber-400" size={32} />;
      case 'Shield': return <Shield className="text-blue-400" size={32} />;
      case 'Map': return <Map className="text-emerald-400" size={32} />;
      default: return <Heart className="text-rose-500" size={32} fill="currentColor" />;
    }
  };

  const handleHeartClick = (index: number) => {
    setSelectedReasonIdx(index);
    if (!unlockedReasons.includes(index)) {
      setUnlockedReasons((prev) => [...prev, index]);
    }
  };

  const handleRevealAll = () => {
    const all = Array.from({ length: reasons.length }, (_, i) => i);
    setUnlockedReasons(all);
  };

  return (
    <section className="relative min-h-screen py-24 bg-[#020713] overflow-hidden px-4 md:px-8 select-none">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Part 1: Achievements */}
      <div className="max-w-5xl mx-auto mb-24 relative z-20">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-500">Pillar of Support</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-lux">
            Dad's Achievements & Qualities
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            Recognizing the lifelong roles and shields T Chinna Kullayappa carried for our sake.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach) => (
            <motion.div
              whileHover={{ y: -5, borderColor: 'rgba(251, 191, 36, 0.4)' }}
              key={ach.title}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 rounded-full bg-slate-950/60 border border-slate-800 mb-4 shadow-inner group-hover:scale-110 transition-transform">
                {getIcon(ach.icon)}
              </div>
              <h3 className="text-lg font-bold text-white font-serif mb-2">{ach.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{ach.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part 2: 100 Reasons Why I Love My Dad */}
      <div className="max-w-5xl mx-auto relative z-20">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-1 text-rose-500">
            <Heart size={16} fill="currentColor" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">Tribute Wall</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-lux">
            100 Reasons Why I Love My Dad ❤️
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm">
            Click on each golden heart below to reveal a heartfelt reason why you mean the world to us.
          </p>
          <div className="pt-2">
            <button
              onClick={handleRevealAll}
              className="text-xs font-bold text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full bg-amber-500/5 hover:bg-amber-500/10 transition-colors"
            >
              Reveal All Hearts
            </button>
            <span className="text-xs text-slate-500 ml-4 font-mono">
              Opened: {unlockedReasons.length} / 100
            </span>
          </div>
        </div>

        {/* Reason Display overlay */}
        <div className="min-h-[140px] flex items-center justify-center bg-[#06122d]/40 rounded-3xl border border-slate-800 p-6 md:p-8 mb-12 text-center max-w-3xl mx-auto shadow-inner relative overflow-hidden">
          <div className="absolute top-2 left-3 opacity-[0.03] select-none text-9xl font-bold font-serif">❤️</div>
          
          <AnimatePresence mode="wait">
            {selectedReasonIdx !== null ? (
              <motion.div
                key={selectedReasonIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="space-y-3 relative z-10"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500">
                  Reason #{selectedReasonIdx + 1}
                </span>
                <p className="text-xl md:text-2xl font-serif text-slate-100 italic leading-relaxed">
                  "{reasons[selectedReasonIdx]}"
                </p>
                <div className="flex justify-center gap-1 text-red-500 pt-2">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-400 italic text-base font-light"
              >
                "Every heart holds a secret message. Click one to read..."
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 100 Hearts Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-3 bg-slate-900/10 border border-slate-800/40 p-6 rounded-3xl backdrop-blur-sm shadow-xl">
          {reasons.map((_, idx) => {
            const isUnlocked = unlockedReasons.includes(idx);
            const isSelected = selectedReasonIdx === idx;

            return (
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                key={idx}
                onClick={() => handleHeartClick(idx)}
                className={`aspect-square flex flex-col items-center justify-center rounded-xl transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-amber-500 text-slate-900 shadow-[0_0_15px_rgba(245,158,11,0.5)] border border-amber-400'
                    : isUnlocked
                    ? 'bg-rose-950/40 text-rose-500 border border-rose-900/50 hover:bg-rose-900/30'
                    : 'bg-slate-900/50 text-slate-500 border border-slate-800 hover:text-amber-400 hover:border-amber-500/50'
                }`}
                title={`Reason #${idx + 1}`}
              >
                {/* Micro Heart symbol overlay */}
                <Heart
                  size={16}
                  fill={isUnlocked || isSelected ? 'currentColor' : 'none'}
                  className="transition-colors duration-300"
                />
                
                {/* Number */}
                <span className="text-[9px] font-mono font-bold mt-1 leading-none select-none">
                  {idx + 1}
                </span>

                {/* Sparkling dot on active selections */}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

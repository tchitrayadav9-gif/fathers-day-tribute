import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, ShieldAlert, HeartHandshake, Fingerprint, Heart, ArrowRight } from 'lucide-react';
import { familyData } from '../data/tributeData';

export const Teachings: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const teachings = familyData.teachings;

  // Icon selector mapping
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users size={24} />;
      case 'Briefcase': return <Briefcase size={24} />;
      case 'ShieldAlert': return <ShieldAlert size={24} />;
      case 'HeartHandshake': return <HeartHandshake size={24} />;
      case 'Fingerprint': return <Fingerprint size={24} />;
      case 'Heart': return <Heart size={24} />;
      default: return <SparklesIcon />;
    }
  };

  const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z"/><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/></svg>
  );

  return (
    <section className="relative min-h-screen py-24 bg-[#030919] overflow-hidden px-4 md:px-8 select-none">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 space-y-4 z-20 relative">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-500">Wisdom</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-lux">
          Things Dad Taught Me
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm">
          Click any card to read the deeper stories and lessons Dad imparted to guide our life paths.
        </p>
      </div>

      {/* Interactive Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-20 relative">
        {teachings.map((t, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <motion.div
              layout
              key={t.title}
              onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              className={`interactive-card p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.15)] z-30'
                  : 'bg-slate-900/40 border border-slate-800/80 hover:border-amber-500/40 hover:scale-[1.02] shadow-md hover:shadow-xl'
              }`}
            >
              {/* Outer Glow decoration on hover */}
              {!isExpanded && (
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/0 via-amber-500/0 to-amber-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              )}

              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl ${isExpanded ? 'bg-amber-500 text-slate-900' : 'bg-amber-500/10 text-amber-400'}`}>
                    {getIcon(t.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                    {isExpanded ? 'Active wisdom' : 'Click to read'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white font-serif mt-2">
                  {t.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {t.shortDesc}
                </p>

                {/* Expanded Story details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-slate-800 text-slate-300 text-sm leading-relaxed"
                    >
                      <h4 className="text-amber-400 font-semibold mb-2 font-serif text-base">The Story & Meaning:</h4>
                      <p className="italic font-light text-slate-200">
                        {t.longDesc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action indicator */}
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                <span>{isExpanded ? 'Collapse teaching' : 'Expand story'}</span>
                <ArrowRight size={12} className={`transform transition-transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

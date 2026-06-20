import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote } from 'lucide-react';
import { familyData } from '../data/tributeData';
import type { FamilyMember } from '../data/tributeData';

export const FamilyTree: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const members = familyData.members;

  const getObjectPosition = (name: string) => {
    if (name.includes("Chinna")) return "center 12%"; // Father (WhatsApp Image has face at top)
    if (name.includes("Radhamma")) return "center 18%"; // Mother (WhatsApp Image has face at top)
    if (name.includes("Chitra")) return "center 15%"; // 1st Daughter (T Chitra)
    if (name.includes("Bhavya")) return "center 12%"; // 2nd Daughter (T Bhavya)
    if (name.includes("Hani")) return "center 12%"; // 3rd Daughter (T Hani)
    if (name.includes("Manikanta")) return "center 12%"; // Son (T Manikanta)
    return "center";
  };

  // Split parents and children
  const parents = members.filter(m => m.relationship.includes('Father') || m.relationship.includes('Mother'));
  const children = members.filter(m => !m.relationship.includes('Father') && !m.relationship.includes('Mother'));

  return (
    <section className="relative min-h-screen py-24 bg-[#020713] overflow-hidden px-4 md:px-8 select-none">
      {/* Glow paths */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-rose-950/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 space-y-4 z-20 relative">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-500">Generations</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-lux">
          Our Interactive Family Tree
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm">
          Click on any family node to view their unique relationship, favorite quotes, and special memories with Dad.
        </p>
      </div>

      {/* Family Tree Layout Container */}
      <div className="max-w-4xl mx-auto relative z-20 flex flex-col items-center">
        
        {/* Parents Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 relative">
          {parents.map((p) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={p.name}
              onClick={() => setSelectedMember(p)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] group-hover:border-amber-400 transition-all duration-300">
                <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" style={{ objectPosition: getObjectPosition(p.name) }} loading="lazy" />
              </div>
              <h3 className="text-sm font-bold text-white mt-3 font-serif">{p.name}</h3>
              <span className="text-[10px] text-amber-400 uppercase tracking-widest font-semibold">{p.relationship.split(' ')[0]}</span>
            </motion.div>
          ))}
        </div>

        {/* Tree connection line visual using SVG */}
        <div className="w-full h-24 relative hidden md:block">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Horizontal line linking children */}
            <path
              d="M 150 70 L 750 70"
              stroke="rgba(245, 158, 11, 0.4)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
            />
            {/* Top divider down */}
            <path
              d="M 450 0 L 450 70"
              stroke="rgba(245, 158, 11, 0.5)"
              strokeWidth="2"
              fill="none"
            />
            {/* vertical branches down to children */}
            <path d="M 150 70 L 150 96" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" />
            <path d="M 350 70 L 350 96" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" />
            <path d="M 550 70 L 550 96" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" />
            <path d="M 750 70 L 750 96" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" />
          </svg>
        </div>

        {/* Mobile Spacer */}
        <div className="h-12 md:hidden" />

        {/* Children Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full mt-2">
          {children.map((c) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={c.name}
              onClick={() => setSelectedMember(c)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-slate-700 shadow-lg group-hover:border-amber-500/80 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all duration-300">
                <img src={c.imageUrl} alt={c.name} className="w-full h-full object-cover" style={{ objectPosition: getObjectPosition(c.name) }} loading="lazy" />
              </div>
              <h3 className="text-xs font-bold text-white mt-3 text-center">{c.name}</h3>
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-medium mt-0.5">{c.relationship}</span>
            </motion.div>
          ))}
        </div>

        {/* Selected Member Detail Modal Overlay */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                className="w-full max-w-lg glassmorphic-gold p-6 md:p-8 rounded-3xl relative border border-amber-500/20 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Content */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-amber-500 shadow-md">
                    <img src={selectedMember.imageUrl} alt={selectedMember.name} className="w-full h-full object-cover" style={{ objectPosition: getObjectPosition(selectedMember.name) }} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white font-serif">{selectedMember.name}</h3>
                    <p className="text-xs text-amber-400 uppercase tracking-wider font-semibold">{selectedMember.relationship}</p>
                  </div>

                  {/* Quote */}
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 w-full relative">
                    <Quote className="absolute top-2 left-3 text-amber-500/10 w-8 h-8" />
                    <p className="text-slate-200 italic font-serif text-sm leading-relaxed relative z-10 px-4">
                      "{selectedMember.quote}"
                    </p>
                  </div>

                  {/* Favorite Memory */}
                  <div className="w-full space-y-1.5 text-left border-t border-slate-800 pt-4">
                    <span className="text-[10px] text-amber-500 uppercase tracking-widest font-bold">Special Memory:</span>
                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                      {selectedMember.memory}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full mt-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-bold rounded-xl transition-all shadow-md active:scale-[0.98]"
                  >
                    Close Profile
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Pin, MessageSquare } from 'lucide-react';
import { familyData } from '../data/tributeData';

export const MemoryWall: React.FC = () => {
  const notes = familyData.stickyNotes;
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen py-24 bg-[#030919] overflow-hidden px-4 md:px-8 select-none">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 space-y-4 z-20 relative">
        <div className="flex items-center justify-center gap-2 text-amber-500">
          <MessageSquare size={18} />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">Message Board</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-lux">
          Interactive Memory Wall
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm">
          A board of digital notes pinned by family members. Hover or drag the notes around the wall!
        </p>
      </div>

      {/* Constraints board container */}
      <div 
        ref={constraintsRef} 
        className="max-w-5xl mx-auto w-full min-h-[500px] bg-[#06122d]/40 rounded-3xl border border-slate-800 p-8 relative overflow-hidden z-20 shadow-inner"
      >
        {/* Board visual markers (corkboard style pattern) */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Note Grid / scattered cards with drag constraints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {notes.map((note, index) => {
            // Slight initial rotation offsets for retro feel
            const rotation = (index % 3 === 0) ? -2 : (index % 3 === 1) ? 3 : -1;

            return (
              <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                whileDrag={{ scale: 1.05, zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                key={note.id}
                style={{ rotate: rotation }}
                className={`p-6 rounded-2xl glassmorphic cursor-grab active:cursor-grabbing border border-slate-700/30 flex flex-col justify-between shadow-lg relative group transition-colors duration-300 hover:border-amber-500/20`}
              >
                {/* Visual Pin */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-slate-500 group-hover:text-amber-500 transition-colors pointer-events-none">
                  <Pin size={16} className="transform rotate-[20deg]" />
                </div>

                <div className="space-y-4 pt-2">
                  {/* Emoji */}
                  <span className="text-3xl filter drop-shadow-md select-none">{note.emoji}</span>
                  
                  {/* Message */}
                  <p className="text-slate-200 font-serif italic leading-relaxed text-sm">
                    "{note.message}"
                  </p>
                </div>

                {/* Author Signature */}
                <div className="border-t border-slate-800 pt-3 mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">From:</span>
                  <span className="font-cursive text-xl text-amber-400">
                    {note.author}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

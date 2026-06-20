import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { familyData } from '../data/tributeData';

export const Scrapbook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = familyData.scrapbook;

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="relative min-h-screen py-24 flex flex-col items-center justify-center bg-[#020713] overflow-hidden px-4 md:px-8 select-none">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-rose-950/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Title block */}
      <div className="text-center mb-12 space-y-3 z-20">
        <div className="flex items-center justify-center gap-2 text-amber-500">
          <BookOpen size={20} />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">Our Album of Love</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-lux">
          Favorite Scrapbook Memories
        </h2>
        <p className="text-slate-400 max-w-md mx-auto text-sm">
          Flip through the digital pages of our lives, filled with milestones, travels, and warmth.
        </p>
      </div>

      {/* Scrapbook Container */}
      <div className="relative w-full max-w-4xl z-20 flex flex-col items-center justify-center">
        {/* Book Spine / Binder Visual */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] glassmorphic rounded-[2rem] p-4 md:p-8 flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/30 overflow-hidden">
          
          {/* Middle Binder Rings Effect (visible on desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col justify-around py-8 z-30 pointer-events-none">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="w-1.5 h-6 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full shadow-inner" />
                <div className="w-5 h-2 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full border border-amber-600/30" />
                <div className="w-1.5 h-6 bg-gradient-to-l from-amber-600 to-amber-400 rounded-full shadow-inner" />
              </div>
            ))}
          </div>

          {/* Page Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-8 perspective-1000 transform-style-3d"
            >
              {/* LEFT PAGE: Photo Container (Polaroid style) */}
              <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-3 md:p-4 bg-slate-900/20 md:bg-transparent rounded-2xl border border-slate-800/40 md:border-none">
                <div className="relative bg-[#faf7f2] p-4 pb-8 rounded shadow-2xl rotate-[-2deg] max-w-sm w-full transition-transform hover:rotate-[0deg] duration-300">
                  {/* Adhesive tape effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-200/50 backdrop-blur-[1px] border border-amber-300/30 rotate-[1deg] shadow-sm select-none" />
                  
                  <img
                    src={pages[currentPage].imageUrl}
                    alt={pages[currentPage].title}
                    className="w-full aspect-[4/3] object-cover rounded shadow-inner"
                    style={{ objectPosition: pages[currentPage].objectPosition || 'center' }}
                    loading="lazy"
                  />
                  
                  <div className="mt-4 text-center">
                    <span className="font-cursive text-2xl text-slate-800 tracking-wider">
                      {pages[currentPage].date || "Sweet Memory"}
                    </span>
                  </div>
                  
                  {/* Page index indicator inside polaroid */}
                  <div className="absolute bottom-2 right-3 text-[10px] text-slate-400 font-mono">
                    P. 0{currentPage * 2 + 1}
                  </div>
                </div>
              </div>

              {/* RIGHT PAGE: Story & Journal Entry */}
              <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-4 md:px-8 py-4 relative text-left">
                {/* Journal paper styling */}
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {pages[currentPage].tag || "Memory"}
                    </span>
                    <Heart size={14} className="text-rose-500" fill="currentColor" />
                  </div>

                  <h3 className="text-2xl md:text-3.5xl font-semibold text-amber-100 font-serif leading-tight">
                    {pages[currentPage].title}
                  </h3>

                  <p className="text-base md:text-lg text-slate-300 font-serif italic leading-relaxed border-l-2 border-amber-500/30 pl-4 py-1">
                    "{pages[currentPage].content}"
                  </p>

                  <div className="font-cursive text-2xl text-amber-400/90 pt-2">
                    With endless gratitude, <br />
                    your proud children.
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 text-[10px] text-slate-500 font-mono hidden md:block">
                  P. 0{currentPage * 2 + 2}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`w-12 h-12 rounded-full border border-slate-700/50 flex items-center justify-center text-white backdrop-blur-sm transition-all ${
              currentPage === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:border-amber-500 hover:bg-slate-900/60 hover:scale-105 active:scale-95'
            }`}
            title="Previous Page"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="text-sm font-semibold tracking-widest text-slate-400">
            PAGE {currentPage + 1} OF {pages.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === pages.length - 1}
            className={`w-12 h-12 rounded-full border border-slate-700/50 flex items-center justify-center text-white backdrop-blur-sm transition-all ${
              currentPage === pages.length - 1
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:border-amber-500 hover:bg-slate-900/60 hover:scale-105 active:scale-95'
            }`}
            title="Next Page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

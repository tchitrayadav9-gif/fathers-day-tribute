import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Compass, Heart, Landmark, MapPin, Sparkles } from 'lucide-react';
import { familyData } from '../data/tributeData';

export const Timeline: React.FC = () => {
  const events = familyData.timeline;

  // Icon mapping helper
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Heart size={16} className="text-red-500" fill="currentColor" />;
      case 1: return <Compass size={16} className="text-blue-400" />;
      case 2: return <Landmark size={16} className="text-emerald-400" />;
      case 3: return <MapPin size={16} className="text-rose-400" />;
      case 4: return <Sparkles size={16} className="text-amber-400" />;
      default: return <Calendar size={16} className="text-amber-500" />;
    }
  };

  return (
    <section className="relative min-h-screen py-24 bg-[#030919] overflow-hidden px-4 md:px-8 select-none">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-20 space-y-4 z-20 relative">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-500">Milestones</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-lux">
          Our Family Journey Timeline
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm">
          A walkthrough of the beautiful years built on Dad's hard work, love, and protection.
        </p>
      </div>

      {/* Timeline core tree */}
      <div className="relative max-w-5xl mx-auto z-20">
        
        {/* Central vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/80 via-blue-500/50 to-amber-500/20 transform -translate-x-1/2" />

        {/* Timeline Events list */}
        <div className="space-y-16 md:space-y-24">
          {events.map((e, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={e.id} className="relative flex flex-col md:flex-row items-start md:items-center">
                
                {/* Visual Dot on line */}
                <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-30 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                  {getIcon(idx)}
                </div>

                {/* Left block (either Card or spacing spacer) */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-16 flex justify-start md:justify-end ${isLeft ? '' : 'md:invisible md:order-2'}`}>
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="w-full max-w-md bg-slate-900/40 border border-slate-800/80 p-5 md:p-6 rounded-2xl backdrop-blur-md shadow-xl hover:border-amber-500/40 transition-all duration-300 group"
                    >
                      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl mb-4">
                        <img
                          src={e.imageUrl}
                          alt={e.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: e.objectPosition || 'center' }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                        <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-amber-500 text-slate-900 rounded-md tracking-wider">
                          {e.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white font-serif mb-2 group-hover:text-amber-400 transition-colors">
                        {e.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {e.memory}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Right block (either spacing spacer or Card) */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-16 flex justify-start ${isLeft ? 'md:invisible' : 'md:order-2'}`}>
                  {!isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="w-full max-w-md bg-slate-900/40 border border-slate-800/80 p-5 md:p-6 rounded-2xl backdrop-blur-md shadow-xl hover:border-amber-500/40 transition-all duration-300 group"
                    >
                      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl mb-4">
                        <img
                          src={e.imageUrl}
                          alt={e.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: e.objectPosition || 'center' }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                        <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 bg-amber-500 text-slate-900 rounded-md tracking-wider">
                          {e.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white font-serif mb-2 group-hover:text-amber-400 transition-colors">
                        {e.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {e.memory}
                      </p>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

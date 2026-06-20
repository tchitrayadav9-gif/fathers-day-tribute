import React from 'react';
import { motion } from 'framer-motion';
import { CanvasParticles } from './CanvasParticles';
import { Heart, Award, Sparkles } from 'lucide-react';
import { familyData } from '../data/tributeData';

export const LoveStory: React.FC = () => {
  const { anniversary, loveStoryText } = familyData.parents;

  return (
    <section className="relative min-h-screen py-24 flex flex-col items-center justify-center bg-[#020713] overflow-hidden px-4 md:px-8 select-none">
      {/* Falling Flower Petals Canvas Overlay */}
      <CanvasParticles mode="petals" />

      {/* Background glowing rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Header section */}
      <div className="text-center mb-16 space-y-4 z-20 relative">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-500">Love Story</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-lux leading-tight">
          {anniversary} — A Beautiful Journey Together ❤️
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
          {loveStoryText}
        </p>
      </div>

      {/* Main interactive area */}
      <div className="relative w-full max-w-4xl z-20 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8">
        
        {/* Father Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-[280px] bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center shadow-xl group hover:border-amber-500/30 transition-all duration-300"
        >
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-amber-500/30 group-hover:border-amber-500 transition-colors">
            <img
              src={familyData.father.imageUrl}
              alt={familyData.father.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: 'center 12%' }}
              loading="lazy"
            />
          </div>
          <h3 className="text-xl font-bold text-white font-serif">{familyData.father.name}</h3>
          <span className="text-xs text-amber-400 font-medium uppercase tracking-widest mt-1">Husband & Father</span>
        </motion.div>

        {/* Center Golden Rings & Animated Heart */}
        <div className="flex flex-col items-center justify-center py-4 relative z-30">
          
          {/* Animated Heart */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)] z-20"
          >
            <Heart size={44} fill="currentColor" />
          </motion.div>

          {/* Overlapping Wedding Rings (SVG Animation) */}
          <div className="flex items-center justify-center gap-0 mt-6 relative w-32 h-16">
            
            {/* Left Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute left-4 w-12 h-12 rounded-full border-[3px] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center justify-center"
            >
              <div className="w-10 h-10 rounded-full border border-amber-600/30" />
            </motion.div>

            {/* Right Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute right-4 w-12 h-12 rounded-full border-[3px] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center justify-center"
            >
              <div className="w-10 h-10 rounded-full border border-amber-600/30" />
            </motion.div>

          </div>

          <span className="text-[10px] uppercase font-bold text-amber-500/80 tracking-widest mt-4">
            Anniversary Date
          </span>
          <span className="text-xl font-bold font-serif text-white mt-1">
            {anniversary}
          </span>
        </div>

        {/* Mother Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-[280px] bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center shadow-xl group hover:border-amber-500/30 transition-all duration-300"
        >
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-amber-500/30 group-hover:border-amber-500 transition-colors">
            <img
              src={familyData.mother.imageUrl}
              alt={familyData.mother.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: 'center 18%' }}
              loading="lazy"
            />
          </div>
          <h3 className="text-xl font-bold text-white font-serif">{familyData.mother.name}</h3>
          <span className="text-xs text-amber-400 font-medium uppercase tracking-widest mt-1">Wife & Mother</span>
        </motion.div>

      </div>

      {/* Love journey summary badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl w-full z-20 px-4">
        
        <div className="bg-slate-900/35 border border-slate-800/80 p-5 rounded-xl text-center flex flex-col items-center">
          <Heart className="text-rose-500 mb-2" size={24} fill="currentColor" />
          <span className="text-lg font-semibold text-white">Years of Love</span>
          <p className="text-xs text-slate-400 mt-1">Boundless respect and support since day one.</p>
        </div>

        <div className="bg-slate-900/35 border border-slate-800/80 p-5 rounded-xl text-center flex flex-col items-center">
          <Award className="text-amber-500 mb-2" size={24} />
          <span className="text-lg font-semibold text-white">Years of Togetherness</span>
          <p className="text-xs text-slate-400 mt-1">Walking hand-in-hand through life's pathways.</p>
        </div>

        <div className="bg-slate-900/35 border border-slate-800/80 p-5 rounded-xl text-center flex flex-col items-center">
          <Sparkles className="text-blue-400 mb-2" size={24} />
          <span className="text-lg font-semibold text-white">Family Built With Love</span>
          <p className="text-xs text-slate-400 mt-1">Nurturing children who carry your values forward.</p>
        </div>

      </div>
    </section>
  );
};

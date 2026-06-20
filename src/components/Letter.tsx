import React from 'react';
import { motion } from 'framer-motion';

export const Letter: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.3
      }
    }
  } as const;

  const lineVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: 'easeOut' }
    }
  } as const;


  return (
    <section className="relative min-h-screen py-24 flex items-center justify-center bg-[#030919] overflow-hidden px-4 md:px-8 select-none">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="relative max-w-3xl w-full glassmorphic-gold p-8 md:p-16 rounded-3xl shadow-2xl overflow-hidden border border-amber-500/10"
      >
        {/* Decorative corner borders */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/30 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500/30 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500/30 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/30 rounded-br-3xl" />

        {/* Letter content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8 md:space-y-12 text-slate-100 relative z-10"
        >
          {/* Header */}
          <motion.h3 
            variants={lineVariants}
            className="text-4xl md:text-5xl text-amber-400 font-cursive text-left border-b border-amber-500/20 pb-4"
          >
            Dear Dad ❤️
          </motion.h3>

          {/* Letter Body in Cursive/Handwriting style */}
          <div className="space-y-6 md:space-y-8 text-2xl md:text-3.5xl font-cursive leading-relaxed tracking-wide text-slate-200/90 text-left font-light">
            <motion.p variants={lineVariants}>
              Thank you for every single sacrifice you've made for us, without ever uttering a word of complaint.
            </motion.p>
            
            <motion.p variants={lineVariants}>
              Thank you for believing in me and my siblings when the world was filled with doubts. Your confidence is our wings.
            </motion.p>
            
            <motion.p variants={lineVariants}>
              Thank you for teaching us that honesty, dignity, and a pure heart are the only real treasures in this life.
            </motion.p>
            
            <motion.p variants={lineVariants}>
              Thank you for giving us your strength when we were weak, and showing us how to face storms with absolute courage.
            </motion.p>
            
            <motion.p variants={lineVariants}>
              Thank you for protecting our family and standing as an unbreakable pillar of safety and reassurance.
            </motion.p>
            
            <motion.p variants={lineVariants} className="text-amber-400/90">
              I may never be able to repay even a fraction of everything you've done for us, but I hope this little tribute reminds you how deeply, truly, and eternally you are loved.
            </motion.p>
          </div>

          {/* Footer */}
          <motion.div 
            variants={lineVariants}
            className="text-right pt-6 md:pt-10 border-t border-amber-500/10 space-y-2"
          >
            <p className="text-xl md:text-2xl text-slate-400 font-serif italic">Love Always,</p>
            <p className="text-3xl md:text-4xl text-amber-500 font-cursive tracking-wide">
              Your Loving Children ❤️
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

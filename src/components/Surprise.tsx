import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CanvasParticles } from './CanvasParticles';
import { Heart, Sparkles, Gift } from 'lucide-react';

export const Surprise: React.FC = () => {
  const [isSurprised, setIsSurprised] = useState(false);

  const handleSurpriseClick = () => {
    setIsSurprised(true);

    // Confetti burst 1
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });

    // Delayed confetti bursts for continuous joy
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, animate a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <section className="relative min-h-screen py-24 flex flex-col items-center justify-center bg-[#030919] overflow-hidden px-4 md:px-8 select-none">
      
      {/* High Energy Canvas overlay when active */}
      {isSurprised && <CanvasParticles mode="surprise" />}

      {/* Background visual glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isSurprised ? (
          // Initial Button State
          <motion.div
            key="button-state"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 z-20"
          >
            <div className="flex justify-center text-amber-500 animate-bounce">
              <Gift size={48} className="drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]" />
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif-lux">
                One Last Thing, Dad...
              </h2>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                We have a special surprise package ready for you. Click the button below to open it!
              </p>
            </div>

            <button
              onClick={handleSurpriseClick}
              className="relative px-12 py-5 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.7)] transform hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <span className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-yellow-400 animate-ping" />
              <div className="flex items-center gap-2">
                <Heart size={20} fill="currentColor" className="text-white animate-pulse" />
                <span>❤️ Surprise Dad ❤️</span>
                <Sparkles size={20} className="text-white" />
              </div>
            </button>
          </motion.div>
        ) : (
          // Revealed Letter State
          <motion.div
            key="reveal-state"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl w-full glassmorphic-gold p-8 md:p-12 rounded-[2.5rem] border border-amber-500/20 text-center space-y-8 z-20 shadow-2xl relative"
          >
            {/* Corner glows */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-red-500/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />

            <div className="flex justify-center text-red-500">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart size={64} fill="currentColor" className="drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
              </motion.div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-400 font-serif-lux text-gold-glow">
                Thank you, Dad.
              </h2>
              
              <h3 className="text-2xl md:text-3.5xl font-serif text-slate-100 font-medium leading-relaxed italic">
                "Everything I am today... <br className="hidden md:inline" />
                is because of you."
              </h3>
            </div>

            <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto">
              Your guidance, patience, work ethic, and unconditional love have shaped our lives. We are forever proud and blessed to be called your children.
            </p>

            <div className="border-t border-slate-800/80 pt-6">
              <span className="text-xs text-amber-500 font-semibold uppercase tracking-[0.25em]">
                Happy Father's Day
              </span>
              <h4 className="text-xl md:text-2xl text-slate-200 font-serif font-bold mt-1">
                T Chinna Kullayappa
              </h4>
            </div>

            <button
              onClick={() => setIsSurprised(false)}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-widest font-mono"
            >
              Reset Surprise
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

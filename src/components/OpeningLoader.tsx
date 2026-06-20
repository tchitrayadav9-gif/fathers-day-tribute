import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OpeningLoaderProps {
  onComplete: () => void;
}

export const OpeningLoader: React.FC<OpeningLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show quote text slightly after mount
    const timer = setTimeout(() => setShowText(true), 500);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for realistic load
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 250);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Delay completion slightly for smooth transition
      const endTimer = setTimeout(() => {
        onComplete();
      }, 1200);
      return () => clearTimeout(endTimer);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020713]">
      <div className="max-w-2xl px-6 text-center select-none">
        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-4xl italic text-slate-300 font-serif leading-relaxed">
                "Every hero doesn't wear a cape."
              </h2>
              
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 1.5 }}
                className="text-4xl md:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 font-serif-lux text-gold-glow"
              >
                Mine is called Dad.
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bar Container */}
        <div className="mt-16 w-64 md:w-80 mx-auto">
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-900/50">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-300"
            />
          </div>
          <div className="mt-2 text-slate-500 text-xs tracking-widest uppercase">
            Loading Memories... {Math.min(progress, 100)}%
          </div>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
};

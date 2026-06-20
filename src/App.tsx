import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OpeningLoader } from './components/OpeningLoader';
import { CustomCursor } from './components/CustomCursor';
import { MusicPlayer } from './components/MusicPlayer';
import { Hero } from './components/Hero';
import { Letter } from './components/Letter';
import { Scrapbook } from './components/Scrapbook';
import { Timeline } from './components/Timeline';
import { LoveStory } from './components/LoveStory';
import { Teachings } from './components/Teachings';
import { FamilyTree } from './components/FamilyTree';
import { MemoryWall } from './components/MemoryWall';
import { Achievements } from './components/Achievements';
import { Surprise } from './components/Surprise';
import { Heart } from 'lucide-react';
import { familyData } from './data/tributeData';

function App() {
  const [loading, setLoading] = useState(true);

  // Scroll Refs
  const memoriesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <OpeningLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative min-h-screen text-slate-100 bg-[#030a1c]"
          >
            {/* Custom Cursor for Luxury Experience */}
            <CustomCursor />

            {/* Ambient Audio Player */}
            <MusicPlayer autoPlay={true} />

            {/* Sections */}
            <Hero
              onScrollToMemories={() => scrollToSection(memoriesRef)}
              onScrollToTimeline={() => scrollToSection(timelineRef)}
            />

            {/* Handwritten Letter */}
            <Letter />

            {/* Favorite Memories Scrapbook */}
            <div ref={memoriesRef}>
              <Scrapbook />
            </div>

            {/* Family Journey Timeline */}
            <div ref={timelineRef}>
              <Timeline />
            </div>

            {/* Parents' Love Story & Anniversary */}
            <LoveStory />

            {/* Things Dad Taught Me */}
            <Teachings />

            {/* Interactive Family Tree */}
            <FamilyTree />

            {/* Floating Message Sticky Notes Wall */}
            <MemoryWall />

            {/* Achievements & 100 Reasons Explorer */}
            <Achievements />

            {/* Surprise Trigger Card */}
            <Surprise />

            {/* Luxury Footer */}
            <footer className="relative bg-[#020713] border-t border-slate-900 py-16 px-6 text-center select-none z-20">
              <div className="max-w-4xl mx-auto space-y-6">
                
                <div className="flex justify-center text-red-500 gap-1 animate-pulse">
                  <Heart size={16} fill="currentColor" />
                  <Heart size={20} fill="currentColor" />
                  <Heart size={16} fill="currentColor" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide">
                    Made with endless love & gratitude ❤️
                  </h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                    For our beloved father
                  </p>
                  <h4 className="text-2xl md:text-3xl text-amber-500 font-serif font-semibold text-gold-glow mt-1">
                    {familyData.father.name}
                  </h4>
                </div>

                <p className="text-xs text-slate-400 font-light max-w-sm mx-auto leading-relaxed">
                  A gift from your daughters and son. You will always be our hero, our strength, and our home.
                </p>

                <div className="text-[10px] text-slate-600 font-mono pt-6 uppercase tracking-wider">
                  © 2026 Tribute Album • Happy Father's Day
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

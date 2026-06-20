import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [useSynth, setUseSynth] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<number | null>(null);

  // Royalty-free peaceful cinematic piano track
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // standard testing mp3 or a custom quiet piano loop


  // Web Audio Synth for procedural ambient background music
  const startSynthMusic = () => {
    if (synthIntervalRef.current) return;

    // Create AudioContext
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;

    const chords = [
      [220, 261.63, 329.63, 440], // Am (A2, C4, E4, A4)
      [174.61, 220, 261.63, 349.23], // F (F2, A3, C4, F4)
      [261.63, 329.63, 392, 523.25], // C (C3, E4, G4, C5)
      [196, 246.94, 293.66, 392]     // G (G2, B3, D4, G4)
    ];

    let chordIdx = 0;
    let step = 0;

    const playNode = (freq: number, time: number, duration: number) => {
      if (ctx.state === 'suspended') return;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle'; // Soft sine-like sound
      osc.frequency.setValueAtTime(freq, time);

      // Slow attack, long release
      gainNode.gain.setValueAtTime(0, time);
      gainNode.gain.linearRampToValueAtTime(volume * 0.15, time + 0.5);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, time);

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(time);
      osc.stop(time + duration);
    };

    const tick = () => {
      if (ctx.state === 'suspended') return;

      const now = ctx.currentTime;
      const currentChord = chords[chordIdx];
      
      // Play a note from the chord
      const noteFreq = currentChord[step % currentChord.length];
      playNode(noteFreq, now, 3.5);

      step++;
      if (step % 8 === 0) {
        // Change chord every 8 steps
        chordIdx = (chordIdx + 1) % chords.length;
      }
    };

    // Trigger tick every 1.5 seconds
    synthIntervalRef.current = window.setInterval(tick, 1500);
  };

  const stopSynthMusic = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
  };

  // Effect to handle toggling
  useEffect(() => {
    if (isPlaying) {
      if (useSynth) {
        startSynthMusic();
      } else {
        if (audioRef.current) {
          audioRef.current.volume = isMuted ? 0 : volume;
          audioRef.current.play().catch(() => {
            // If browser blocks audio autoplay, fallback to synthesized music
            console.log("Audio block: switching to procedural synth");
            setUseSynth(true);
          });
        }
      }
    } else {
      if (useSynth) {
        stopSynthMusic();
      } else {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }
    }

    return () => {
      stopSynthMusic();
    };
  }, [isPlaying, useSynth]);

  // Adjust volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
    if (audioCtxRef.current && isMuted) {
      // simulate mute on synth by closing and resuming
      if (audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
    } else if (audioCtxRef.current && !isMuted) {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    // Resume context if browser blocked it
    if (useSynth && audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleSource = () => {
    setIsPlaying(false);
    stopSynthMusic();
    setUseSynth(!useSynth);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-2 rounded-full glassmorphic-gold text-white shadow-2xl transition-all hover:scale-105 select-none">
      {/* Hidden audio element for premium track */}
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 text-slate-900 transition-colors shadow-md"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
      </button>

      <div className="flex flex-col">
        <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">
          {isPlaying ? "Playing tribute track" : "Music is paused"}
        </span>
        <span className="text-xs text-slate-300 font-medium truncate max-w-[120px]">
          {useSynth ? "Ambient Piano Synth" : "Melodic Piano Solo"}
        </span>
      </div>

      <div className="flex items-center gap-1.5 ml-2 border-l border-slate-700/50 pl-3">
        <button
          onClick={toggleMute}
          className="text-slate-400 hover:text-white transition-colors"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />

        <button
          onClick={toggleSource}
          className="text-[10px] text-slate-400 hover:text-amber-400 font-bold border border-slate-700 rounded px-1.5 py-0.5 ml-1 bg-slate-800/40"
          title="Switch music source"
        >
          {useSynth ? "MP3" : "SYNTH"}
        </button>
      </div>
    </div>
  );
};

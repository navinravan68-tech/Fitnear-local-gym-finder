import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Dumbbell } from 'lucide-react';

interface SplashProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashProps> = ({ onComplete }) => {
  useEffect(() => {
    // Audio: Yeah buddy
    try {
      const audio = new Audio('https://www.myinstants.com/media/sounds/ronnie-coleman-yeah-buddy.mp3');
      audio.play().catch(e => console.log('Audio playback failed:', e));
    } catch (e) {
      console.log('Audio error:', e);
    }

    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-dark-bg flex flex-col items-center justify-center z-50 overflow-hidden">
      <div className="relative">
        {/* Background Location Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <MapPin size={240} className="text-neon-accent" />
        </motion.div>

        {/* Person Deadlifting (Icon Representation) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="relative z-10 flex items-center justify-center bg-neon-accent p-8 rounded-full shadow-[0_0_50px_rgba(198,255,0,0.3)]"
        >
          <Dumbbell size={80} className="text-black" />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <h1 className="text-6xl font-display font-black tracking-tighter italic text-neon-accent">
          FITNEAR
        </h1>
        <p className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-[10px] mt-2">
          Find Your Perfect Gym Nearby
        </p>
      </motion.div>

      {/* Barbell loading effect */}
      <motion.div 
        className="mt-12 w-48 h-1 bg-zinc-800 rounded-full overflow-hidden"
      >
        <motion.div 
          className="h-full bg-neon-accent shadow-[0_0_10px_#c6ff00]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

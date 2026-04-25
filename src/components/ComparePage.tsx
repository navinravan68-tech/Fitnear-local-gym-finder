import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, ArrowRight, Zap, Users, MapPin, IndianRupee } from 'lucide-react';
import { CHENNAI_GYMS } from '../lib/mockData';
import { Gym } from '../types';

export const ComparePage: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const selectedGyms = CHENNAI_GYMS.filter(g => selectedIds.includes(g.id));

  const toggleGym = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(prev => prev.filter(i => i !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  return (
    <div className="pb-32 px-6 pt-10">
      <header className="mb-10">
        <h1 className="text-3xl font-display font-black tracking-tight leading-none italic text-neon-accent">BATTLE MODE</h1>
        <p className="text-zinc-500 text-[9px] uppercase font-black tracking-[0.3em] mt-2 leading-none">Side-by-side spec comparison</p>
      </header>

      {/* Selector - Modern Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6">
        {CHENNAI_GYMS.map(gym => (
          <button
            key={gym.id}
            onClick={() => toggleGym(gym.id)}
            className={`min-w-[150px] p-4 rounded-[24px] border transition-all relative overflow-hidden group ${
              selectedIds.includes(gym.id) 
                ? 'border-neon-accent bg-neon-accent/10 shadow-lg shadow-neon-accent/10' 
                : 'border-zinc-800 bg-zinc-900/40 opacity-80 hov:opacity-100'
            }`}
          >
            <div className="w-full h-24 rounded-xl overflow-hidden mb-3 relative">
              <img src={gym.images[0]} alt={gym.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all" />
              {selectedIds.includes(gym.id) && (
                <div className="absolute inset-0 bg-neon-accent/20 flex items-center justify-center">
                  <div className="bg-black text-neon-accent rounded-full p-2 border border-neon-accent/50 shadow-xl">
                    <Check size={16} />
                  </div>
                </div>
              )}
            </div>
            <p className={`text-[10px] font-black tracking-tight text-center truncate w-full ${selectedIds.includes(gym.id) ? 'text-neon-accent' : 'text-zinc-400'}`}>
              {gym.name.split(' ')[0].toUpperCase()}
            </p>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedGyms.length > 0 ? (
          <motion.div
            key="comparison"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Comparison Grid */}
            <div className="bg-zinc-900/40 p-2 rounded-[32px] border border-zinc-800">
              {/* Labels - Sticky Header style */}
              <div className="grid grid-cols-12 mb-4 p-4 border-b border-zinc-800">
                <div className="col-span-3 text-[8px] font-black text-zinc-600 uppercase tracking-widest mt-24">SPECS</div>
                {selectedGyms.map(gym => (
                  <div key={gym.id} className="col-span-3 px-1 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden mb-2 border border-zinc-800">
                       <img src={gym.images[0]} alt={gym.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-[9px] font-black text-zinc-100 uppercase text-center truncate w-full">{gym.name.split(' ')[0]}</h4>
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              <div className="space-y-px">
                <ComparisonRow label="MONTHLY" values={selectedGyms.map(g => `₹${g.startingPrice}`)} highlight="low" />
                <ComparisonRow label="RATING" values={selectedGyms.map(g => g.rating.toString())} highlight="high" />
                <ComparisonRow label="CROWD" values={selectedGyms.map(g => g.crowdStatus)} />
                <ComparisonRow label="FACILITIES" values={selectedGyms.map(g => g.facilities.length.toString())} highlight="high" />
              </div>
            </div>

            {/* Smart Verdict Box */}
            <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[32px] p-6">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-10 h-10 bg-neon-accent/10 border border-neon-accent/20 rounded-xl flex items-center justify-center">
                    <Zap size={20} className="text-neon-accent" />
                 </div>
                 <h3 className="text-xs font-black text-zinc-100 uppercase tracking-widest leading-none">FitNear Verdict</h3>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium leading-relaxed">
                Based on your preference for <span className="text-neon-accent">Low Pricing</span> and <span className="text-neon-accent">Premium Equipment</span>, 
                {selectedGyms[0].name} leads the comparison in value.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center mb-6 border border-zinc-800 shadow-xl">
              <Zap size={40} className="text-zinc-700" />
            </div>
            <h3 className="text-sm font-black uppercase text-zinc-500 tracking-widest">Select to Compare</h3>
            <p className="text-zinc-600 text-[10px] uppercase font-bold mt-2 max-w-[200px] tracking-tight">Choose up to 3 gyms for analysis</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ComparisonRow: React.FC<{ label: string; values: string[]; highlight?: 'low' | 'high' }> = ({ label, values, highlight }) => (
  <div className="grid grid-cols-12 p-5 hover:bg-zinc-800/50 transition-colors rounded-xl items-center">
    <div className="col-span-3 text-[8px] font-black text-zinc-600 uppercase tracking-[0.2em]">{label}</div>
    {values.map((v, i) => (
      <div key={i} className="col-span-3 text-center">
        <span className={`text-[11px] font-black uppercase ${highlight ? 'text-neon-accent' : 'text-zinc-400'}`}>{v}</span>
      </div>
    ))}
  </div>
);

import { Check } from 'lucide-react';

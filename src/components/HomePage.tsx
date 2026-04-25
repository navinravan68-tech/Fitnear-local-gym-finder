import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search as SearchIcon, MapPin, Star, Filter, ArrowRight, Dumbbell, Users } from 'lucide-react';
import { CHENNAI_GYMS } from '../lib/mockData';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'budget', name: 'Budget Gyms' },
  { id: 'premium', name: 'Premium Gyms' },
  { id: 'ladies', name: 'Ladies Gyms' },
  { id: 'crossfit', name: 'CrossFit' },
  { id: 'yoga', name: 'Yoga + Fitness' },
  { id: 'mma', name: 'Martial Arts' }
];

import { useTranslation } from '../lib/i18n';
import { useAuth } from '../lib/AuthContext';

export const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { t, lang, setLang } = useTranslation();
  const { profile } = useAuth();

  const POPULAR_AREAS = [
    'Adyar', 'T-Nagar', 'Anna Nagar', 'Velachery', 'Nandanam', 'Mylapore', 'Besant Nagar'
  ];

  const filteredGyms = CHENNAI_GYMS.filter(gym => {
    const matchesCategory = activeCategory === 'all' || gym.category === activeCategory;
    const matchesSearch = gym.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          gym.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAreaClick = (area: string) => {
    setSearchQuery(area);
    const element = document.getElementById('search-input');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pb-32">
      {/* Header */}
      <header className="px-6 pt-10 pb-4">
        <div className="flex justify-between items-center mb-8 shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-neon-accent rounded-xl flex items-center justify-center shadow-lg shadow-neon-accent/20">
                <Dumbbell size={20} className="text-black" />
             </div>
             <div>
                <h1 className="text-2xl font-display font-black tracking-tighter text-neon-accent leading-none">FITNEAR</h1>
                <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Find Your Perfect Gym</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-400"
            >
              <MapPin size={10} className="text-neon-accent" /> {lang === 'en' ? 'EN | தமிழ்' : 'தமிழ் | EN'}
            </button>
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden p-0.5">
               <img 
                 src={profile?.photoURL || `https://ui-avatars.com/api/?name=${profile?.displayName || 'User'}&background=c6ff00&color=000`} 
                 className="w-full h-full rounded-full object-cover" 
                 alt="" 
               />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group mx-2" id="search-input">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-neon-accent transition-colors">
            <SearchIcon size={18} />
          </div>
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 text-sm text-zinc-100 focus:outline-none focus:ring-1 focus:ring-neon-accent/50 transition-all font-medium"
          />
        </div>

        {/* Popular Areas Chips */}
        <div className="mt-6">
          <p className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-3 ml-2">Popular Areas</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 px-2">
            {POPULAR_AREAS.map(area => (
              <button
                key={area}
                onClick={() => handleAreaClick(area)}
                className={`px-3 py-1.5 rounded-lg border text-[9px] font-bold whitespace-nowrap transition-all ${
                  searchQuery.toLowerCase() === area.toLowerCase() 
                    ? 'bg-neon-accent/10 border-neon-accent text-neon-accent' 
                    : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="overflow-x-auto no-scrollbar py-6">
        <div className="flex gap-3 px-8 min-w-max">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] transition-all border ${
                activeCategory === cat.id 
                  ? 'bg-neon-accent border-neon-accent text-black shadow-lg shadow-neon-accent/20' 
                  : 'bg-zinc-900 border-zinc-800 text-zinc-500'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Banner - Simplified and Modern */}
      <div className="px-8 my-4">
        <div className="bg-gradient-to-tr from-zinc-900 to-zinc-800 rounded-[32px] p-8 relative overflow-hidden border border-zinc-800">
          <div className="relative z-10 w-3/4">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-1.5 h-1.5 bg-neon-accent rounded-full animate-pulse" />
               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-neon-accent">Smart Recommendations</span>
            </div>
            <h3 className="text-zinc-100 font-display font-black text-2xl leading-none tracking-tight">AI GUIDED<br/>FITNESS JOURNEY</h3>
            <button className="mt-6 bg-neon-accent text-black px-5 py-2.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-2 active:scale-95 transition-transform">
              Explore Now <ArrowRight size={14} />
            </button>
          </div>
          <div className="absolute -right-12 -bottom-12 w-48 h-48 border-[16px] border-neon-accent/5 rounded-full" />
        </div>
      </div>

      {/* Nearby Gyms */}
      <section className="px-8 mt-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-300">Nearby Gyms</h3>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-neon-accent transition-colors cursor-pointer">View Map</span>
        </div>

        <div className="space-y-6">
          {filteredGyms.map((gym, index) => (
            <motion.div
              key={gym.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/gym/${gym.id}`)}
              className="bg-zinc-900/50 rounded-[32px] border border-zinc-800 p-3 group active:scale-[0.98] transition-all cursor-pointer hover:bg-zinc-900"
            >
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                <img src={gym.images[0]} alt={gym.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                   <div className="bg-neon-accent text-black px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest leading-none">
                      1.2 KM AWAY
                   </div>
                </div>
                <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-xl flex items-center gap-1 border border-zinc-800">
                  <Star size={10} className="text-neon-accent fill-neon-accent" />
                  <span className="text-[10px] font-black text-zinc-100">{gym.rating}</span>
                </div>
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-end mb-2">
                  <h4 className="text-base font-bold tracking-tight text-zinc-100">{gym.name}</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] font-black uppercase tracking-tighter text-green-500">{t('lowCrowd')}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-zinc-500">
                  <div className="flex items-center gap-1 text-[10px] font-medium tracking-tight">
                    <MapPin size={10} />
                    <span>Adyar, Chennai</span>
                  </div>
                  <span className="text-[10px] font-black text-neon-accent uppercase tracking-widest">₹{gym.startingPrice}<span className="text-[8px] text-zinc-600 ml-0.5">/MO</span></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

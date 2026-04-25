import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { CHENNAI_GYMS } from '../lib/mockData';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = CHENNAI_GYMS.filter(g => 
    g.name.toLowerCase().includes(query.toLowerCase()) || 
    g.city.toLowerCase().includes(query.toLowerCase()) ||
    g.address.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pb-32">
      <header className="px-6 pt-8 pb-6 bg-card-bg/50 sticky top-0 backdrop-blur-xl z-20 border-b border-white/5">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="text-white/60"><ArrowLeft size={24} /></button>
          <h1 className="text-xl font-bold uppercase tracking-tight">Explore Chennai</h1>
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
          <input
            autoFocus
            type="text"
            placeholder="Search gym, area, or city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-card-bg border border-white/10 rounded-2xl pl-12 pr-12 py-4 text-white focus:outline-none focus:border-neon-green/50"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </header>

      <div className="px-6 py-6">
        {query ? (
          <div className="space-y-6">
            <p className="text-[10px] font-black uppercase text-white/30 tracking-widest px-2">Results for "{query}"</p>
            {results.map((gym) => (
              <motion.div 
                key={gym.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => navigate(`/gym/${gym.id}`)}
                className="flex gap-4 group active:bg-white/5 p-2 rounded-2xl transition-all"
              >
                <img src={gym.images[0]} className="w-20 h-20 rounded-2xl object-cover border border-white/5" alt="" />
                <div className="flex-1 py-1">
                  <h4 className="font-bold group-hover:text-neon-green transition-colors">{gym.name}</h4>
                  <div className="flex items-center gap-1 text-white/40 text-[10px] uppercase font-bold mt-1">
                    <MapPin size={10} />
                    <span>{gym.address}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-neon-green font-black text-xs">₹{gym.startingPrice}</span>
                    <span className="text-[10px] text-white/20 font-bold uppercase">4.8 Rating</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <section>
              <h3 className="text-xs font-black uppercase tracking-widest text-white/30 mb-4 px-2">Trending Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['Premium Gyms', 'Yoga Classes', 'T.Nagar', 'Ladies Specialist', 'Strength Training'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white/60 active:bg-neon-green active:text-black transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xs font-black uppercase tracking-widest text-white/30 mb-4 px-2">Popular Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Adyar', 'Nandanam', 'T-Nagar', 'Velachery'].map(area => (
                  <div key={area} className="bg-card-bg border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                    <div className="p-2 bg-neon-green/10 rounded-lg text-neon-green">
                      <MapPin size={16} />
                    </div>
                    <span className="text-sm font-bold">{area}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

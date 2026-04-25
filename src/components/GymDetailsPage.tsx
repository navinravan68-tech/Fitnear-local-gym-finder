import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Share2, Heart, MapPin, Instagram, 
  MessageCircle, Star, ShieldCheck, Clock, CheckCircle2 
} from 'lucide-react';
import { CHENNAI_GYMS } from '../lib/mockData';

export const GymDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const gym = CHENNAI_GYMS.find(g => g.id === id);

  if (!gym) return <div className="p-8 text-center">Gym not found</div>;

  return (
    <div className="pb-32">
      {/* Header Image */}
      <div className="relative h-[45vh] w-full">
        <img src={gym.images[0]} alt={gym.name} className="w-full h-full object-cover grayscale-[0.2]" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
        
        {/* Top Controls */}
        <div className="absolute top-8 left-0 right-0 px-6 flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
              <Share2 size={16} />
            </button>
            <button className="w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
              <Heart size={16} />
            </button>
          </div>
        </div>

        {/* Content Over Image */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-neon-accent/10 text-neon-accent border border-neon-accent/30 px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-[0.2em]">
              Verified Partner
            </div>
            <div className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-[0.2em] ${
              gym.status === 'open' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {gym.status}
            </div>
          </div>
          <h1 className="text-3xl font-display font-black tracking-tight">{gym.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-zinc-500 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-neon-accent" />
              <span>{gym.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="flex px-6 gap-3 -mt-4 relative z-10">
        <div className="flex-1 bg-zinc-900 border border-zinc-800 p-4 rounded-[24px] flex flex-col items-center">
          <span className="text-xl font-black text-zinc-100">{gym.rating}</span>
          <span className="text-[8px] uppercase font-black text-zinc-600 tracking-widest mt-1">Rating</span>
        </div>
        <div className="flex-1 bg-zinc-900 border border-zinc-800 p-4 rounded-[24px] flex flex-col items-center">
          <span className="text-xl font-black text-zinc-100 italic">AC</span>
          <span className="text-[8px] uppercase font-black text-zinc-600 tracking-widest mt-1">Cooling</span>
        </div>
        <div className="flex-1 bg-zinc-900 border border-neon-accent/20 p-4 rounded-[24px] flex flex-col items-center">
          <span className="text-xl font-black text-neon-accent">9-11</span>
          <span className="text-[8px] uppercase font-black text-zinc-600 tracking-widest mt-1">Rush Hour</span>
        </div>
      </div>

      {/* Facilities */}
      <section className="px-6 mt-10">
        <h3 className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500 mb-4">Premium Facilities</h3>
        <div className="grid grid-cols-2 gap-3">
          {gym.facilities.map((f) => (
            <div key={f} className="bg-zinc-900/50 p-4 rounded-2xl flex items-center gap-3 border border-zinc-800">
              <div className="w-8 h-8 rounded-lg bg-neon-accent/10 flex items-center justify-center">
                 <CheckCircle2 size={16} className="text-neon-accent" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-zinc-300">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 mt-10">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500">Membership Plans</h3>
          <span className="text-neon-accent text-[8px] font-black uppercase tracking-widest bg-neon-accent/10 px-2 py-1 rounded-lg">Exclusive Offers</span>
        </div>
        <div className="space-y-3">
          {gym.plans.map((plan, idx) => (
            <div key={plan.name} className={`p-5 rounded-[24px] flex justify-between items-center transition-all border ${
              idx === 1 ? 'bg-neon-accent/5 border-neon-accent/30' : 'bg-zinc-900 border-zinc-800'
            }`}>
              <div>
                <h4 className={`text-sm font-bold ${idx === 1 ? 'text-neon-accent' : 'text-zinc-100'}`}>{plan.name} Package</h4>
                <p className="text-[10px] text-zinc-500 font-medium tracking-tight mt-0.5">Full access for {plan.duration}</p>
              </div>
              <div className="text-right">
                <span className={`block text-lg font-black ${idx === 1 ? 'text-neon-accent' : 'text-zinc-100'}`}>₹{plan.price}</span>
                {idx === 1 && <span className="block text-[8px] font-black uppercase text-neon-accent/60 -mt-1">Best Value</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Map */}
      <section className="px-6 mt-10">
        <h3 className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500 mb-4">Exact Location</h3>
        <div className="w-full h-48 rounded-[24px] overflow-hidden border border-zinc-800 bg-zinc-900">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(gym.name + ' ' + gym.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
        </div>
        <p className="text-[9px] text-zinc-600 mt-2 italic">* Map view depends on API availability</p>
      </section>

      {/* Trainers */}
      <section className="px-6 mt-8 overflow-hidden">
        <h3 className="text-lg font-bold mb-4">Popular Trainers</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {gym.trainers.map((t) => (
            <div key={t.name} className="min-w-[120px] flex flex-col items-center">
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-neon-green mb-2" />
              <span className="text-xs font-bold text-center">{t.name}</span>
              <span className="text-[10px] text-white/40 uppercase font-bold">{t.specialty}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-bg via-dark-bg to-transparent z-30 flex flex-col gap-3 pb-10">
        <button className="btn-primary w-full shadow-neon-accent/40 h-14">
          BOOK FREE TRIAL
        </button>
        <div className="flex gap-3">
          <button className="flex-1 btn-secondary h-14 bg-zinc-900 border-zinc-800">
            <MessageCircle size={18} className="text-green-500" /> WhatsApp
          </button>
          <button className="flex-1 btn-secondary h-14 bg-zinc-900 border-zinc-800">
            <Instagram size={18} className="text-pink-500" /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { 
  Settings, Bell, LogOut, Heart, 
  History, Target, ShoppingBag, ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { auth } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';

export const DashboardPage: React.FC = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <div className="pb-32 px-6 pt-10">
      {/* Profile Header */}
      <header className="flex justify-between items-start mb-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-[24px] bg-neon-accent p-0.5 shadow-xl shadow-neon-accent/10">
            <img 
              src={profile?.photoURL || `https://ui-avatars.com/api/?name=${profile?.displayName || 'User'}&background=c6ff00&color=000`} 
              alt="Profile" 
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-display font-black tracking-tight leading-none text-zinc-100">{profile?.displayName}</h1>
            <p className="text-zinc-500 text-[9px] font-black uppercase tracking-[0.3em] leading-none mt-2">{profile?.userType} ELITE</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-neon-accent transition-colors">
            <Bell size={18} />
          </button>
          <button className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-neon-accent transition-colors">
            <Settings size={18} />
          </button>
        </div>
      </header>

      {/* Fitness Goals */}
      <section className="mb-10">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[32px] p-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Target size={14} className="text-neon-accent" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Current Progress</h3>
              </div>
              <span className="text-lg font-black text-neon-accent">65%</span>
            </div>
            
            <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden mb-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                className="h-full bg-neon-accent shadow-[0_0_10px_#c6ff00]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {(profile?.fitnessGoals || ['Weight Loss', 'Muscle Gain', 'Endurance']).map(goal => (
                <span key={goal} className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 text-[9px] font-black uppercase tracking-wider rounded-lg">
                  {goal}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-neon-accent/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Authorized Supplements Store */}
      <section className="mb-10">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-4 px-2">Marketplace</h3>
        <div className="space-y-3">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-5 flex items-center justify-between group active:scale-[0.98] transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-neon-accent/10 flex items-center justify-center text-neon-accent shadow-inner">
                <ShoppingBag size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zinc-100">FitNear Health Store</h4>
                <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-0.5">Professional Supplements</p>
              </div>
            </div>
            <ExternalLink size={16} className="text-zinc-700 group-hover:text-neon-accent transition-colors" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a 
              href="https://www.nutrabay.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-zinc-900 transition-colors"
            >
              <span className="text-[10px] font-black text-zinc-100 italic">NUTRABAY</span>
              <span className="text-[8px] uppercase text-zinc-600 font-bold">Official Partner</span>
            </a>
            <a 
              href="https://hyugalife.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-zinc-900 transition-colors"
            >
              <span className="text-[10px] font-black text-zinc-100 italic">HYUGALIFE</span>
              <span className="text-[8px] uppercase text-zinc-600 font-bold">Wellness Store</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Menu */}
      <section className="space-y-3">
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-[24px] p-4 flex items-center justify-between group cursor-pointer active:bg-zinc-900 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500">
              <Heart size={18} />
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300">Saved Gyms</span>
          </div>
          <ChevronRight size={16} className="text-zinc-800" />
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 rounded-[24px] p-4 flex items-center justify-between group cursor-pointer active:bg-zinc-900 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500">
              <History size={18} />
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300">Booking History</span>
          </div>
          <ChevronRight size={16} className="text-zinc-800" />
        </div>

        <button 
          onClick={handleLogout}
          className="w-full mt-8 flex items-center justify-center gap-2 py-4 rounded-[24px] text-red-500 text-[11px] font-black uppercase tracking-[0.2em] bg-red-500/5 border border-red-500/10 active:scale-[0.98] transition-transform"
        >
          <LogOut size={16} />
          Terminate Session
        </button>
      </section>
    </div>
  );
};

import React from 'react';
import { 
  Plus, Users, TrendingUp, BarChart3, 
  Settings, Image, List, FileEdit 
} from 'lucide-react';

export const OwnerPanel: React.FC = () => {
  return (
    <div className="pb-32 px-6 pt-8">
      <header className="mb-8">
        <h1 className="text-3xl font-display font-bold">Gym Manager</h1>
        <p className="text-white/40 text-sm">Manage your listings and view analytics.</p>
      </header>

      {/* Analytics */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-card-bg border border-white/5 p-5 rounded-3xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
              <Users size={18} />
            </div>
          </div>
          <span className="text-2xl font-black">128</span>
          <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mt-1">Total Members</p>
        </div>
        <div className="bg-card-bg border border-white/5 p-5 rounded-3xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-neon-green/10 rounded-xl text-neon-green">
              <TrendingUp size={18} />
            </div>
          </div>
          <span className="text-2xl font-black">₹48.5K</span>
          <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mt-1">Rev. (Monthly)</p>
        </div>
      </div>

      {/* Management Actions */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 px-2">Gym Actions</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white/5 border border-white/10 p-5 rounded-3xl flex flex-col items-center gap-3 active:bg-white/10 transition-all">
            <Plus size={24} className="text-neon-green" />
            <span className="text-xs font-bold uppercase tracking-wider">Add Gym</span>
          </button>
          <button className="bg-white/5 border border-white/10 p-5 rounded-3xl flex flex-col items-center gap-3 active:bg-white/10 transition-all">
            <Image size={24} className="text-neon-green" />
            <span className="text-xs font-bold uppercase tracking-wider">Upload Images</span>
          </button>
          <button className="bg-white/5 border border-white/10 p-5 rounded-3xl flex flex-col items-center gap-3 active:bg-white/10 transition-all">
            <List size={24} className="text-neon-green" />
            <span className="text-xs font-bold uppercase tracking-wider">Edit Plans</span>
          </button>
          <button className="bg-white/5 border border-white/10 p-5 rounded-3xl flex flex-col items-center gap-3 active:bg-white/10 transition-all">
            <FileEdit size={24} className="text-neon-green" />
            <span className="text-xs font-bold uppercase tracking-wider">Gym Stats</span>
          </button>
        </div>
      </section>

      {/* Recent Leads */}
      <section className="mt-8">
        <h3 className="text-lg font-bold mb-4">Recent Trial Bookings</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card-bg border border-white/5 p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5" />
                <div>
                  <h4 className="text-sm font-bold">User {i}</h4>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Trial • 2 mins ago</p>
                </div>
              </div>
              <button className="bg-neon-green text-black px-3 py-1.5 rounded-lg text-[10px] font-black uppercase">View</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

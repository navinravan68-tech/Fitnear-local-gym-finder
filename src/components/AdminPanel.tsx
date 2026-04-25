import React from 'react';
import { ShieldCheck, LayoutDashboard, Building, Users, AlertCircle, TrendingUp } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  return (
    <div className="pb-32 px-6 pt-8">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-black tracking-tighter">ADMIN CORE</h1>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">System Overlord Controls</p>
        </div>
        <div className="p-3 bg-red-500/10 text-red-500 rounded-2xl">
          <ShieldCheck size={24} />
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-card-bg border border-white/5 p-4 rounded-2xl">
          <Building size={16} className="text-neon-green mb-2" />
          <span className="text-xl font-bold">42</span>
          <p className="text-[8px] uppercase font-bold text-white/20 mt-1">Total Gyms</p>
        </div>
        <div className="bg-card-bg border border-white/5 p-4 rounded-2xl">
          <Users size={16} className="text-neon-green mb-2" />
          <span className="text-xl font-bold">1.2K</span>
          <p className="text-[8px] uppercase font-bold text-white/20 mt-1">Total Users</p>
        </div>
        <div className="bg-card-bg border border-white/5 p-4 rounded-2xl">
          <TrendingUp size={16} className="text-neon-green mb-2" />
          <span className="text-xl font-bold">₹8.4L</span>
          <p className="text-[8px] uppercase font-bold text-white/20 mt-1">Platform GMV</p>
        </div>
        <div className="bg-card-bg border border-white/5 p-4 rounded-2xl">
          <AlertCircle size={16} className="text-orange-500 mb-2" />
          <span className="text-xl font-bold">5</span>
          <p className="text-[8px] uppercase font-bold text-white/20 mt-1">Pending Approvals</p>
        </div>
      </div>

      {/* Approval List */}
      <section>
        <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter">Pending Approvals</h3>
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="bg-card-bg border border-white/5 p-4 rounded-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/5 rounded-2xl" />
                <div>
                  <h4 className="text-sm font-bold">Warrior Academy</h4>
                  <p className="text-[10px] text-white/40 uppercase font-black">Owner: Rajesh K.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-white/5 text-white p-2 rounded-xl border border-white/10"><AlertCircle size={14} /></button>
                <button className="bg-neon-green text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase">Approve</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Reports */}
      <section className="mt-8">
        <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter">System Reports</h3>
        <div className="bg-card-bg border border-white/5 rounded-3xl divide-y divide-white/5">
          <div className="p-4 flex justify-between items-center">
            <span className="text-xs font-bold text-white/60">Revenue Dashboard</span>
            <LayoutDashboard size={14} className="text-neon-green" />
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="text-xs font-bold text-white/60">User Growth Analytics</span>
            <TrendingUp size={14} className="text-neon-green" />
          </div>
          <div className="p-4 flex justify-between items-center text-red-400">
            <span className="text-xs font-bold">Flagged Content</span>
            <AlertCircle size={14} />
          </div>
        </div>
      </section>
    </div>
  );
};

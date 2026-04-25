import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, BarChart2, User, LayoutGrid } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

export const Navbar: React.FC = () => {
  const { profile } = useAuth();

  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-md rounded-2xl p-4 flex justify-around items-center border border-zinc-800 z-40">
      <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-colors ${isActive ? 'text-neon-accent' : 'text-zinc-600'}`}>
        <Home size={20} />
        <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Home</span>
      </NavLink>
      <NavLink to="/compare" className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-colors ${isActive ? 'text-neon-accent' : 'text-zinc-600'}`}>
        <BarChart2 size={20} />
        <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Compare</span>
      </NavLink>
      <div className="relative group">
        <div className="bg-neon-accent p-3.5 rounded-2xl -mt-12 shadow-xl shadow-neon-accent/20 group-active:scale-90 transition-transform">
          <LayoutGrid size={24} className="text-black" />
        </div>
      </div>
      <NavLink to="/search" className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-colors ${isActive ? 'text-neon-accent' : 'text-zinc-600'}`}>
        <Search size={20} />
        <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Explore</span>
      </NavLink>
      <NavLink 
        to={profile?.userType === 'owner' ? '/owner' : profile?.userType === 'admin' ? '/admin' : '/dashboard'} 
        className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-colors ${isActive ? 'text-neon-accent' : 'text-zinc-600'}`}
      >
        <User size={20} />
        <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Profile</span>
      </NavLink>
    </nav>
  );
};

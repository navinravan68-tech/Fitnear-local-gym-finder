import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LogIn, User, Building2, Smartphone } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from '../lib/AuthContext';

export const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<'customer' | 'owner'>('customer');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const { refreshProfile } = useAuth();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Check if profile exists, if not create one
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          userType: userType,
          createdAt: new Date().toISOString()
        });
        await refreshProfile();
      }
    } catch (error) {
      console.error('Google sign in error:', error);
    }
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setShowOtp(true);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col px-6 py-12">
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-display font-bold leading-tight">
            Welcome to <span className="text-neon-accent">FitNear</span>
          </h1>
          <p className="text-zinc-500 mt-2 text-sm font-medium">Sign in to find gyms near you.</p>
        </motion.div>

        {/* User Type Toggle */}
        <div className="flex bg-zinc-900 border border-zinc-800 p-1 rounded-2xl mb-8">
          <button
            onClick={() => setUserType('customer')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${
              userType === 'customer' ? 'bg-neon-accent text-black font-bold shadow-lg shadow-neon-accent/20' : 'text-zinc-500 font-medium'
            }`}
          >
            <User size={18} />
            Customer
          </button>
          <button
            onClick={() => setUserType('owner')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${
              userType === 'owner' ? 'bg-neon-accent text-black font-bold shadow-lg shadow-neon-accent/20' : 'text-zinc-500 font-medium'
            }`}
          >
            <Building2 size={18} />
            Gym Owner
          </button>
        </div>

        <form onSubmit={handlePhoneSubmit} className="space-y-4">
          {!showOtp ? (
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 flex items-center gap-1 border-r border-zinc-800 pr-2">
                  <span className="text-sm font-medium tracking-tighter">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-16 pr-4 py-4 text-zinc-100 focus:outline-none focus:ring-1 focus:ring-neon-accent/50"
                  maxLength={10}
                />
              </div>
              <button 
                type="submit"
                disabled={phoneNumber.length !== 10}
                className="btn-primary w-full disabled:opacity-50"
              >
                Get OTP
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-4 text-center text-2xl tracking-[1em] text-zinc-100 focus:outline-none focus:ring-1 focus:ring-neon-accent/50"
                maxLength={6}
              />
              <button 
                type="button"
                onClick={() => {}} // Mock verify
                className="btn-primary w-full"
              >
                Verify & Login
              </button>
              <button 
                type="button"
                onClick={() => setShowOtp(false)}
                className="text-center w-full text-neon-accent text-sm font-bold uppercase tracking-widest"
              >
                Change Number
              </button>
            </div>
          )}
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">Or Continue With</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 bg-zinc-800 border border-zinc-700 text-zinc-100 font-bold py-4 rounded-2xl transition-all active:scale-95"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Google
        </button>
      </div>

      <p className="text-zinc-600 text-[10px] text-center mt-8 font-medium tracking-tight">
        By continuing, you agree to our <span className="text-zinc-400 underline decoration-zinc-700">Terms of Service</span> and <span className="text-zinc-400 underline decoration-zinc-700">Privacy Policy</span>.
      </p>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, CheckCircle2, IndianRupee } from 'lucide-react';
import { CHENNAI_GYMS } from '../lib/mockData';

export const CheckoutPage: React.FC = () => {
  const { gymId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<'checkout' | 'success'>('checkout');
  const gym = CHENNAI_GYMS.find(g => g.id === gymId);

  const handlePayment = () => {
    // Mock Razorpay integration
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  if (!gym) return null;

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      {step === 'checkout' ? (
        <>
          <header className="px-6 pt-8 pb-6 border-b border-white/5 bg-card-bg flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="text-white/60"><ArrowLeft size={24} /></button>
            <h1 className="text-xl font-bold uppercase tracking-tight">Checkout</h1>
          </header>

          <main className="flex-1 p-6 space-y-8">
            <div className="bg-card-bg rounded-3xl p-6 border border-white/5">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <img src={gym.images[0]} className="w-16 h-16 rounded-2xl object-cover" alt="" />
                <div>
                  <h2 className="font-bold">{gym.name}</h2>
                  <p className="text-xs text-white/40">{gym.address}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Monthly Plan</span>
                  <span className="font-bold">₹{gym.startingPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Registration Fee</span>
                  <span className="font-bold">₹500</span>
                </div>
                <div className="flex justify-between items-center text-neon-green">
                  <span className="text-sm font-bold uppercase tracking-widest">Promotion Code</span>
                  <span className="font-bold">-₹199</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-lg font-bold">Total Amount</span>
                  <span className="text-2xl font-black text-neon-green">₹{gym.startingPrice + 500 - 199}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 px-2">Payment Method</h3>
              <div className="bg-card-bg rounded-3xl p-5 border border-neon-green/30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neon-green/10 flex items-center justify-center text-neon-green">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">UPI / Cards / Net Banking</h4>
                    <p className="text-[10px] text-white/40 uppercase font-bold">Via Razorpay Secure</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-neon-green bg-neon-green/20" />
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
              <Shield size={20} className="text-blue-400 shrink-0" />
              <p className="text-[10px] text-blue-100/60 leading-tight">
                Your payment is secure. We use 256-bit encryption for all transactions.
              </p>
            </div>
          </main>

          <footer className="p-6 pb-12 bg-dark-bg">
            <button 
              onClick={handlePayment}
              className="btn-primary w-full py-5 text-lg"
            >
              PAY NOW <ArrowLeft size={20} className="rotate-180" />
            </button>
          </footer>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-32 h-32 bg-neon-green rounded-full flex items-center justify-center mb-10 shadow-[0_0_80px_rgba(57,255,20,0.4)]"
          >
            <CheckCircle2 size={64} className="text-black" />
          </motion.div>
          <h1 className="text-4xl font-display font-black tracking-tight mb-4">PURCHASE SUCCESS!</h1>
          <p className="text-white/60 text-sm max-w-[280px]">
            Your membership at <span className="text-white font-bold">{gym.name}</span> is now active. You can find your booking in your dashboard.
          </p>
          
          <button 
            onClick={() => navigate('/dashboard')}
            className="btn-secondary w-full max-w-[280px] mt-12"
          >
            VIEW DASHBOARD
          </button>
        </div>
      )}
    </div>
  );
};

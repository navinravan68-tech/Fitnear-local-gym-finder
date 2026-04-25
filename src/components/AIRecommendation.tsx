import React from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { CHENNAI_GYMS } from '../lib/mockData';
import { motion } from 'motion/react';
import { Sparkles, Brain, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AIRecommendation: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [recommendation, setRecommendation] = React.useState<any>(null);
  const navigate = useNavigate();

  const getRecommendation = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const prompt = `Based on the following Indian gyms in Chennai: ${JSON.stringify(CHENNAI_GYMS)}, recommend the best gym for a college student on a budget who wants cardio and weights. Return a JSON object with 'gymId', 'reason', and 'score'.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              gymId: { type: Type.STRING },
              reason: { type: Type.STRING },
              score: { type: Type.NUMBER }
            },
            required: ["gymId", "reason", "score"]
          }
        }
      });

      if (response.text) {
        setRecommendation(JSON.parse(response.text));
      }
    } catch (error) {
      console.error('AI Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const gym = CHENNAI_GYMS.find(g => g.id === recommendation?.gymId);

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[32px] p-6 relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-neon-accent/10 border border-neon-accent/20 rounded-xl text-neon-accent shadow-inner">
              <Sparkles size={20} />
            </div>
            <div>
               <h3 className="text-xl font-display font-black italic tracking-tight leading-none">FITNEAR AI</h3>
               <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em] mt-1.5 leading-none">Smart Assistant</p>
            </div>
          </div>
          
          {!recommendation ? (
            <>
              <p className="text-zinc-400 text-xs mb-8 leading-relaxed font-medium">Let our neural engine filter through thousands of data points to find your absolute best fitness match.</p>
              <button 
                onClick={getRecommendation}
                disabled={loading}
                className="w-full bg-neon-accent text-black font-black uppercase tracking-[0.1em] py-4 rounded-[20px] text-xs shadow-lg shadow-neon-accent/20 active:scale-95 transition-all disabled:opacity-50"
              >
                {loading ? 'Analyzing Parameters...' : 'Deploy Smart Search'}
              </button>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-1 px-3 bg-neon-accent/10 text-neon-accent border border-neon-accent/30 rounded-full text-[9px] font-black uppercase tracking-widest">
                  {recommendation.score * 10}% BIOMETRIC MATCH
                </div>
              </div>
              <h4 className="text-2xl font-black mb-3 text-zinc-100 italic tracking-tight">{gym?.name.toUpperCase()}</h4>
              <p className="text-zinc-400 text-xs mb-8 leading-relaxed italic font-medium">"{recommendation.reason}"</p>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => navigate(`/gym/${gym?.id}`)}
                  className="flex-1 bg-zinc-100 text-black font-black uppercase tracking-widest py-4 rounded-[20px] text-[10px] flex items-center justify-center gap-2 shadow-xl"
                >
                  Enter Gym <ArrowRight size={14} />
                </button>
                <button 
                  onClick={() => setRecommendation(null)}
                  className="px-5 py-4 bg-zinc-800 border border-zinc-700 rounded-[20px] text-zinc-400 hover:text-neon-accent transition-colors"
                >
                  <Brain size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-accent/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-zinc-700/10 blur-[80px] rounded-full" />
      </div>
    </div>
  );
};

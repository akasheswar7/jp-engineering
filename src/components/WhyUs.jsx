import React from 'react';
import { HeartHandshake, Target, Award, Zap, Shield, Sparkles, Star } from 'lucide-react';
import { whyUsReasons } from '../data/projectsData';

export default function WhyUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-cyan-400" />;
      case 'Target': return <Target className="w-6 h-6 text-cyan-400" />;
      case 'Award': return <Award className="w-6 h-6 text-cyan-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-cyan-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#060D1D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Star className="w-3.5 h-3.5 fill-cyan-400" />
            CORE CREDIBILITY PILLARS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            WHY CUSTOMERS CHOOSE <br />
            <span className="text-cyan-400 cyan-text-glow">JP ENGINEERING</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono max-w-xl mx-auto">
            Built on transparent communication, verified product quality, and responsive technical support across Visakhapatnam.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsReasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-white/10 hover:border-cyan-400/50 p-6 rounded-2xl transition-all duration-300 group tech-border space-y-4"
            >
              <div className="flex justify-between items-center">
                <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/20 group-hover:border-cyan-400 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  PILLAR 0{idx + 1}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

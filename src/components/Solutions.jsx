import React, { useState } from 'react';
import { Wind, Cpu, Compass, ShieldCheck, ArrowRight, Check, Sparkles } from 'lucide-react';
import { hvacSolutions } from '../data/solutionsData';

export default function Solutions({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState(hvacSolutions[0].id);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Wind': return <Wind className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      default: return <Wind className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="solutions" className="py-24 bg-[#060D1D] relative overflow-hidden">
      {/* Background Blueprint Lines */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              CAPABILITIES & OFFERINGS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              HVAC SOLUTIONS, <br />
              <span className="text-cyan-400 cyan-text-glow">BUILT WITH PRECISION.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono">
            Every solution is structured around efficiency, spatial thermal dynamics, quiet operation, and lasting equipment reliability.
          </p>
        </div>

        {/* Interactive Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hvacSolutions.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative rounded-xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between group tech-border ${
                  isActive
                    ? 'bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-500/10'
                    : 'bg-slate-950/80 border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/60'
                }`}
              >
                {/* Code Tag */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-cyan-400 tracking-wider">
                      {item.code}
                    </span>
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/20 group-hover:border-cyan-400 transition-colors">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-400 font-semibold">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Spec Bullet List */}
                  <ul className="space-y-2 pt-2 border-t border-white/10">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action & Specs */}
                <div className="pt-6 mt-6 border-t border-white/5 space-y-3">
                  <div className="bg-slate-950 p-2 rounded text-[10px] font-mono text-slate-400 border border-white/5">
                    {item.specs}
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenConsultation(item.title);
                    }}
                    className="w-full py-2 bg-cyan-500/10 hover:bg-cyan-400 hover:text-slate-950 text-cyan-300 text-xs font-mono font-bold rounded transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>INQUIRE ABOUT THIS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

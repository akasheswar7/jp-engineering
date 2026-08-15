import React, { useState } from 'react';
import { Building2, Layers, ChevronRight, Sparkles } from 'lucide-react';
import { applicationCategories } from '../data/projectsData';

export default function Industries({ onOpenConsultation }) {
  const [selectedCat, setSelectedCat] = useState(applicationCategories[0]);

  return (
    <section id="industries" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="space-y-4 max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Building2 className="w-3.5 h-3.5" />
            APPLICATION CATEGORIES
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            CLIMATE SOLUTIONS <br />
            <span className="text-cyan-400 cyan-text-glow">FOR MODERN SPACES.</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-mono">
            Air-conditioning systems tailored for specific spatial requirements, thermal profiles, and acoustic demands.
          </p>
        </div>

        {/* Grid of Architectural Category Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCat(cat)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 bg-slate-900 shadow-xl cursor-pointer"
            >
              {/* Background Architectural Photo */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent"></div>
                
                {/* Metric Badge */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                  APPLICATION
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-6 space-y-3 relative z-10 -mt-8">
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 font-semibold">
                  {cat.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cat.description}
                </p>

                {/* Footer specs */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">
                    {cat.metrics}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenConsultation(`Application: ${cat.title}`);
                    }}
                    className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Layers, ChevronRight, Eye, Sparkles, SlidersHorizontal, Check } from 'lucide-react';
import { applicationCategories } from '../data/projectsData';

export default function Projects({ onOpenConsultation }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="showcase" className="py-24 bg-[#060D1D] relative overflow-hidden border-t border-white/5">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            APPLICATION & EQUIPMENT SHOWCASE
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ENGINEERING THAT BELONGS <br />
            <span className="text-cyan-400 cyan-text-glow">IN THE REAL WORLD.</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-mono">
            Spatial application categories designed to accommodate high heat loads, acoustic standards, and energy guidelines.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applicationCategories.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950 border border-white/10 hover:border-cyan-400/50 rounded-2xl overflow-hidden transition-all duration-500 group tech-border flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Image Container with Reveal Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-slate-950/90 border border-cyan-500/30 px-3 py-1 rounded font-mono text-[10px] text-cyan-300">
                    APPLICATION MODEL
                  </div>

                  <button
                    onClick={() => setSelectedItem(item)}
                    className="absolute bottom-4 right-4 p-2 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW SPEC</span>
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-400 font-semibold">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Specs Footer */}
              <div className="p-6 pt-0 space-y-4">
                <div className="bg-slate-900 p-2.5 rounded text-[11px] font-mono text-slate-400 border border-white/5">
                  {item.metrics}
                </div>

                <button
                  onClick={() => onOpenConsultation(`Project/Application: ${item.title}`)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-cyan-400 hover:text-slate-950 text-slate-200 text-xs font-mono font-bold rounded transition-all border border-white/10 flex items-center justify-center gap-2"
                >
                  <span>INQUIRE FOR THIS SPACE TYPE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View for Detailed Specs */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl max-w-xl w-full p-6 space-y-6 tech-border shadow-2xl animate-fadeIn">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-[10px] text-cyan-400">SPECIFICATION DETAIL</span>
                  <h3 className="font-display text-2xl font-bold text-white">{selectedItem.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-48 object-cover rounded-xl border border-white/10"
              />

              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="bg-slate-950 p-4 rounded-xl space-y-2 border border-white/10 font-mono text-xs">
                <span className="text-cyan-400 font-bold block">TECHNICAL BENCHMARKS:</span>
                <p className="text-slate-300">• {selectedItem.metrics}</p>
                <p className="text-slate-300">• Thermal load balanced according to Visakhapatnam summer peak heat index.</p>
                <p className="text-slate-300">• Multi-fan acoustic dampening for quiet operational environment.</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onOpenConsultation(`Spec Inquiry: ${title}`);
                  }}
                  className="flex-1 py-3 bg-cyan-400 text-slate-950 text-xs font-mono font-bold rounded uppercase tracking-wider hover:bg-cyan-300"
                >
                  REQUEST CONSULTATION FOR THIS CATEGORY
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

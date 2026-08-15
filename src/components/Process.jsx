import React from 'react';
import { Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/projectsData';

export default function Process({ onOpenConsultation }) {
  return (
    <section id="approach" className="py-24 bg-[#060D1D] relative overflow-hidden border-y border-white/5">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            ENGINEERING WORKFLOW
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            FROM REQUIREMENT TO <br />
            <span className="text-cyan-400 cyan-text-glow">RIGHT SOLUTION.</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono max-w-xl mx-auto">
            A methodical four-step engineering process designed for accuracy, clarity, and dependable climate performance.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/10 via-cyan-400/40 to-cyan-500/10 -translate-y-12 z-0"></div>

          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative z-10 bg-slate-900/90 border border-white/10 hover:border-cyan-400/50 p-6 rounded-2xl transition-all duration-300 group tech-border space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-display text-4xl font-extrabold text-cyan-400/30 group-hover:text-cyan-400 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono bg-cyan-950 px-2 py-0.5 rounded text-cyan-300 border border-cyan-500/30">
                    STAGE {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-wide">
                  {step.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400 font-semibold">
                  {step.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Step Execution</span>
              </div>
            </div>
          ))}

        </div>

        {/* Timeline Footer CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenConsultation("Engineering Process Query")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400/10 hover:bg-cyan-400 hover:text-slate-950 text-cyan-300 text-xs font-mono font-bold rounded-lg border border-cyan-500/30 transition-all uppercase tracking-wider"
          >
            <span>START STAGE 01 — REQUIREMENT ANALYSIS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

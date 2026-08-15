import React from 'react';
import { Phone, ChevronRight, Wind, ShieldCheck, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function CTA({ onOpenConsultation }) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#030712] via-[#060D1D] to-[#030712] relative overflow-hidden border-y border-cyan-500/20">
      
      {/* Background Airflow Animation Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          READY TO ELEVATE YOUR CLIMATE EXPERIENCE?
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          LET'S ENGINEER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 cyan-text-glow">
            YOUR COMFORT.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us what you need. We'll help you find the right air-conditioning solution.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenConsultation("Direct CTA Consultation")}
            className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-slate-950 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:bg-cyan-300 transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            <span>REQUEST A QUOTE</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-slate-100 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>CALL JP ENGINEERING ({companyInfo.phone})</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-white/10 max-w-2xl mx-auto flex justify-center items-center gap-8 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            VISAKHAPATNAM BASED
          </span>
          <span className="flex items-center gap-1.5">
            <Wind className="w-4 h-4 text-cyan-400" />
            PROACTIVE SERVICE
          </span>
        </div>

      </div>
    </section>
  );
}

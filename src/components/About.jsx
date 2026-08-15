import React from 'react';
import { ArrowRight, CheckCircle2, Sliders, Shield, Zap, Sparkles, Building2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function About({ onOpenConsultation }) {
  const highlights = [
    { title: "Technical Approach", desc: "Selecting system tonnage and airflow dynamics based on architectural heat load." },
    { title: "Deep Product Knowledge", desc: "Extensive familiarity with premium commercial & residential air-conditioning platforms." },
    { title: "Customer Understanding", desc: "Listening carefully to occupant requirements, space usage, and long-term operating targets." },
    { title: "Solution-Oriented Thinking", desc: "Recommending optimized AC configurations engineered for comfort and energy conservation." },
    { title: "Responsive After-Support", desc: "Swift, clear, and proactive communication for long-term customer peace of mind." },
    { title: "Long-Term Reliability", desc: "Delivering durable, genuine HVAC equipment backed by standard manufacturer warranties." }
  ];

  return (
    <section id="about" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Blueprint & Architectural Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 glass-panel shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                alt="HVAC Engineering & Commercial Air Conditioning"
                className="w-full h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>

              {/* Overlay Metadata Tag */}
              <div className="absolute top-6 left-6 bg-slate-950/90 border border-cyan-500/30 backdrop-blur-md px-4 py-2 rounded-lg font-mono text-xs text-cyan-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                VISAKHAPATNAM HVAC SUPPLY
              </div>

              {/* Bottom Quote Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md">
                <p className="text-xs font-mono text-slate-300 italic">
                  "Proactive and solution centric approach, knowledgeable both owner and his support team."
                </p>
                <p className="text-[10px] text-cyan-400 font-mono mt-1 font-semibold">
                  — Verified Client Feedback on Google Reviews (5.0 ★)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              ABOUT JP ENGINEERING
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              ENGINEERED AROUND <br />
              <span className="text-cyan-400 cyan-text-glow">YOUR COMFORT.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              <strong className="text-white font-semibold">JP ENGINEERING</strong> is a premier air-conditioning system supplier based in Visakhapatnam, Andhra Pradesh. We specialize in matching high-performance HVAC equipment with customer spaces to ensure optimum thermal regulation, sound attenuation, and long-term durability.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              We do not treat climate control as a mere commodity. Our approach combines technical assessment, accurate capacity sizing, and responsive post-supply assistance to give commercial and residential clients dependable comfort.
            </p>

            {/* Grid of Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-900/60 border border-white/5 space-y-1 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold font-mono">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[12px] text-slate-400 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Explore CTA */}
            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm font-bold tracking-wider uppercase transition-colors"
              >
                <span>EXPLORE OUR CONSULTATION PROCESS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Star, ShieldCheck, HeartHandshake, Cpu } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function TrustBar() {
  return (
    <section className="relative z-20 border-y border-cyan-500/15 bg-[#060D1D] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          
          {/* Trust Metric 1 */}
          <div className="flex flex-col items-start pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-sans text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              4.9 / 5.0
            </span>
            <span className="font-sans text-xs text-cyan-400 font-bold uppercase tracking-wider">
              GOOGLE RATED
            </span>
            <p className="text-[11px] text-slate-400">Verified Client Feedback</p>
          </div>

          {/* Trust Metric 2 */}
          <div className="flex flex-col items-start pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-[#0096E6]/20 text-[#38BDF8] text-[10px] font-bold">DAIKIN</span>
              <span className="px-2 py-0.5 rounded bg-[#A50034]/20 text-[#F43F5E] text-[10px] font-bold">LG</span>
              <span className="px-2 py-0.5 rounded bg-[#E60012]/20 text-[#FB7185] text-[10px] font-bold">HITACHI</span>
            </div>
            <span className="font-sans text-xl lg:text-2xl font-extrabold text-white tracking-tight">
              MULTI-BRAND
            </span>
            <span className="font-sans text-xs text-cyan-400 font-bold uppercase tracking-wider">
              AUTHORIZED DEALER
            </span>
            <p className="text-[11px] text-slate-400">Genuine Cooling Systems</p>
          </div>

          {/* Trust Metric 3 */}
          <div className="flex flex-col items-start pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 mb-1">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <span className="font-sans text-xl lg:text-2xl font-extrabold text-white tracking-tight">
              CUSTOMER FIRST
            </span>
            <span className="font-sans text-xs text-cyan-400 font-bold uppercase tracking-wider">
              SERVICE PHILOSOPHY
            </span>
            <p className="text-[11px] text-slate-400">Proactive & Solution-Centric</p>
          </div>

          {/* Trust Metric 4 */}
          <div className="flex flex-col items-start pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 mb-1">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="font-sans text-xl lg:text-2xl font-extrabold text-white tracking-tight">
              PRECISION LOAD
            </span>
            <span className="font-sans text-xs text-cyan-400 font-bold uppercase tracking-wider">
              HVAC ENGINEERING
            </span>
            <p className="text-[11px] text-slate-400">Site-Specific Spatial Assessment</p>
          </div>

        </div>
      </div>
    </section>
  );
}

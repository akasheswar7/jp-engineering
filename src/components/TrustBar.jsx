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
            <span className="font-display text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              4.9 / 5
            </span>
            <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
              GOOGLE RATING
            </span>
            <p className="text-[11px] text-slate-400">Verified Customer Satisfaction</p>
          </div>

          {/* Trust Metric 2 */}
          <div className="flex flex-col items-start pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="p-1 rounded bg-cyan-500/10 text-cyan-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="font-display text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              8+ REVIEWS
            </span>
            <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
              CUSTOMER REVIEWS
            </span>
            <p className="text-[11px] text-slate-400">Authentic Client Feedback</p>
          </div>

          {/* Trust Metric 3 */}
          <div className="flex flex-col items-start pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="p-1 rounded bg-cyan-500/10 text-cyan-400 mb-1">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <span className="font-display text-xl lg:text-2xl font-extrabold text-white tracking-tight">
              CUSTOMER-FIRST
            </span>
            <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
              SERVICE PHILOSOPHY
            </span>
            <p className="text-[11px] text-slate-400">Proactive & Solution-Centric</p>
          </div>

          {/* Trust Metric 4 */}
          <div className="flex flex-col items-start pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="p-1 rounded bg-cyan-500/10 text-cyan-400 mb-1">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="font-display text-xl lg:text-2xl font-extrabold text-white tracking-tight">
              ENGINEERING-FOCUSED
            </span>
            <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-semibold">
              APPROACH
            </span>
            <p className="text-[11px] text-slate-400">Technical Load & Spatial Accuracy</p>
          </div>

        </div>
      </div>
    </section>
  );
}

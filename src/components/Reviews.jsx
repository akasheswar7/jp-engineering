import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { googleReviews } from '../data/reviewsData';
import { companyInfo } from '../data/companyData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              VERIFIED GOOGLE REVIEWS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              AUTHENTIC CUSTOMER <br />
              <span className="text-cyan-400 cyan-text-glow">FEEDBACK & RATING.</span>
            </h2>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-slate-900 border border-cyan-500/30 p-4 rounded-xl flex items-center gap-4 tech-border shadow-xl">
            <div className="text-center space-y-1">
              <div className="font-display text-3xl font-extrabold text-white">4.9</div>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="space-y-1 text-xs font-mono">
              <span className="text-cyan-400 font-bold block uppercase">GOOGLE RATING</span>
              <span className="text-slate-400 block">Based on 8 Verified Reviews</span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3 h-3" /> 100% Verified Profile
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {googleReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 p-6 rounded-2xl transition-all duration-300 space-y-4 flex flex-col justify-between group tech-border"
            >
              <div className="space-y-3">
                {/* Header Rating */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                    VERIFIED REVIEW
                  </span>
                </div>

                {/* Highlight Tag */}
                <p className="text-xs font-mono font-bold text-cyan-400">
                  "{rev.highlight}"
                </p>

                {/* Main Review Quote */}
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-white font-bold block">{rev.reviewer}</span>
                  <span className="text-slate-500 text-[10px]">Visakhapatnam, AP</span>
                </div>
                <span className="text-[10px] text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* External Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href={companyInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-mono font-bold rounded-lg transition-all uppercase tracking-wider shadow-lg"
          >
            <span>VIEW ALL REVIEWS ON GOOGLE</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

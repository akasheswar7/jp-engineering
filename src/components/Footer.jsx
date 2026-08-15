import React from 'react';
import { Wind, MapPin, Phone, ShieldCheck, ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050D] text-slate-400 border-t border-white/10 relative overflow-hidden font-mono text-xs">
      
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-400 flex items-center justify-center">
                <Wind className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-display text-xl font-extrabold text-white tracking-wider">
                JP <span className="text-cyan-400">ENGINEERING</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-sans">
              Precision HVAC & Air Conditioning System Supplier serving Visakhapatnam and Andhra Pradesh with engineered climate solutions, customer-first service, and long-term product reliability.
            </p>

            <div className="flex items-center gap-4 text-[11px] text-cyan-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                VISAKHAPATNAM CAMPUS
              </span>
              <span>•</span>
              <span className="text-slate-400">★ 4.9 GOOGLE RATED</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <span className="text-white font-bold tracking-wider uppercase block text-xs">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-slate-400 font-sans">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About JP Engineering</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">HVAC Solutions</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Application Categories</a></li>
              <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">AC Load Estimator</a></li>
            </ul>
          </div>

          {/* Offerings Nav */}
          <div className="space-y-3">
            <span className="text-white font-bold tracking-wider uppercase block text-xs">
              PORTFOLIO
            </span>
            <ul className="space-y-2 text-slate-400 font-sans">
              <li><a href="#approach" className="hover:text-cyan-400 transition-colors">Engineering Approach</a></li>
              <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Customers Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition-colors">Verified Reviews</a></li>
              <li><a href="#showcase" className="hover:text-cyan-400 transition-colors">Application Showcase</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Headquarters</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <span className="text-white font-bold tracking-wider uppercase block text-xs">
              HEADQUARTERS
            </span>
            <div className="space-y-2 text-slate-400 font-sans text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{companyInfo.shortAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${companyInfo.phoneRaw}`} className="text-cyan-400 hover:underline">
                  {companyInfo.phone}
                </a>
              </p>
            </div>
            
            <button
              onClick={() => onOpenConsultation("Footer Quick Quote")}
              className="mt-2 w-full py-2 bg-cyan-400/10 hover:bg-cyan-400 hover:text-slate-950 text-cyan-300 font-mono text-[11px] font-bold rounded border border-cyan-500/30 transition-all"
            >
              REQUEST QUOTE
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Technical Specs */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 JP ENGINEERING. All Rights Reserved. Precision HVAC Supplier Visakhapatnam.
          </div>

          <div className="flex items-center gap-6">
            <span>COORDINATES: {companyInfo.coordinates}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}

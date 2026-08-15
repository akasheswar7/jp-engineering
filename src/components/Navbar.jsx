import React, { useState, useEffect } from 'react';
import { Wind, Menu, X, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Approach', href: '#approach' },
    { name: 'AC Calculator', href: '#calculator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Engineering Micro-Bar */}
      <div className="bg-[#02050D] border-b border-white/5 py-2 px-4 text-xs font-sans text-slate-300 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Visakhapatnam, Andhra Pradesh
            </span>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-[11px]">Dealer In:</span>
              <span className="bg-[#0096E6]/20 border border-[#0096E6]/40 text-[#38BDF8] text-[10px] px-1.5 py-0.5 rounded font-bold">DAIKIN</span>
              <span className="bg-[#A50034]/20 border border-[#A50034]/40 text-[#F43F5E] text-[10px] px-1.5 py-0.5 rounded font-bold">LG</span>
              <span className="bg-[#E60012]/20 border border-[#E60012]/40 text-[#FB7185] text-[10px] px-1.5 py-0.5 rounded font-bold">HITACHI</span>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <a 
              href={`tel:${companyInfo.phoneRaw}`} 
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-slate-200 font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              {companyInfo.phone}
            </a>
            <span className="bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-[11px] px-2.5 py-0.5 rounded font-bold tracking-wide">
              ★ 4.9 GOOGLE RATED
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#060D1D]/90 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-2xl shadow-cyan-950/20' 
            : 'bg-[#030712]/60 backdrop-blur-md border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-500/10">
              <Wind className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400"></div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-lg sm:text-xl font-extrabold tracking-tight text-white">
                  JP <span className="text-cyan-400">ENGINEERING</span>
                </span>
              </div>
              <p className="text-[10px] font-sans tracking-wide text-slate-400 font-medium -mt-0.5">
                Air Conditioning & HVAC Solutions
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="px-3 py-2 text-xs font-mono font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors border border-white/10 rounded-md hover:border-cyan-500/40"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              CALL
            </a>
            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden px-5 py-2.5 rounded-md bg-cyan-400 text-slate-950 text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:bg-cyan-300 flex items-center gap-2 active:scale-95"
            >
              <span>GET A QUOTE</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center space-x-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 bg-cyan-400 text-slate-950 text-[11px] font-bold rounded uppercase tracking-wider"
            >
              QUOTE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-slate-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#060D1D] border-b border-cyan-500/20 px-4 pt-4 pb-6 space-y-2 animate-fadeIn max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-xs font-medium text-slate-200 hover:text-cyan-400 hover:bg-cyan-950/40 rounded border border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3 h-3 text-cyan-400/50" />
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10 flex flex-col space-y-2">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="w-full py-2.5 text-center text-xs font-bold text-slate-200 bg-slate-800 rounded border border-white/10 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                CALL +91 78937 61976
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-center text-xs font-bold text-slate-950 bg-cyan-400 rounded uppercase tracking-wider"
              >
                REQUEST CONSULTATION
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

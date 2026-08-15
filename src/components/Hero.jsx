import React, { useEffect, useRef } from 'react';
import { ChevronRight, ArrowDownRight, Compass, Shield, Wind, Sparkles, MapPin } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Hero({ onOpenConsultation }) {
  const canvasRef = useRef(null);

  // Animated HTML5 Canvas Airflow Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth || 800);
    let height = (canvas.height = canvas.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth || 800;
      height = canvas.height = canvas.offsetHeight || 600;
    };
    window.addEventListener('resize', handleResize);

    // Particles simulating airflow streams & thermal dynamics
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * (width || 800),
      y: Math.random() * (height || 600),
      length: Math.random() * 80 + 40,
      speed: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      thickness: Math.random() * 1.5 + 0.5,
      blueHue: Math.floor(Math.random() * 40) + 180, // Cyan to electric blue
    }));

    const render = () => {
      try {
        if (!ctx || width <= 0 || height <= 0) return;
        ctx.clearRect(0, 0, width, height);

        // Render subtle blueprint grid line accents
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)';
        ctx.lineWidth = 1;

        // Render flowing air streams
        particles.forEach((p) => {
          p.x += p.speed * 1.2;
          p.y -= Math.sin(p.x * 0.005) * 0.4;

          if (p.x > width + p.length) {
            p.x = -p.length;
            p.y = Math.random() * height;
          }

          if (isFinite(p.x) && isFinite(p.y) && isFinite(p.length) && p.length > 0) {
            const gradient = ctx.createLinearGradient(p.x, p.y, p.x - p.length, p.y);
            gradient.addColorStop(0, `hsla(${p.blueHue}, 100%, 65%, ${p.alpha})`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = p.thickness;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - p.length, p.y);
            ctx.stroke();
          }
        });

        animationFrameId = requestAnimationFrame(render);
      } catch (err) {
        console.warn('Canvas render caught safely:', err);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Background Canvas Effect */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />

      {/* Radial Gradient Glow Highlights */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Top Badge: Brands & Location */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md text-xs font-medium text-slate-200 shadow-lg">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <MapPin className="w-3.5 h-3.5" /> Visakhapatnam, AP
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Air Conditioning & HVAC Supplier</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Precision Air Conditioning <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                & Integrated HVAC Solutions.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              JP Engineering supplies high-performance cooling systems engineered for residential, commercial, and industrial spaces in Visakhapatnam.
            </p>

            {/* Brand Badges Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Authorized Dealer In:</span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-[#0096E6]/15 border border-[#0096E6]/40 text-[#38BDF8] text-xs font-bold tracking-wider">
                  DAIKIN
                </span>
                <span className="px-3 py-1 rounded bg-[#A50034]/15 border border-[#A50034]/40 text-[#F43F5E] text-xs font-bold tracking-wider">
                  LG
                </span>
                <span className="px-3 py-1 rounded bg-[#E60012]/15 border border-[#E60012]/40 text-[#FB7185] text-xs font-bold tracking-wider">
                  HITACHI
                </span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="group px-7 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-sm font-bold tracking-wide rounded-lg shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2.5 active:scale-95"
              >
                <span>REQUEST FREE CONSULTATION</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="px-7 py-3.5 bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <span>AC TONNAGE CALCULATOR</span>
                <ArrowDownRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Quick Proof Metrics */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
              <div>
                <span className="block text-slate-400 text-[11px] mb-0.5">Google Rating</span>
                <span className="text-white font-bold text-base flex items-center gap-1">
                  ★ 4.9 <span className="text-slate-400 text-xs font-normal">(8 Reviews)</span>
                </span>
              </div>
              <div>
                <span className="block text-slate-400 text-[11px] mb-0.5">Key Brands</span>
                <span className="text-white font-bold text-sm sm:text-base">Daikin • LG • Hitachi</span>
              </div>
              <div>
                <span className="block text-slate-400 text-[11px] mb-0.5">Location</span>
                <span className="text-white font-bold text-sm sm:text-base">Visakhapatnam, AP</span>
              </div>
            </div>

          </div>

          {/* Right Visual Column: Corporate HVAC Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-6 sm:p-7 space-y-6 shadow-2xl backdrop-blur-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
                    <Wind className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">JP ENGINEERING</h3>
                    <p className="text-[11px] text-slate-400">Visakhapatnam HVAC Headquarters</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-[10px] font-semibold tracking-wider uppercase">
                  VERIFIED DEALER
                </span>
              </div>

              {/* Showcase Image */}
              <div className="relative h-48 rounded-xl overflow-hidden border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                  alt="Modern HVAC Installation Visakhapatnam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-semibold text-white">Commercial & Residential Systems</span>
                  <span className="text-cyan-400 font-bold">100% Genuine</span>
                </div>
              </div>

              {/* Specification Highlights */}
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Supported System Types</span>
                  <span className="text-white font-semibold">Split, Multi-Split, VRV/VRF</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Cooling Tonnage Range</span>
                  <span className="text-cyan-400 font-bold">1.0 TR — 50+ TR</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Warranty Coverage</span>
                  <span className="text-white font-semibold">Official Manufacturer Warranty</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-2 flex items-center gap-2.5 text-xs text-slate-300 border-t border-white/10">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Tailored thermal calculations & energy-efficient selection.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

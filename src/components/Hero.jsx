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
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-blueprint">
      {/* Dynamic Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />

      {/* Radial Gradient Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Blueprint Fine Overlay Lines */}
      <div className="absolute inset-0 bg-blueprint-fine pointer-events-none opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Location & Brand Eyebrow */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-bold text-white tracking-widest">JP ENGINEERING</span>
              <span className="text-cyan-600">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-cyan-400" />
                VISAKHAPATNAM • ANDHRA PRADESH
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              ENGINEERING THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 cyan-text-glow">
                PERFECT CLIMATE.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              {companyInfo.subTagline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="group relative overflow-hidden px-8 py-4 bg-cyan-400 text-slate-950 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:bg-cyan-300 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                <span>REQUEST A CONSULTATION</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#solutions"
                className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-cyan-500/50 text-slate-200 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ArrowDownRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Quick Metadata Spec Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 font-mono text-xs text-slate-400">
              <div>
                <span className="block text-slate-400 text-[10px] uppercase">RATING</span>
                <span className="text-white font-bold text-sm sm:text-base flex items-center gap-1">
                  ★ 4.9 <span className="text-slate-400 font-normal text-xs">(8 Reviews)</span>
                </span>
              </div>
              <div>
                <span className="block text-slate-400 text-[10px] uppercase">SPECIALIZATION</span>
                <span className="text-white font-bold text-sm sm:text-base">HVAC Systems</span>
              </div>
              <div>
                <span className="block text-slate-400 text-[10px] uppercase">REGION</span>
                <span className="text-white font-bold text-sm sm:text-base">Visakhapatnam, AP</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Engineering HUD Card */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-2xl glass-panel-cyan p-6 sm:p-8 space-y-6 tech-border shadow-2xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Wind className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
                  <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wider">
                    CLIMATE PRECISION HUD
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/30">
                  LIVE STATUS
                </span>
              </div>

              {/* Climate Metric Controls Visual */}
              <div className="space-y-4 font-mono">
                
                {/* Temperature Dynamic Indicator */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>TARGET TEMP CONTROL</span>
                    <span className="text-cyan-400 font-bold">22.5°C OPTIMAL</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[75%] rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Airflow Velocity Gauge */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>AIRFLOW VELOCITY</span>
                    <span className="text-cyan-400 font-bold">450 CFM / ZONE</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[88%] rounded-full"></div>
                  </div>
                </div>

                {/* Efficiency Index */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">ENERGY EFFICIENCY</span>
                  <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30 font-bold">
                    HIGH INVERTER RATIO
                  </span>
                </div>

              </div>

              {/* Card Footer Trust Note */}
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-300 border-t border-white/10">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Selected for spatial load, silence & long-term durability.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

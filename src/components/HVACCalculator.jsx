import React, { useState } from 'react';
import { Calculator, Wind, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HVACCalculator({ onOpenConsultation }) {
  const [length, setLength] = useState(15);
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(10);
  const [spaceType, setSpaceType] = useState('office'); // office, residential, retail, high_density
  const [sunExposure, setSunExposure] = useState('moderate'); // low, moderate, high

  // Cooling tonnage math estimation
  const area = length * width; // sq ft
  const volume = area * height; // cu ft

  // Base BTU/sq ft multiplier
  let baseBTUPerSqFt = 40;
  if (spaceType === 'residential') baseBTUPerSqFt = 35;
  if (spaceType === 'office') baseBTUPerSqFt = 45;
  if (spaceType === 'retail') baseBTUPerSqFt = 55;
  if (spaceType === 'high_density') baseBTUPerSqFt = 65;

  // Sun exposure factor
  let sunFactor = 1.0;
  if (sunExposure === 'low') sunFactor = 0.9;
  if (sunExposure === 'high') sunFactor = 1.2;

  const totalBTU = area * baseBTUPerSqFt * sunFactor;
  const rawTonnage = totalBTU / 12000;
  
  // Round to nearest standard AC tonnage (1.0, 1.5, 2.0, 3.0, 5.0, 8.5, 11.0+)
  const recommendedTonnage = (Math.ceil(rawTonnage * 2) / 2).toFixed(1);

  return (
    <section id="calculator" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Calculator className="w-3.5 h-3.5" />
            INTERACTIVE CLIMATE TOOL
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            HVAC TONNAGE & <br />
            <span className="text-cyan-400 cyan-text-glow">LOAD ESTIMATOR.</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono max-w-xl mx-auto">
            Input your room dimensions and occupancy type to estimate required cooling capacity in TR (Tons of Refrigeration).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form Column */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-cyan-500/20 p-6 sm:p-8 rounded-2xl space-y-6 tech-border shadow-2xl">
            
            {/* Dimension Sliders */}
            <div className="space-y-4">
              
              {/* Length */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">ROOM LENGTH (FT)</span>
                  <span className="text-cyan-400 font-bold">{length} FT</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="100"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Width */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">ROOM WIDTH (FT)</span>
                  <span className="text-cyan-400 font-bold">{width} FT</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="100"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Height */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-slate-300">CEILING HEIGHT (FT)</span>
                  <span className="text-cyan-400 font-bold">{height} FT</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="25"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

            </div>

            {/* Space Type Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-300 block">SPACE APPLICATION TYPE</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'residential', label: 'Residential' },
                  { id: 'office', label: 'Office Space' },
                  { id: 'retail', label: 'Retail Store' },
                  { id: 'high_density', label: 'Server / High Heat' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSpaceType(type.id)}
                    className={`py-2 px-3 rounded text-xs font-mono text-center transition-all ${
                      spaceType === type.id
                        ? 'bg-cyan-400 text-slate-950 font-bold'
                        : 'bg-slate-950 border border-white/10 text-slate-300 hover:border-cyan-500/40'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sun Exposure Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-300 block">SOLAR & HEAT EXPOSURE</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'low', label: 'Low Sun / Shaded' },
                  { id: 'moderate', label: 'Moderate Sun' },
                  { id: 'high', label: 'Top Floor / High Glass' },
                ].map((sun) => (
                  <button
                    key={sun.id}
                    onClick={() => setSunExposure(sun.id)}
                    className={`py-2 px-3 rounded text-xs font-mono text-center transition-all ${
                      sunExposure === sun.id
                        ? 'bg-cyan-400 text-slate-950 font-bold'
                        : 'bg-slate-950 border border-white/10 text-slate-300 hover:border-cyan-500/40'
                    }`}
                  >
                    {sun.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 p-6 sm:p-8 rounded-2xl space-y-6 tech-border shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
                CALCULATED THERMAL CAPACITY
              </span>
              <Wind className="w-5 h-5 text-cyan-400" />
            </div>

            {/* Calculated Values */}
            <div className="space-y-4 font-mono">
              
              <div className="bg-slate-950 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                <span className="text-xs text-slate-400">TOTAL FLOOR AREA</span>
                <span className="text-lg font-bold text-white">{area} SQ. FT.</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                <span className="text-xs text-slate-400">TOTAL SPATIAL VOLUME</span>
                <span className="text-lg font-bold text-white">{volume} CU. FT.</span>
              </div>

              {/* Main Tonnage Recommendation */}
              <div className="bg-cyan-950/80 border border-cyan-500/50 p-6 rounded-xl text-center space-y-2">
                <span className="text-[10px] text-cyan-300 tracking-widest uppercase">
                  RECOMMENDED SYSTEM CAPACITY
                </span>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-cyan-400 cyan-text-glow">
                  {recommendedTonnage} TR
                </div>
                <p className="text-[11px] text-slate-300">
                  Approx. {Math.round(totalBTU).toLocaleString()} BTU/hr Cooling Load
                </p>
              </div>

            </div>

            <p className="text-[11px] text-slate-400 italic">
              * Note: This calculation provides a preliminary estimate. Our engineering team conducts physical site heat-load calculations before recommending final equipment models.
            </p>

            <button
              onClick={() => onOpenConsultation(`Calculated Requirement: ${recommendedTonnage} TR for ${area} sq.ft.`)}
              className="w-full py-3.5 bg-cyan-400 text-slate-950 text-xs font-mono font-bold rounded-lg uppercase tracking-wider hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <span>REQUEST VERIFIED CONSULTATION FOR THIS LOAD</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

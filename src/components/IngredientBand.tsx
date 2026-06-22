import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Atom, Droplets, Target, ArrowRight } from 'lucide-react';

export default function IngredientBand() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const panelData = [
    {
      name: "Ceramides",
      strength: "3.0% Pure Cplx",
      role: "BARRIER-REPAIRING LIPIDS",
      desc: "Lipid molecules that act as brick-and-mortar glue, binding skin cells into a solid, water-tight network to block moisture evaporation.",
      color: "bg-toxic-lime text-raw-charcoal",
      metric: "7-Day Shield Density Increase",
      icon: <Droplets className="w-8 h-8 stroke-[2.5]" />
    },
    {
      name: "Niacinamide",
      strength: "10.0% Unbuffered",
      role: "TONE-EVENING MULTI-TASKER",
      desc: "Deep cellular cell-communicating vitamin that constricts dilated sebum pores, inhibits pigment spots, and fortifies lipid biosynthesis.",
      color: "bg-electric-cyan text-raw-charcoal",
      metric: "14-Day Tone Balance Realignment",
      icon: <Atom className="w-8 h-8 stroke-[2.5]" />
    },
    {
      name: "Centella",
      strength: "50.0% Leaf Extract",
      role: "METABOLIC IRRITATION AMORTIZER",
      desc: "An ultra-restorative Asian pennywort serum that immediately pacifies inflammatory papules, heat flush, tingling, and surface micro-tears.",
      color: "bg-hot-magenta text-white",
      metric: "Overnight Hot-Redness De-escalation",
      icon: <Target className="w-8 h-8 stroke-[2.5]" />
    }
  ];

  return (
    <section id="ingredient-band" className="border-b-4 border-raw-charcoal relative">
      
      {/* Mini Title Ribbon */}
      <div className="bg-raw-charcoal text-white py-3 border-b-2 border-raw-charcoal text-center select-none overflow-hidden">
        <div className="flex justify-around items-center font-mono text-xs font-black tracking-widest uppercase gap-8">
          <span>⚡ CLEAN FORMULATIONS ⚡ NO SYNTHETIC DYES ⚡ NO SILICONES ⚡ RAW & STABLE ACTIVES only</span>
        </div>
      </div>

      {/* Grid Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {panelData.map((panel, idx) => {
          const isClicked = activeTab === idx;

          return (
            <div
              key={panel.name}
              onMouseEnter={() => setActiveTab(idx)}
              onMouseLeave={() => setActiveTab(null)}
              className={`relative border-b-4 md:border-b-0 md:border-r-4 last:border-r-0 border-raw-charcoal py-12 px-6 md:p-10 lg:p-12 transition-all duration-300 min-h-[300px] flex flex-col justify-between group cursor-pointer ${panel.color}`}
            >
              
              {/* Top Details */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs font-black bg-raw-charcoal text-white px-2.5 py-1 tracking-wider uppercase border border-white/20 select-none">
                    {panel.strength}
                  </span>
                  <h3 className="font-display font-black text-4xl xl:text-5xl uppercase tracking-tighter mt-4 leading-none transform group-hover:-skew-x-2 transition-transform">
                    {panel.name}
                  </h3>
                </div>

                <div className="p-3 bg-white/10 rounded-full border border-white/20 group-hover:bg-white/25 transition-colors">
                  {panel.icon}
                </div>
              </div>

              {/* Central Text Segment */}
              <div className="my-8">
                <p className="font-mono text-xs font-bold uppercase tracking-wider opacity-60">
                  {panel.role}
                </p>
                <p className="font-sans text-xs lg:text-sm font-semibold opacity-90 mt-2 leading-relaxed max-w-sm">
                  {panel.desc}
                </p>
              </div>

              {/* Footer specs */}
              <div className="border-t border-dashed border-current/30 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono text-[10px] font-black">
                <div>
                  <span className="opacity-50 uppercase block">CLINICAL TRACKER</span>
                  <span className="uppercase block mt-1">{panel.metric}</span>
                </div>
                
                <span className="px-3 py-1.5 bg-raw-charcoal text-white uppercase text-center self-start sm:self-auto flex items-center space-x-1 hover:skew-y-1 transition-all rounded-none">
                  <span>BIO-READ</span>
                  <ArrowRight className="w-3 h-3 text-toxic-lime" />
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}

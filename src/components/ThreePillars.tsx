import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Beaker, Zap, Activity } from 'lucide-react';

export default function ThreePillars() {
  const pillars = [
    {
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center bg-white border-3 border-raw-charcoal rounded-none shadow-[3px_3px_0px_#121212] group-hover:shadow-[1px_1px_0px_#121212] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
          <span className="font-display font-black text-xl text-raw-charcoal">123</span>
        </div>
      ),
      title: "3-Step Routines",
      subtitle: "Cleanse, treat, seal. That’s it.",
      description: "No tedious 10-layer steps. Just three powerful, scientifically sound elements that give your skin breathing room to heal."
    },
    {
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center bg-white border-3 border-raw-charcoal rounded-none shadow-[3px_3px_0px_#121212] group-hover:shadow-[1px_1px_0px_#121212] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
          <ShieldCheck className="w-6 h-6 text-hot-magenta stroke-[2.5]" />
        </div>
      ),
      title: "Barrier-Friendly",
      subtitle: "No over-exfoliating, no drama.",
      description: "Rich in physiolipid-replicating ceramides, cholesterols, and cell-soothers that protect your shield instead of stripping it."
    },
    {
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center bg-white border-3 border-raw-charcoal rounded-none shadow-[3px_3px_0px_#121212] group-hover:shadow-[1px_1px_0px_#121212] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
          <Beaker className="w-6 h-6 text-electric-cyan stroke-[2.5]" />
        </div>
      ),
      title: "Clinically inspired",
      subtitle: "Actives that work, not fluff.",
      description: "Unbuffered percentages of gold-standard skin-graft-tier actives balanced with high-concentration botanicals."
    }
  ];

  return (
    <section id="why-raw" className="bg-hot-coral border-b-4 border-raw-charcoal text-raw-charcoal relative py-12 md:py-16 overflow-hidden">
      
      {/* Dynamic diagonal background lines for vintage indie packaging style */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ff5e57_25%,transparent_25%,transparent_50%,#ff5e57_50%,#ff5e57_75%,transparent_75%,transparent)] bg-[size:30px_30px] opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title / Header */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-black bg-raw-charcoal text-toxic-lime px-3 py-1 uppercase rounded border border-raw-charcoal inline-block rotate-[-1deg]">
              THE RAW DISCIPLINE
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight uppercase mt-3">
              WHY THE SKIN-WORLD LOVES RAW
            </h2>
          </div>
          <div className="flex items-center justify-center space-x-2 font-mono text-xs font-black bg-white/30 border-2 border-raw-charcoal px-3 py-1.5 self-center md:self-auto rotate-[2deg]">
            <Activity className="w-4 h-4 text-raw-charcoal animate-pulse" />
            <span>NO PLACEBO FILLERS. NO BULL.</span>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white border-4 border-raw-charcoal p-6 lg:p-8 relative group cursor-pointer shadow-[6px_6px_0px_#121212] hover:shadow-[10px_10px_0px_#121212] transition-all"
            >
              {/* Corner badge for numbers */}
              <span className="absolute top-4 right-4 font-mono text-sm font-black text-raw-charcoal/30">
                0{idx + 1}
              </span>

              {/* Icon */}
              <div className="mb-6 transform group-hover:rotate-6 transition-transform">
                {pillar.icon}
              </div>

              {/* Bold Titles */}
              <h3 className="font-display font-extrabold text-xl lg:text-2xl uppercase tracking-tight text-raw-charcoal group-hover:text-hot-magenta transition-colors">
                {pillar.title}
              </h3>
              
              <h4 className="font-space text-sm lg:text-base font-bold text-hot-coral mt-1 mb-3">
                {pillar.subtitle}
              </h4>

              <p className="font-sans text-xs lg:text-sm text-raw-charcoal/80 leading-relaxed border-t border-dashed border-raw-charcoal/20 pt-4">
                {pillar.description}
              </p>

              {/* Interactive bottom bar */}
              <div className="mt-6 flex items-center justify-between text-xs font-mono font-black text-raw-charcoal/40 group-hover:text-raw-charcoal transition-colors">
                <span>STABILIZED ACTIVE LEVEL</span>
                <span className="text-toxic-lime bg-raw-charcoal px-1.5 py-0.5 font-bold rounded">100%</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

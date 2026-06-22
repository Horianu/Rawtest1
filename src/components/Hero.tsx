import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Check, Flame } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onHowItWorksClick: () => void;
}

export default function Hero({ onShopClick, onHowItWorksClick }: HeroProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const [viewMode, setViewMode] = useState<'stack' | 'unbox'>('unbox');
  const [activatedSlot, setActivatedSlot] = useState<string | null>(null);

  return (
    <section className="relative min-h-[calc(100vh-100px)] flex flex-col justify-center border-b-4 border-raw-charcoal bg-raw-neutral overflow-hidden py-12 lg:py-0">
      
      {/* Absolute decorative items */}
      <div className="absolute top-[10%] left-[8%] opacity-[0.03] select-none pointer-events-none hidden xl:block">
        <span className="font-display text-[220px] font-black leading-none text-raw-charcoal leading-none">RAW</span>
      </div>

      <div className="absolute -right-20 top-20 w-96 h-96 rounded-full bg-electric-cyan/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-10 w-96 h-96 rounded-full bg-hot-magenta/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text and Actions */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left pt-6 lg:pt-0">
          
          <div className="inline-flex self-center lg:self-start items-center space-x-2 bg-raw-charcoal text-white px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase mb-6 transform -rotate-1 hover:rotate-0 transition-transform">
            <Flame className="w-4 h-4 text-toxic-lime animate-pulse fill-toxic-lime" />
            <span>THE INDIE RESET OF 2026</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl xl:text-8xl tracking-tighter leading-[0.9] text-raw-charcoal uppercase select-none">
            <span className="block transform hover:skew-x-1 duration-150">RAW SKIN.</span>
            <span className="block text-hot-magenta decoration-toxic-lime underline decoration-4 md:decoration-8 hover:text-raw-charcoal transition-colors">LOUD COLOUR.</span>
          </h1>

          <p className="font-space font-bold text-xl md:text-2xl mt-6 text-raw-charcoal/90">
            3-step routines that kill the 10-step chaos.
          </p>

          <ul className="mt-6 flex flex-col md:flex-row lg:flex-col xl:flex-row flex-wrap gap-4 text-left justify-center lg:justify-start font-mono text-sm font-bold text-raw-charcoal/80">
            <li className="flex items-center space-x-2 bg-white px-3 py-2 border-2 border-raw-charcoal raw-border-pixel-sm">
              <span className="w-5 h-5 rounded-full bg-toxic-lime border border-raw-charcoal flex items-center justify-center text-xs font-black">✓</span>
              <span>BARRIER-SAFE FORMULAS</span>
            </li>
            <li className="flex items-center space-x-2 bg-white px-3 py-2 border-2 border-raw-charcoal raw-border-pixel-sm">
              <span className="w-5 h-5 rounded-full bg-electric-cyan border border-raw-charcoal flex items-center justify-center text-xs font-black">✓</span>
              <span>HIGH-IMPACT PACKAGING</span>
            </li>
            <li className="flex items-center space-x-2 bg-white px-3 py-2 border-2 border-raw-charcoal raw-border-pixel-sm">
              <span className="w-5 h-5 rounded-full bg-hot-magenta border border-raw-charcoal text-white flex items-center justify-center text-xs font-black">✓</span>
              <span>2–3 STEPS MAX</span>
            </li>
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onShopClick}
              className="w-full sm:w-auto px-8 py-5 bg-toxic-lime text-raw-charcoal text-lg font-space font-black uppercase tracking-wider border-4 border-raw-charcoal raw-border-pixel cursor-pointer hover:bg-neutral-900 hover:text-toxic-lime hover:shadow-[6px_6px_0px_#121212] transition-all duration-150 active:translate-y-1 active:translate-x-1 flex items-center justify-center space-x-3 group"
            >
              <span>SHOP 3-STEP KITS</span>
              <ArrowUpRight className="w-6 h-6 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onHowItWorksClick}
              className="w-full sm:w-auto px-8 py-5 bg-transparent text-raw-charcoal text-lg font-space font-black uppercase tracking-wider border-4 border-raw-charcoal hover:bg-raw-charcoal hover:text-white transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>SEE HOW IT WORKS</span>
            </button>
          </div>

          {/* Skin Guarantee Micro Badge */}
          <div className="mt-8 flex items-center justify-center lg:justify-start space-x-2">
            <div className="flex -space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
            </div>
            <span className="font-mono text-xs font-black text-raw-charcoal/60">
              Over 25,000+ Compromised Barriers Formally Rebuilt
            </span>
          </div>

        </div>

        {/* Right Side: Bold, interactive 3D color-blocked mockup sculpture / 1-2-3 Unboxer */}
        <div className="lg:col-span-6 flex flex-col justify-between relative min-h-[490px] md:min-h-[580px] bg-deep-violet border-4 border-raw-charcoal raw-border-pixel-lg overflow-hidden py-6 px-4">
          
          {/* Dot Grid Layer from Design mockup */}
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

          {/* Toggle Tab Row */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-30">
            <div className="flex bg-raw-charcoal/95 backdrop-blur-md p-1 border-2 border-white/20">
              <button 
                onClick={() => setViewMode('stack')}
                className={`px-3 py-1 font-mono text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'stack' ? 'bg-toxic-lime text-raw-charcoal' : 'text-white/60 hover:text-white'
                }`}
              >
                3D Packstack
              </button>
              <button 
                onClick={() => setViewMode('unbox')}
                className={`px-3 py-1 font-mono text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'unbox' ? 'bg-toxic-lime text-raw-charcoal' : 'text-white/60 hover:text-white'
                }`}
              >
                1-2-3 Unboxer
              </button>
            </div>

            <div className="hidden sm:flex items-center space-x-1 font-mono text-[8px] tracking-widest bg-toxic-lime text-raw-charcoal px-2 py-0.5 font-bold uppercase">
              <span>MOCKUP PREVIEW</span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center relative w-full mt-10">
            {viewMode === 'stack' ? (
              // Mode A: Dynamic Physics Packaging Stack
              <div 
                onClick={() => setClickCount(prev => prev + 1)}
                className="relative w-full max-w-[420px] aspect-square flex items-center justify-center animate-float-slow cursor-pointer z-10"
              >
                {/* Base Platform */}
                <div className="absolute bottom-[8%] w-[80%] h-6 bg-black/45 blur-md rounded-full transform -rotate-2 z-0" />

                {/* 1. Behind: Tall rectangular carton (Magenta) */}
                <div 
                  onMouseEnter={() => setHoveredProduct('carton-magenta')}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="absolute left-[8%] bottom-[20%] w-[150px] md:w-[170px] h-[280px] md:h-[320px] bg-[#FF00FF] border-4 border-raw-charcoal rotate-[-5deg] hover:rotate-[-2deg] transition-all duration-300 z-10 raw-border-pixel shadow-2xl overflow-hidden flex flex-col justify-between p-4"
                  style={{
                    boxShadow: hoveredProduct === 'carton-magenta' ? '12px 12px 0px 0px #121212' : '6px 6px 0px 0px #121212'
                  }}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] bg-white text-raw-charcoal px-1 py-0.5 border border-raw-charcoal font-black rounded rotate-[-6deg]">STEP 02</span>
                    <span className="font-mono text-[9px] text-white font-bold">100ml / 3.4 FL.OZ</span>
                  </div>
                  
                  {/* Wrapped big RAW word */}
                  <div className="my-auto transform -rotate-90 origin-center text-center select-none">
                    <span className="font-display font-black text-[70px] md:text-[90px] leading-none text-white tracking-widest block transform scale-y-120">
                      RAW
                    </span>
                  </div>
                  
                  <div className="border-t-2 border-raw-charcoal/40 pt-2 flex justify-between items-end">
                    <span className="font-space text-xs font-black text-white leading-tight">ACTIVE<br />GLAZE</span>
                    <span className="w-5 h-5 rounded-full bg-toxic-lime border border-raw-charcoal flex items-center justify-center text-[8px] text-raw-charcoal font-black">9.8</span>
                  </div>
                </div>

                {/* 2. Overlapping Middle: Chunky Cylinder (Toxic Lime) */}
                <div 
                  onMouseEnter={() => setHoveredProduct('cylinder-lime')}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="absolute right-[12%] bottom-[12%] w-[130px] md:w-[150px] h-[250px] md:h-[285px] bg-[#DFFF00] border-4 border-raw-charcoal rounded-[40px] rotate-[8deg] hover:rotate-[4deg] transition-all duration-300 z-20 raw-border-pixel shadow-2xl flex flex-col items-center justify-between py-6 overflow-hidden"
                  style={{
                    boxShadow: hoveredProduct === 'cylinder-lime' ? '16px 16px 0px 0px #121212' : '8px 8px 0px 0px #121212'
                  }}
                >
                  <div className="w-full text-center px-4">
                    {/* Cylinder cap */}
                    <div className="w-16 h-8 bg-raw-charcoal border-2 border-white rounded-t-lg mx-auto transform -translate-y-1 mb-2 shadow-inner" />
                    <span className="font-mono text-[9px] bg-raw-charcoal text-white px-2 py-0.5 rounded font-black">STEP 01</span>
                  </div>

                  {/* Huge wrapped typography */}
                  <div className="my-auto select-none">
                    <p className="font-display font-black text-[38px] md:text-[44px] leading-none text-raw-charcoal tracking-tight select-none uppercase scale-y-130 leading-[0.8]">
                      RAW<br />GEL
                    </p>
                  </div>

                  <div className="text-center px-4 w-full">
                    <p className="font-mono text-[9px] font-extrabold text-[#121212]/70">LIPID SAFE CLEANSER</p>
                    <div className="w-4 h-4 bg-raw-charcoal rounded-full mx-auto mt-2 animate-ping opacity-30" />
                  </div>
                </div>

                {/* 3. Nested Front-Left: Smaller Orange Cylinder / Jar */}
                <div 
                  onMouseEnter={() => setHoveredProduct('isojar-orange')}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="absolute left-[30%] bottom-[8%] w-[100px] md:w-[120px] h-[120px] md:h-[135px] bg-neon-orange border-4 border-raw-charcoal rounded-t-[20px] rounded-b-[40px] rotate-[-12deg] hover:rotate-[-6deg] transition-all duration-300 z-30 raw-border-pixel shadow-xl flex flex-col justify-between py-3 px-3 overflow-hidden text-white"
                  style={{
                    boxShadow: hoveredProduct === 'isojar-orange' ? '12px 12px 0px 0px #121212' : '6px 6px 0px 0px #121212'
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[8px] bg-deep-violet text-toxic-lime px-1 rounded font-black">03</span>
                    <span className="w-2 h-2 rounded-full bg-toxic-lime" />
                  </div>
                  
                  <div className="text-center">
                    <span className="font-display font-black text-[22px] md:text-[26px] tracking-tighter uppercase leading-none block scale-y-110">
                      CEMENT
                    </span>
                    <span className="font-mono text-[8px] text-white/80 block mt-0.5 uppercase tracking-widest">Seal lipid</span>
                  </div>

                  <div className="h-2 bg-raw-charcoal border border-white/20 w-full rounded-full overflow-hidden">
                    <div className="bg-toxic-lime h-full w-[80%]" />
                  </div>
                </div>

                {/* Pop dynamic float bubble overlay for click fun */}
                <div className="absolute right-[5%] top-[10%] bg-raw-charcoal border-2 border-toxic-lime text-white font-mono text-[10px] font-black tracking-wider py-1.5 px-3 rounded-none uppercase z-30 shadow-[3px_3px_0px_#ff007f] rotate-[12deg] animate-pulse">
                  {clickCount > 0 ? `💥 COLLISION LEVEL: ${clickCount * 10}%` : '👉 CLICK TO STACK!'}
                </div>

                <div className="absolute left-[30%] top-[3%] bg-electric-cyan border-2 border-raw-charcoal text-raw-charcoal font-space text-xs font-black py-1 px-2.5 rounded-none z-30 rotate-[-8deg] shadow-[2px_2px_0px_#121212]">
                  🛡️ TOXIC-FREE GLAZE
                </div>
              </div>
            ) : (
              // Mode B: "1 2 3 RAW" Presentation Carton Slider Box (The feature they Love!)
              <div className="w-full max-w-[450px] bg-[#EAE5DF] border-4 border-raw-charcoal p-4 md:p-6 shadow-[8px_8px_0px_#1a1a1a] flex flex-col justify-between h-[360px] md:h-[420px] relative z-10 transition-transform hover:skew-x-1 duration-200">
                {/* Vintage Cardboard Liner */}
                <div className="absolute inset-0 border border-dashed border-raw-charcoal/20 m-2 pointer-events-none" />

                <div className="flex justify-between items-start border-b-2 border-raw-charcoal pb-3 relative z-10">
                  <div>
                    <span className="font-mono text-[10px] bg-raw-charcoal text-white px-2 py-0.5 font-bold">RAW BOX SYSTEM v2.6</span>
                    <h3 className="font-serif font-black text-2xl tracking-tighter mt-1 italic text-raw-charcoal">
                      1  2  3  RAW.
                    </h3>
                  </div>
                  <div className="text-right font-mono text-[8px] text-raw-charcoal/60 uppercase">
                    <span>Clinical Packing</span>
                    <span className="block font-black text-rose-500">CLOSED CELL HOUSING</span>
                  </div>
                </div>

                {/* The 3 Compartments holding the bottles */}
                <div className="grid grid-cols-3 gap-3 my-4 relative z-10 flex-1 items-stretch">
                  
                  {/* Slot 1: Cleanse Surfactant */}
                  <div 
                    onClick={() => setActivatedSlot(activatedSlot === 'cleanse' ? null : 'cleanse')}
                    className={`relative border-2 border-dashed border-raw-charcoal/30 bg-black/5 hover:bg-black/10 transition-all rounded p-1 flex flex-col justify-between text-center select-none cursor-pointer ${
                      activatedSlot === 'cleanse' ? 'border-solid border-raw-charcoal bg-white shadow-md -translate-y-2' : ''
                    }`}
                  >
                    <span className="font-mono text-[8px] font-black text-raw-charcoal/50">01 GEL</span>
                    
                    {/* Interactive Yellow Bottle render representation */}
                    <div className={`mx-auto w-10 h-20 md:w-12 md:h-24 bg-[#DFFF00] border-2 border-raw-charcoal rounded-t-lg rounded-b flex flex-col justify-between py-1 transition-transform ${
                      activatedSlot === 'cleanse' ? 'scale-110 rotate-3' : 'opacity-85'
                    }`}>
                      <div className="w-5 h-2 bg-raw-charcoal mx-auto -mt-2 rounded" />
                      
                      <span className="font-display font-black text-[12px] md:text-[14px] text-raw-charcoal tracking-widest block rotate-[-90deg] my-auto scale-y-125">
                        RAW
                      </span>

                      <span className="font-mono text-[6px] bg-raw-charcoal text-white rounded scale-85 uppercase font-bold">Cleanse</span>
                    </div>

                    <span className="font-mono text-[8px] font-extrabold text-raw-charcoal/60 mt-1 uppercase">AMINO</span>
                  </div>

                  {/* Slot 2: Treat Glaze */}
                  <div 
                    onClick={() => setActivatedSlot(activatedSlot === 'treat' ? null : 'treat')}
                    className={`relative border-2 border-dashed border-raw-charcoal/30 bg-black/5 hover:bg-black/10 transition-all rounded p-1 flex flex-col justify-between text-center select-none cursor-pointer ${
                      activatedSlot === 'treat' ? 'border-solid border-raw-charcoal bg-white shadow-md -translate-y-2' : ''
                    }`}
                  >
                    <span className="font-mono text-[8px] font-black text-raw-charcoal/50">02 TREAT</span>

                    {/* Interactive Coral Bottle render representation */}
                    <div className={`mx-auto w-10 h-20 md:w-12 md:h-24 bg-[#FF6B6B] border-2 border-raw-charcoal flex flex-col justify-between py-1 transition-transform ${
                      activatedSlot === 'treat' ? 'scale-110 rotate-[-2deg]' : 'opacity-85'
                    }`}>
                      <div className="w-4 h-3 bg-white mx-auto -mt-1 border border-raw-charcoal rounded-full" />
                      
                      <span className="font-display font-black text-[12px] md:text-[14px] text-white tracking-widest block rotate-90 my-auto scale-y-125">
                        RAW
                      </span>

                      <span className="font-mono text-[6px] bg-[#1a1a1a] text-[#DFFF00] rounded scale-85 uppercase font-bold">Glaze</span>
                    </div>

                    <span className="font-mono text-[8px] font-extrabold text-raw-charcoal/60 mt-1 uppercase">SERUM</span>
                  </div>

                  {/* Slot 3: Seal Cement */}
                  <div 
                    onClick={() => setActivatedSlot(activatedSlot === 'seal' ? null : 'seal')}
                    className={`relative border-2 border-dashed border-raw-charcoal/30 bg-black/5 hover:bg-black/10 transition-all rounded p-1 flex flex-col justify-between text-center select-none cursor-pointer ${
                      activatedSlot === 'seal' ? 'border-solid border-raw-charcoal bg-white shadow-md -translate-y-2' : ''
                    }`}
                  >
                    <span className="font-mono text-[8px] font-black text-raw-charcoal/50">03 SEAL</span>

                    {/* Interactive Cyan jar render representation */}
                    <div className={`mx-auto w-12 h-16 md:w-14 md:h-20 bg-[#00FFFF] border-2 border-raw-charcoal rounded-[16px] flex flex-col justify-between py-1.5 transition-transform ${
                      activatedSlot === 'seal' ? 'scale-110 rotate-6' : 'opacity-85'
                    }`}>
                      <div className="w-10 h-2.5 bg-raw-charcoal mx-auto -mt-3.5 border-b border-white/20" />
                      
                      <span className="font-display font-black text-[11px] md:text-[13px] text-raw-charcoal tracking-wider uppercase block scale-y-110 leading-none">
                        RAW
                      </span>

                      <span className="font-mono text-[6px] text-raw-charcoal tracking-widest opacity-80 uppercase leading-none font-bold">Cement</span>
                    </div>

                    <span className="font-mono text-[8px] font-extrabold text-raw-charcoal/60 mt-1 uppercase">LIPID</span>
                  </div>

                </div>

                {/* Box base footer description status */}
                <div className="border-t border-raw-charcoal/20 pt-2 text-center text-raw-charcoal/70 bg-white/40 p-2 font-mono text-[9px] font-black uppercase rounded relative z-10 flex justify-between items-center">
                  <span>
                    {activatedSlot === 'cleanse' && "👉 1. CLEANSE: GEL-TO-FOAM AMINO SOLUBLE"}
                    {activatedSlot === 'treat' && "👉 2. TREAT: CERTIFIED LIPID GLUE SERUM"}
                    {activatedSlot === 'seal' && "👉 3. SEAL: CELLULAR REPAIR CERAMIDE CEMENT"}
                    {!activatedSlot && "💡 CLICK A COMPARTMENT TO EXTRACT PRODUCTS"}
                  </span>
                  <span className="text-emerald-600 bg-emerald-100 border border-emerald-300 px-1 py-0.5 animate-pulse">
                    COMPLETE KIT ACTIVE
                  </span>
                </div>

              </div>
            )}
          </div>

          {/* Quick instructions indicator overlay */}
          <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[8px] font-mono text-white/50 tracking-widest uppercase z-20">
            <span>PACKAGED AT TEMPERATURE: 12.4°C</span>
            <span>PRESS SPACEBAR OR USE CLK</span>
          </div>

        </div>

      </div>
    </section>
  );
}

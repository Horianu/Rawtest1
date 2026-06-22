import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, HelpCircle, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      number: 1,
      title: "CLEANSE",
      subtitle: "Strip the sludge, not the lipids.",
      copy: "RAW gel-to-foam cleansers use amino-acid mild surfactants. They clear heavy sebaceous grease, dirt, and chemical sunscreens in one pass. No moisture-stripping bubble lathers that leave skin dry, tight, and vulnerable.",
      dosage: "1 pump. Lather with warm water.",
      color: "bg-toxic-lime text-raw-charcoal border-toxic-lime",
      pillBg: "bg-toxic-lime",
      imageMockup: (
        <div className="w-16 h-28 bg-toxic-lime border-3 border-raw-charcoal rounded-3xl relative flex flex-col justify-between py-2 px-1 shadow-[2px_2px_0px_#121212]">
          <div className="w-6 h-3 bg-neutral-350 border-2 border-raw-charcoal rounded-t-sm mx-auto transform -translate-y-3 shadow-inner" />
          <span className="font-display font-black text-xs text-raw-charcoal self-center block scale-y-115">RAW</span>
          <span className="font-mono text-[7px] bg-raw-charcoal text-white rounded text-center scale-90 mb-1">STEP 1</span>
        </div>
      )
    },
    {
      number: 2,
      title: "TREAT",
      subtitle: "Inject cellular glue.",
      copy: "Barrier-Glue with 3% lipid-identical ceramides or 10% unbuffered Niacinamide targets compromised cell membranes immediately. It fills the micro-gaps within your skin matrix to reverse dehydration within minutes.",
      dosage: "3 drops. Press gently onto damp skin.",
      color: "bg-electric-cyan text-raw-charcoal border-electric-cyan",
      pillBg: "bg-electric-cyan",
      imageMockup: (
        <div className="w-16 h-28 bg-electric-cyan border-3 border-raw-charcoal rounded-none relative flex flex-col justify-between py-2 px-1.5 shadow-[2px_2px_0px_#121212] rotate-3">
          <div className="w-4 h-6 bg-raw-charcoal border-2 border-white rounded-md mx-auto transform -translate-y-4 flex items-center justify-center">
            <span className="w-1 bg-white h-full animate-pulse" />
          </div>
          <span className="font-display font-black text-xs text-raw-charcoal self-center block leading-none text-center">GLUE<br />SERUM</span>
          <span className="font-mono text-[7px] bg-hot-magenta text-white text-center rounded-none scale-90 mb-1">STEP 2</span>
        </div>
      )
    },
    {
      number: 3,
      title: "SEAL",
      subtitle: "Lock the lipid gates.",
      copy: "Ceramide Cement or zero-weight gels creates an occlusive bio-shield that reduces hydration evaporation to zero. It traps the treatment layer inside your skin, keeping it safe for 24 hours of repair.",
      dosage: "Acorn size. Spread outward and lock.",
      color: "bg-neon-orange text-white border-neon-orange",
      pillBg: "bg-neon-orange",
      imageMockup: (
        <div className="w-20 h-20 bg-neon-orange border-3 border-raw-charcoal rounded-[24px] relative flex flex-col justify-between p-2 shadow-[2px_2px_0px_#121212] -rotate-3 text-white">
          <div className="flex justify-between items-center bg-deep-violet border border-raw-charcoal px-1 py-0.5 rounded-none scale-75 transform -translate-y-3">
            <span className="font-mono text-[6px] text-toxic-lime font-black">LOCK</span>
          </div>
          <span className="font-display font-black text-xs text-center leading-none mt-1">CEMENT</span>
          <span className="font-mono text-[7px] text-white/75 bg-raw-charcoal/30 text-center uppercase scale-90 rounded">STEP 3</span>
        </div>
      )
    }
  ];

  const activeData = steps.find(s => s.number === activeStep) || steps[0];

  return (
    <section id="how-it-works" className="bg-raw-neutral border-b-4 border-raw-charcoal py-16 md:py-24 relative overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Title / Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-black bg-raw-charcoal text-toxic-lime px-3 py-1 uppercase rounded border border-raw-charcoal inline-block rotate-[-1deg]">
              THE 3-STEP RESET SYSTEM
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight uppercase leading-none mt-4">
              3 STEPS THAT KILL THE 10-STEP CHAOS
            </h2>
          </div>
          <p className="lg:col-span-5 font-space text-sm lg:text-base font-bold text-raw-charcoal/70 leading-relaxed">
            Your skin barrier is a naturally formed shield. Over-layering 10 acids and peptide serums compromises its pH. We simplify it back to physiological truths: Cleanse, Treat, Seal.
          </p>
        </div>

        {/* Dynamic Split Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Giant Vertical Number Buttons Wrapper */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col justify-between gap-3 md:gap-4 select-none">
            {steps.map((step) => {
              const isActive = activeStep === step.number;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`flex-1 lg:flex-initial flex items-center justify-between p-4 md:p-6 border-4 border-raw-charcoal text-left transition-all duration-200 cursor-pointer relative ${
                    isActive 
                      ? `${step.pillBg} text-raw-charcoal shadow-[6px_6px_0px_#121212] -skew-y-1` 
                      : 'bg-white text-raw-charcoal/40 hover:text-raw-charcoal hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#121212]'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Big Bold Number */}
                    <span className="font-display font-black text-5xl md:text-[68px] leading-none">
                      0{step.number}
                    </span>
                    <div>
                      <span className="font-mono text-[10px] uppercase block tracking-widest leading-none opacity-60">PHASE</span>
                      <span className="font-display font-extrabold text-sm md:text-lg tracking-tight uppercase block leading-tight">
                        {step.title}
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator Pin */}
                  {isActive && (
                    <span className="hidden lg:block w-3.5 h-3.5 bg-raw-charcoal border-2 border-white rounded-full animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Big explanation with visual interactive details */}
          <div className="lg:col-span-8 bg-white border-4 border-raw-charcoal p-6 md:p-10 relative shadow-[8px_8px_0px_#121212]">
            
            {/* Corner badge for cosmetic safety details */}
            <div className="absolute top-6 right-6 flex items-center space-x-1 font-mono text-[9px] font-black border-2 border-dashed border-raw-charcoal/30 px-2 py-1 text-raw-charcoal/50 rounded-none bg-neutral-50">
              <Sparkles className="w-3 h-3 text-hot-magenta" />
              <span>ACTIVE SYNCRONIZED</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Content */}
                <div className="md:col-span-8 flex flex-col justify-between h-full">
                  <div>
                    <span className={`inline-block font-mono text-[10px] font-black px-2 py-1 uppercase rounded border border-raw-charcoal tracking-wider ${activeData.pillBg} text-raw-charcoal mb-4`}>
                      PHASE 0{activeData.number} — {activeData.title}
                    </span>

                    <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter text-raw-charcoal leading-none">
                      {activeData.subtitle}
                    </h3>

                    <p className="font-sans text-sm md:text-base text-raw-[#121212]/85 leading-relaxed mt-6">
                      {activeData.copy}
                    </p>
                  </div>

                  {/* Micro Specs Block */}
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-dashed border-raw-charcoal/30 pt-6">
                    <div>
                      <span className="font-mono text-[10px] text-raw-charcoal/40 uppercase block font-bold">SUGGESTED DOSAGE</span>
                      <span className="font-space text-xs md:text-sm font-black text-raw-charcoal block mt-1">{activeData.dosage}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-raw-charcoal/40 uppercase block font-bold">BIO-ALIGNMENT LEVEL</span>
                      <span className="font-space text-xs md:text-sm font-black text-toxic-lime bg-raw-charcoal py-0.5 px-2 rounded-none inline-block mt-1">CELLULAR IDENTICAL</span>
                    </div>
                  </div>
                </div>

                {/* Vertical Graphic Representation */}
                <div className="md:col-span-4 bg-raw-neutral border-4 border-raw-charcoal rounded-none p-6 flex flex-col items-center justify-center min-h-[220px] relative">
                  
                  {/* Backdrop rotating aura to feel high-energy */}
                  <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-raw-charcoal/10 animate-spin-slow pointer-events-none" />

                  <div className="mb-4 transform hover:scale-105 transition-transform duration-200">
                    {activeData.imageMockup}
                  </div>

                  <span className="font-mono text-[9px] font-black text-raw-charcoal/40 uppercase tracking-widest text-center mt-2 leading-none">
                    CLICK CONTAINER<br />TO INTERACT
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        {/* Floating Quick warning bar for extra visual fidelity */}
        <div className="mt-12 bg-raw-charcoal text-white p-4 border-2 border-raw-charcoal flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-semibold">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <ShieldAlert className="w-5 h-5 text-hot-magenta shrink-0 animate-pulse" />
            <span>WARNING: Mixing RAW active layers with heavy external acid treatments can trigger over-buffering. Limit routine to RAW formulations for maximum safety.</span>
          </div>
          <button 
            onClick={() => setActiveStep(prev => prev === 3 ? 1 : prev + 1)}
            className="px-3 py-1 bg-white text-raw-charcoal font-black hover:bg-toxic-lime hover:text-raw-charcoal transition-colors uppercase rounded-none whitespace-nowrap shrink-0 flex items-center space-x-1 cursor-pointer"
          >
            <span>NEXT STEP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

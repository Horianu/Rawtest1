import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shuffle, Plus, Check, ShoppingBag, Flame, Sparkles, Star } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, SINGLE_PRODUCTS } from '../data';

interface BundleBuilderProps {
  onAddCustomStack: (items: any[], totalPrice: number) => void;
}

export default function BundleBuilder({ onAddCustomStack }: BundleBuilderProps) {
  // Stacking selects
  const [selectedCleanse, setSelectedCleanse] = useState<string>("cleanse");
  const [selectedTreat, setSelectedTreat] = useState<string>("treat-barrier");
  const [selectedSeal, setSelectedSeal] = useState<string>("seal-cement");

  const [activeTab, setActiveTab] = useState<'cleanse' | 'treat' | 'seal'>('cleanse');
  const [animateLever, setAnimateLever] = useState(false);

  // Retrieve selected products data
  const cleanseData = SINGLE_PRODUCTS.find(p => p.id === selectedCleanse)!;
  const treatData = SINGLE_PRODUCTS.find(p => p.id === selectedTreat)!;
  const sealData = SINGLE_PRODUCTS.find(p => p.id === selectedSeal)!;

  const selectedItems = [cleanseData, treatData, sealData].filter(Boolean);
  
  // Calculate dynamic bundle pricing
  const rawSubtotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const discountRate = selectedItems.length === 3 ? 0.15 : selectedItems.length === 2 ? 0.10 : 0;
  const discountAmount = Math.round(rawSubtotal * discountRate);
  const finalPrice = rawSubtotal - discountAmount;

  // Auto stacking matching color helpers to draw the visual sculpture
  const getColorHex = (id: string) => {
    if (id === 'cleanse') return '#b6ff00'; // Lime
    if (id === 'treat-barrier') return '#00f0ff'; // Cyan
    if (id === 'treat-glow') return '#ff007f'; // Magenta
    if (id === 'seal-cement') return '#ff5a00'; // Orange
    if (id === 'seal-moist') return '#3D0c45'; // Violet
    return '#ccc';
  };

  const getTextColorClass = (id: string) => {
    if (id === 'seal-moist' || id === 'treat-glow') return 'text-white';
    return 'text-raw-charcoal';
  };

  const clearSelection = (phase: 'cleanse' | 'treat' | 'seal') => {
    if (phase === 'cleanse') setSelectedCleanse("");
    if (phase === 'treat') setSelectedTreat("");
    if (phase === 'seal') setSelectedSeal("");
  };

  const handleRandomize = () => {
    setAnimateLever(true);
    setTimeout(() => setAnimateLever(false), 800);

    const treats = ['treat-barrier', 'treat-glow'];
    const seals = ['seal-cement', 'seal-moist'];

    setSelectedTreat(treats[Math.floor(Math.random() * treats.length)]);
    setSelectedSeal(seals[Math.floor(Math.random() * seals.length)]);
  };

  const handleAddBundle = () => {
    // Construct a custom synthetic product for the cart
    const stackProduct: Product = {
      id: `custom-stack-${Date.now()}`,
      name: "CUSTOM RAW STACK Builder",
      subtitle: `${cleanseData.name} + ${treatData.name} + ${sealData.name}`,
      price: finalPrice,
      originalPrice: rawSubtotal,
      stars: 5.0,
      reviews: 1,
      volume: `${selectedItems.length} Products (Custom)`,
      benefits: [
        "Specifically customized around your active variables",
        "Includes personalized dilution instructions",
        "Qualifies for custom raw shelf tier"
      ],
      actives: [cleanseData.active, treatData.active, sealData.active],
      items: [cleanseData.name, treatData.name, sealData.name],
      colorTheme: {
        primaryBg: "bg-hot-magenta",
        accentText: "text-white",
        pillBg: "bg-toxic-lime text-raw-charcoal",
        border: "border-raw-charcoal",
        accentBg: "bg-deep-violet",
        tagBg: "bg-toxic-lime",
        tagText: "text-raw-charcoal"
      },
      imageColor: "#ff007f"
    };

    onAddCustomStack(selectedItems, finalPrice);
  };

  return (
    <section id="bundle-builder" className="bg-[#121212] text-white border-b-4 border-raw-charcoal py-16 md:py-24 relative overflow-hidden">
      
      {/* High-saturation abstract radial overlays */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-deep-violet/45 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-toxic-lime/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Module Title */}
        <div className="text-center md:text-left mb-12">
          <span className="font-mono text-xs font-black bg-toxic-lime text-raw-charcoal px-3 py-1 uppercase rounded border border-raw-charcoal inline-block rotate-[-1.5deg]">
            INTERACTIVE SHELF BUILDER
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight uppercase leading-none mt-4">
            BUILD YOUR OWN RAW STACK
          </h2>
          <p className="font-sans text-xs md:text-sm font-bold text-white/60 mt-2 max-w-xl">
            Mix, match, and stack custom elements. Overlapping target deliverables qualifies you for tiered bulk savings automatically.
          </p>
        </div>

        {/* Builder Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Live Stack Sculpture Drawing */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center min-h-[420px] bg-raw-neutral border-4 border-raw-charcoal p-8 rounded-none relative">
            
            {/* Visual floor background circle of active stack */}
            <div className="absolute inset-x-8 bottom-12 h-6 bg-raw-charcoal/20 blur-md rounded-full" />

            <div className="absolute top-6 left-6 flex items-center space-x-2 font-mono text-[9px] font-black tracking-wider bg-raw-charcoal text-white py-1 px-2.5">
              <span>LIVE STACK INTEGRATION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-toxic-lime animate-ping" />
            </div>

            <button
              onClick={handleRandomize}
              className={`absolute top-6 right-6 p-2 bg-raw-charcoal hover:bg-neutral-800 border-2 border-toxic-lime hover:border-white text-toxic-lime transition-all rounded-none font-mono text-[9px] font-black flex items-center space-x-1 uppercase ${
                animateLever ? 'rotate-180 scale-95' : ''
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>SHUFFLE STACK</span>
            </button>

            {/* Simulated Live Stack Containers piles */}
            <div className="relative w-full max-w-[280px] h-[320px] flex flex-col items-center justify-end">
              
              <AnimatePresence mode="popLayout">
                {/* 3. Top Tier Item: Seal */}
                {selectedSeal && (
                  <motion.div
                    key={selectedSeal}
                    initial={{ y: -100, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-[110px] h-[75px] border-4 border-raw-charcoal rounded-t-[30px] rounded-b-[10px] flex flex-col items-center justify-center relative shadow-md z-30 transform hover:-translate-y-1 hover:rotate-2 transition-transform cursor-pointer"
                    style={{ backgroundColor: getColorHex(selectedSeal) }}
                  >
                    <div className="w-10 h-3 bg-raw-charcoal border border-neutral-300 rounded-t absolute -top-3" />
                    <span className="font-mono text-[7px] bg-raw-charcoal text-white rounded px-1 scale-90 -translate-y-2">SEAL 03</span>
                    <span className={`font-display font-black text-xs leading-none tracking-tighter uppercase ${getTextColorClass(selectedSeal)}`}>
                      {sealData.name.split(' ')[0]}
                    </span>
                    <span className={`font-mono text-[6px] tracking-widest mt-0.5 opacity-60 uppercase ${getTextColorClass(selectedSeal)}`}>
                      Lipids
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stack Connection Joint */}
              <div className="w-12 h-2.5 bg-raw-charcoal z-25 relative" />

              <AnimatePresence mode="popLayout">
                {/* 2. Middle Tier Item: Treat */}
                {selectedTreat && (
                  <motion.div
                    key={selectedTreat}
                    initial={{ y: -100, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 12, delay: 0.05 }}
                    className="w-[140px] h-[95px] border-4 border-raw-charcoal rounded-none flex flex-col items-center justify-center relative shadow-lg z-20 transform hover:-translate-y-1 hover:rotate-[-2deg] transition-transform cursor-pointer"
                    style={{ backgroundColor: getColorHex(selectedTreat) }}
                  >
                    <span className="font-mono text-[7px] bg-zinc-900 text-white rounded px-1 scale-90 -translate-y-2">TREAT 02</span>
                    <span className={`font-display font-black text-sm leading-none tracking-tighter uppercase ${getTextColorClass(selectedTreat)}`}>
                      {treatData.name.split(' ')[0]}
                    </span>
                    <span className={`font-mono text-[7px] tracking-widest mt-1 opacity-60 uppercase ${getTextColorClass(selectedTreat)}`}>
                      {treatData.active.split('+')[0]}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stack Connection Joint */}
              <div className="w-14 h-2.5 bg-raw-charcoal z-15 relative" />

              <AnimatePresence mode="popLayout">
                {/* 1. Base Tier Item: Cleanse */}
                {selectedCleanse && (
                  <motion.div
                    key={selectedCleanse}
                    initial={{ y: -100, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 10, delay: 0.1 }}
                    className="w-[185px] h-[105px] border-4 border-raw-charcoal rounded-[45px] flex flex-col items-center justify-end pb-4 relative shadow-2xl z-10 transform hover:-translate-y-1 transition-transform cursor-pointer"
                    style={{ backgroundColor: getColorHex(selectedCleanse) }}
                  >
                    <div className="w-12 h-4 bg-raw-charcoal border border-neutral-300 rounded-t absolute -top-4 shadow-inner" />
                    <span className="font-mono text-[7px] bg-raw-charcoal text-white rounded px-1 scale-90 -translate-y-3">CLEANSE 01</span>
                    <span className={`font-display font-black text-base leading-none tracking-tighter uppercase ${getTextColorClass(selectedCleanse)}`}>
                      {cleanseData.name.split(' ')[0]}
                    </span>
                    <span className={`font-mono text-[7px] tracking-widest mt-1 opacity-50 uppercase ${getTextColorClass(selectedCleanse)}`}>
                      Melt layer
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floor platform display label */}
              <div className="absolute bottom-[-10px] w-[210px] py-1 border-2 border-raw-charcoal bg-raw-charcoal text-toxic-lime font-mono text-[8px] font-black text-center tracking-widest uppercase select-none rounded">
                ⚙️ SECURE MATRIX: {selectedItems.length} LAYER CLC
              </div>

            </div>

          </div>

          {/* RIGHT: Stacking Selector Panel & Controls */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            <div>
              {/* Steps Tab Headers */}
              <div className="flex border-4 border-raw-charcoal bg-raw-charcoal p-1">
                {(['cleanse', 'treat', 'seal'] as const).map((phase) => {
                  const isActive = activeTab === phase;
                  const phaseSelected = phase === 'cleanse' ? selectedCleanse : phase === 'treat' ? selectedTreat : selectedSeal;

                  return (
                    <button
                      key={phase}
                      onClick={() => setActiveTab(phase)}
                      className={`flex-1 py-3 text-center font-space text-xs font-black uppercase tracking-wider cursor-pointer transition-all ${
                        isActive 
                          ? 'bg-toxic-lime text-raw-charcoal shadow-inner scale-[1.02]' 
                          : 'bg-transparent text-[#b6ff00]/65 hover:text-white'
                      }`}
                    >
                      <span className="block font-mono text-[9px] opacity-40 leading-none">PHASE</span>
                      <span className="block mt-1 leading-none">
                        {phase} {phaseSelected ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Selector Options Lists */}
              <div className="bg-white border-l-4 border-r-4 border-b-4 border-raw-charcoal p-5 text-raw-charcoal min-h-[220px]">
                
                {activeTab === 'cleanse' && (
                  <div className="space-y-3 animate-fade-in">
                    <p className="font-mono text-[10px] text-raw-charcoal/40 uppercase font-black tracking-wider mb-2">CHOOSE CORE AMINO SOLUBLE:</p>
                    {SINGLE_PRODUCTS.filter(p => p.type === 'Cleanse').map((prod) => (
                      <div 
                        key={prod.id}
                        onClick={() => setSelectedCleanse(prod.id)}
                        className={`flex items-center justify-between p-4 border-3 border-raw-charcoal cursor-pointer hover:bg-neutral-50 transition-all ${
                          selectedCleanse === prod.id ? 'bg-toxic-lime/25 border-toxic-lime shadow-sm' : 'bg-neutral-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-4 h-4 rounded-full border border-raw-charcoal" style={{ backgroundColor: prod.color }} />
                          <div>
                            <h4 className="font-display font-extrabold text-sm uppercase leading-none">{prod.name}</h4>
                            <p className="font-mono text-[10px] text-raw-charcoal/50 mt-1 uppercase">ACTIVE: {prod.active}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="font-mono font-black text-sm">{prod.price}€</span>
                          <span className={`w-6 h-6 border-2 border-raw-charcoal rounded-full flex items-center justify-center text-xs font-black ${
                            selectedCleanse === prod.id ? 'bg-toxic-lime text-raw-charcoal' : 'bg-white'
                          }`}>
                            {selectedCleanse === prod.id ? '✓' : '+'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'treat' && (
                  <div className="space-y-3 animate-fade-in">
                    <p className="font-mono text-[10px] text-raw-charcoal/40 uppercase font-black tracking-wider mb-2">CHOOSE ACTIVE TREATMENT SOLUTION:</p>
                    {SINGLE_PRODUCTS.filter(p => p.type === 'Treat').map((prod) => (
                      <div 
                        key={prod.id}
                        onClick={() => setSelectedTreat(prod.id)}
                        className={`flex items-center justify-between p-4 border-3 border-raw-charcoal cursor-pointer hover:bg-neutral-100 transition-all ${
                          selectedTreat === prod.id ? 'bg-electric-cyan/25 border-electric-cyan' : 'bg-neutral-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-4 h-4 rounded-full border border-raw-charcoal animate-pulse" style={{ backgroundColor: prod.color }} />
                          <div>
                            <h4 className="font-display font-extrabold text-sm uppercase leading-none">{prod.name}</h4>
                            <p className="font-mono text-[10px] text-raw-charcoal/50 mt-1 uppercase">ACTIVE: {prod.active}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="font-mono font-black text-sm">{prod.price}€</span>
                          <span className={`w-6 h-6 border-2 border-raw-charcoal rounded-full flex items-center justify-center text-xs font-black ${
                            selectedTreat === prod.id ? 'bg-electric-cyan text-raw-charcoal' : 'bg-white'
                          }`}>
                            {selectedTreat === prod.id ? '✓' : '+'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'seal' && (
                  <div className="space-y-3 animate-fade-in">
                    <p className="font-mono text-[10px] text-raw-charcoal/40 uppercase font-black tracking-wider mb-2">CHOOSE OCATIVE BARRIER MESH LIPID:</p>
                    {SINGLE_PRODUCTS.filter(p => p.type === 'Seal').map((prod) => (
                      <div 
                        key={prod.id}
                        onClick={() => setSelectedSeal(prod.id)}
                        className={`flex items-center justify-between p-4 border-3 border-raw-charcoal cursor-pointer hover:bg-neutral-100 transition-all ${
                          selectedSeal === prod.id ? 'bg-neon-orange/25 border-neon-orange' : 'bg-neutral-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-4 h-4 rounded-full border border-raw-charcoal" style={{ backgroundColor: prod.color }} />
                          <div>
                            <h4 className="font-display font-extrabold text-sm uppercase leading-none">{prod.name}</h4>
                            <p className="font-mono text-[10px] text-raw-charcoal/50 mt-1 uppercase">ACTIVE: {prod.active}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="font-mono font-black text-sm">{prod.price}€</span>
                          <span className={`w-6 h-6 border-2 border-raw-charcoal rounded-full flex items-center justify-center text-xs font-black ${
                            selectedSeal === prod.id ? 'bg-neon-orange text-white border-raw-charcoal' : 'bg-white'
                          }`}>
                            {selectedSeal === prod.id ? '✓' : '+'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>

            {/* Price Calculations and CTA */}
            <div className="mt-8 bg-raw-charcoal border-4 border-raw-charcoal p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div>
                <div className="flex items-center space-x-2 font-mono text-[10px] uppercase font-black tracking-widest text-[#fff]/60">
                  <Star className="w-3.5 h-3.5 fill-toxic-lime text-toxic-lime" />
                  <span>TIERED STACK DISCOUNT</span>
                </div>
                
                <div className="flex items-baseline space-x-4 mt-2">
                  <span className="font-mono text-4xl font-black text-toxic-lime">{finalPrice}€</span>
                  {discountAmount > 0 && (
                    <>
                      <span className="font-mono text-lg text-white/50 line-through">{rawSubtotal}€</span>
                      <span className="font-bold text-xs bg-hot-magenta text-white px-2 py-0.5 rounded-none font-mono tracking-wider animate-bounce">
                        {discountRate * 100}% OFF BUNDLE
                      </span>
                    </>
                  )}
                </div>
                <p className="font-mono text-[10px] text-white/50 mt-2 uppercase tracking-tight">
                  {selectedItems.length === 3 ? '🎉 Maximum 15% discount achieved' : selectedItems.length === 2 ? '⚡ Add 1 more for massive 15% off' : 'Select at least 2 items to trigger rebate'}
                </p>
              </div>

              <div className="w-full md:w-auto self-stretch md:self-auto">
                <button
                  disabled={selectedItems.length < 2}
                  onClick={handleAddBundle}
                  className={`w-full md:w-auto px-6 py-4 border-2 border-raw-charcoal font-space text-sm font-black uppercase tracking-wider transition-all rounded-none flex items-center justify-center space-x-2 cursor-pointer ${
                    selectedItems.length >= 2
                      ? 'bg-toxic-lime text-raw-charcoal hover:bg-neutral-800 hover:text-toxic-lime hover:shadow-[3px_3px_0px_#ff4757] hover:border-[#ff4757]'
                      : 'bg-neutral-800 text-white/30 border-neutral-700 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                  <span>ADD CUSTOM STACK ({selectedItems.length})</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>

    </section>
  );
}

import React, { useState, useMemo } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { motion, AnimatePresence } from 'motion/react';
import { Shuffle, Plus, Check, ShoppingBag, Star, Truck, Zap, Gift, RefreshCcw, Info, X } from 'lucide-react';
import { Product } from '../types';
import { SINGLE_PRODUCTS } from '../data';

interface BundleBuilderProps {
  onAddCustomStack: (items: any[], totalPrice: number) => void;
}

export default function BundleBuilder({ onAddCustomStack }: BundleBuilderProps) {
  const [stackItems, setStackItems] = useState<string[]>(['cleanse', 'treat-barrier', 'seal-cement']);
  const [activeTab, setActiveTab] = useState<'cleanse' | 'treat' | 'seal'>('cleanse');
  const [isSubscription, setIsSubscription] = useState(false);
  const [animateLever, setAnimateLever] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  
  const [stackParent] = useAutoAnimate();
  const [subRef] = useAutoAnimate();

  // Derive products from IDs
  const selectedProducts = useMemo(() => {
    return stackItems.map(id => SINGLE_PRODUCTS.find(p => p.id === id)!).filter(Boolean);
  }, [stackItems]);

  const itemCount = selectedProducts.length;

  // Tier Logic
  const tiers = [
    { count: 1, label: 'Base', perk: 'Retail' },
    { count: 2, label: 'Free Ship', perk: 'Shipping', icon: Truck },
    { count: 3, label: '10% OFF', perk: 'Bronze', icon: Zap },
    { count: 4, label: '20% OFF', perk: 'Silver', icon: Zap },
    { count: 5, label: '30% OFF + GIFT', perk: 'RAW VIP', icon: Gift },
  ];

  const currentTierIndex = Math.min(itemCount - 1, tiers.length - 1);
  
  const discountRate = useMemo(() => {
    if (itemCount >= 5) return 0.30;
    if (itemCount >= 4) return 0.20;
    if (itemCount >= 3) return 0.10;
    return 0;
  }, [itemCount]);

  const subscriptionDiscount = isSubscription ? 0.10 : 0;
  const totalDiscountRate = Math.min(discountRate + subscriptionDiscount, 0.40);
  
  const rawSubtotal = selectedProducts.reduce((acc, curr) => acc + curr.price, 0);
  const discountAmount = Math.round(rawSubtotal * totalDiscountRate);
  const finalPrice = rawSubtotal - discountAmount;

  const handleAddItem = (id: string) => {
    if (stackItems.length >= 6) return; // Cap at 6 for visual/performance
    setStackItems(prev => [...prev, id]);
  };

  const handleRemoveItem = (index: number) => {
    setStackItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleRandomize = () => {
    setAnimateLever(true);
    setTimeout(() => setAnimateLever(false), 800);
    
    const count = 3 + Math.floor(Math.random() * 3);
    const randomItems: string[] = [];
    for (let i = 0; i < count; i++) {
      randomItems.push(SINGLE_PRODUCTS[Math.floor(Math.random() * SINGLE_PRODUCTS.length)].id);
    }
    setStackItems(randomItems);
  };

  const handleAddBundle = () => {
    onAddCustomStack(selectedProducts, finalPrice);
  };

  return (
    <section id="bundle-builder" className="bg-[#121212] text-white border-b-4 border-raw-charcoal py-16 md:py-24 relative overflow-hidden">
      
      {/* Background FX */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-deep-violet/45 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-toxic-lime/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Module Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs font-black bg-toxic-lime text-raw-charcoal px-3 py-1 uppercase rounded border border-raw-charcoal inline-block rotate-[-1.5deg]">
              DYNAMIC REWARD ENGINE v3.0
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-7xl tracking-tight uppercase leading-[0.85] mt-4">
              BUILD YOUR <br />
              <span className="text-toxic-lime">OWN STACK</span>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm font-bold text-white/60 max-w-sm mb-2">
            The taller the stack, the deeper the cut. Add items to unlock shipping tiers, percentage rebates, and exclusive RAW member perks.
          </p>
        </div>

        {/* Builder Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Live Stack Sculpture Drawing */}
          <div className="lg:col-span-5 flex flex-col min-h-[500px] bg-raw-neutral border-4 border-raw-charcoal p-8 relative overflow-hidden">
            
            {/* Visual Floor */}
            <div className="absolute inset-x-8 bottom-12 h-8 bg-raw-charcoal/25 blur-xl rounded-full" />

            <div className="flex items-center justify-between relative z-20 mb-12">
              <div className="flex items-center space-x-2 font-mono text-[10px] font-black tracking-wider bg-raw-charcoal text-white py-1 px-3">
                <span className="w-2 h-2 rounded-full bg-toxic-lime animate-pulse" />
                <span>STACK MATRIX: {itemCount} LAYERS</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setStackItems([])}
                  className="p-2 bg-raw-charcoal hover:bg-neutral-800 border-2 border-white/20 text-white/40 hover:text-white transition-all rounded-none font-mono text-[10px] font-black uppercase"
                >
                  CLEAR
                </button>
                <button
                  onClick={handleRandomize}
                  className={`p-2 bg-raw-charcoal hover:bg-neutral-800 border-2 border-toxic-lime text-toxic-lime transition-all rounded-none font-mono text-[10px] font-black flex items-center space-x-1 uppercase ${
                    animateLever ? 'rotate-180 scale-95' : ''
                  }`}
                >
                  <Shuffle className="w-4 h-4" />
                  <span className="hidden sm:inline">RANDOMIZE</span>
                </button>
              </div>
            </div>

            {/* The Stack Sculpture */}
            <div ref={stackParent} className="flex-1 flex flex-col-reverse items-center justify-end relative pb-10">
              <AnimatePresence mode="popLayout">
                {selectedProducts.map((prod, idx) => (
                  <motion.div
                    key={`${prod.id}-${idx}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    initial={{ y: -200, opacity: 0, rotate: -5 }}
                    animate={{ y: 0, opacity: 1, rotate: idx % 2 === 0 ? 2 : -2 }}
                    exit={{ x: 200, opacity: 0 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0 }}
                    onClick={() => handleRemoveItem(idx)}
                    style={{ 
                      backgroundColor: prod.color,
                      zIndex: hoveredIdx === idx ? 100 : idx + 1,
                      width: `${Math.max(100, 140 + idx * 25)}px`,
                      height: `${Math.max(60, 70 + idx * 12)}px`,
                      marginTop: '-8px'
                    }}
                    className={`border-4 border-raw-charcoal flex flex-col items-center justify-center relative shadow-xl group cursor-pointer transition-all hover:scale-105 active:scale-95`}
                  >
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleRemoveItem(idx); }}
                      className="absolute -right-3 -top-3 w-6 h-6 bg-hot-magenta text-white border-2 border-raw-charcoal rounded-full flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-50 shadow-md"
                    >
                      <X className="w-3 h-3" />
                    </button>

                    <span className="font-mono text-[7px] bg-raw-charcoal text-white px-1 absolute top-1 uppercase font-black tracking-tighter">
                      LAYER 0{itemCount - idx}
                    </span>
                    <span className={`font-display font-black text-xs leading-none tracking-tighter uppercase text-center px-2 select-none ${
                      ['#3D0c45', '#FF00FF', '#0000FF'].includes(prod.color) ? 'text-white' : 'text-raw-charcoal'
                    }`}>
                      {prod.name.split(' ')[0]}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Grounding line */}
              <div className="w-full h-1 bg-raw-charcoal/10 mt-4 rounded-full" />
            </div>

            {/* Mobile Helper */}
            <div className="mt-4 flex flex-wrap gap-1 justify-center">
               {stackItems.length === 0 && (
                 <p className="font-mono text-[10px] text-raw-charcoal/40 animate-pulse uppercase font-black">Stack is empty. Add below.</p>
               )}
            </div>
          </div>

          {/* RIGHT: Tiers & Selection */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* TIERED PERK TRACK */}
            <div className="bg-raw-charcoal border-4 border-raw-charcoal p-4 md:p-6 shadow-[8px_8px_0px_#1a1a1a]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-mono text-xs font-black uppercase tracking-widest text-white">REWARD PROGRESSION</h3>
                <div className="flex items-center space-x-1 font-mono text-[9px] bg-toxic-lime text-raw-charcoal px-2 py-0.5 font-bold rounded">
                  <span>TIER {currentTierIndex + 1} ACTIVE</span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="relative pt-2 pb-10 px-2">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2" />
                <motion.div 
                  className="absolute top-1/2 left-0 h-1 bg-toxic-lime -translate-y-1/2 shadow-[0_0_15px_#DFFF00]"
                  animate={{ width: `${(currentTierIndex / (tiers.length - 1)) * 100}%` }}
                />

                <div className="relative flex justify-between">
                  {tiers.map((tier, idx) => {
                    const isReached = itemCount >= tier.count;
                    const isCurrent = itemCount === tier.count;
                    const TierIcon = tier.icon;

                    return (
                      <div key={idx} className="relative flex flex-col items-center">
                        <div 
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 relative z-10 ${
                            isReached ? 'bg-toxic-lime border-raw-charcoal scale-110 shadow-[0_0_10px_#DFFF00]' : 'bg-raw-charcoal border-white/20 scale-90'
                          }`}
                        >
                          {isReached ? <Check className="w-3 h-3 text-raw-charcoal" /> : <span className="text-[9px] font-mono font-black">{tier.count}</span>}
                        </div>
                        
                        <div className={`absolute top-8 w-max flex flex-col items-center transition-opacity duration-300 ${isReached ? 'opacity-100' : 'opacity-40'}`}>
                          <span className={`font-mono text-[8px] font-black uppercase tracking-tighter ${isCurrent ? 'text-toxic-lime' : 'text-white'}`}>
                            {tier.label}
                          </span>
                          {TierIcon && <TierIcon className={`w-3 h-3 mt-1 ${isReached ? 'text-toxic-lime' : 'text-white/40'}`} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SELECTION TABS */}
            <div>
              <div className="flex border-2 border-raw-charcoal bg-raw-charcoal">
                {(['cleanse', 'treat', 'seal'] as const).map((phase) => (
                  <button
                    key={phase}
                    onClick={() => setActiveTab(phase)}
                    className={`flex-1 py-3 text-center font-space text-[10px] font-black uppercase tracking-wider cursor-pointer transition-all ${
                      activeTab === phase 
                        ? 'bg-toxic-lime text-raw-charcoal' 
                        : 'bg-transparent text-white/50 hover:text-white'
                    }`}
                  >
                    {phase}
                  </button>
                ))}
              </div>

              <div className="bg-white border-x-2 border-b-2 border-raw-charcoal p-4 max-h-[280px] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 gap-2">
                  {SINGLE_PRODUCTS.filter(p => p.type.toLowerCase().includes(activeTab)).map((prod) => (
                    <div 
                      key={prod.id}
                      onClick={() => handleAddItem(prod.id)}
                      className="group flex items-center justify-between p-3 border-2 border-raw-charcoal hover:bg-neutral-50 cursor-pointer transition-all bg-neutral-100/50"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: prod.color }} />
                        <div>
                          <h4 className="font-display font-black text-[11px] uppercase text-raw-charcoal leading-none">{prod.name}</h4>
                          <p className="font-mono text-[8px] text-raw-charcoal/40 mt-0.5 uppercase">{prod.active}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-mono font-black text-xs text-raw-charcoal">{prod.price}€</span>
                        <div className="w-6 h-6 border-2 border-raw-charcoal group-hover:bg-toxic-lime flex items-center justify-center transition-colors">
                          <Plus className="w-3 h-3 text-raw-charcoal" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SUBSCRIPTION TOGGLE */}
            <div 
              ref={subRef}
              onClick={() => setIsSubscription(!isSubscription)}
              className={`p-4 border-4 border-raw-charcoal transition-all cursor-pointer select-none group ${
                isSubscription ? 'bg-electric-cyan text-raw-charcoal' : 'bg-raw-charcoal border-white/20 text-white/40 hover:border-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full border-2 transition-colors ${isSubscription ? 'bg-white border-raw-charcoal' : 'bg-white/5 border-white/10'}`}>
                    <RefreshCcw className={`w-4 h-4 ${isSubscription ? 'text-raw-charcoal animate-spin-slow' : 'text-white'}`} />
                  </div>
                  <div>
                    <h4 className={`font-display font-black text-sm uppercase leading-none ${isSubscription ? 'text-raw-charcoal' : 'text-white'}`}>
                      RAW AUTO-REFILL
                    </h4>
                    <p className={`font-mono text-[9px] mt-1 font-bold ${isSubscription ? 'text-raw-charcoal/70' : 'text-white/40'}`}>
                      FRESH STACK EVERY 30 DAYS • <span className="text-hot-magenta font-black">EXTRA 10% OFF</span>
                    </p>
                  </div>
                </div>
                <div className={`w-10 h-6 rounded-full border-2 relative transition-colors ${isSubscription ? 'bg-raw-charcoal border-raw-charcoal' : 'bg-white/10 border-white/20'}`}>
                  <motion.div 
                    className={`absolute top-1 w-3 h-3 rounded-full bg-toxic-lime`}
                    animate={{ left: isSubscription ? '22px' : '4px' }}
                  />
                </div>
              </div>
              
              {isSubscription && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mt-4 pt-4 border-t border-raw-charcoal/20 flex flex-col gap-2"
                >
                  <div className="flex items-start space-x-2">
                    <Check className="w-3 h-3 mt-0.5 shrink-0" />
                    <p className="font-mono text-[8px] font-bold uppercase">Priority access to clinical batch drops</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-3 h-3 mt-0.5 shrink-0" />
                    <p className="font-mono text-[8px] font-bold uppercase">Cancel or pause via stack matrix dashboard anytime</p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* CHECKOUT SECTION */}
            <div className="bg-raw-charcoal border-4 border-raw-charcoal p-6">
               <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="w-full sm:w-auto">
                    <div className="flex items-baseline space-x-3">
                      <span className="font-mono text-4xl font-black text-toxic-lime">{finalPrice}€</span>
                      {totalDiscountRate > 0 && (
                        <span className="font-mono text-lg text-white/30 line-through">{rawSubtotal}€</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {discountRate > 0 && (
                        <span className="font-mono text-[9px] font-black bg-hot-magenta text-white px-2 py-0.5 uppercase">
                          Tier: {Math.round(discountRate * 100)}% Off
                        </span>
                      )}
                      {isSubscription && (
                        <span className="font-mono text-[9px] font-black bg-electric-cyan text-raw-charcoal px-2 py-0.5 uppercase">
                          Refill: +10% Off
                        </span>
                      )}
                      {itemCount >= 2 && (
                        <span className="font-mono text-[9px] font-black bg-toxic-lime text-raw-charcoal px-2 py-0.5 uppercase">
                          Free Shipping
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    disabled={itemCount === 0}
                    onClick={handleAddBundle}
                    className={`w-full sm:w-auto px-8 py-5 font-space text-sm font-black uppercase tracking-widest transition-all rounded-none flex items-center justify-center space-x-2 ${
                      itemCount > 0
                        ? 'bg-toxic-lime text-raw-charcoal hover:scale-[1.02] active:scale-95 shadow-[4px_4px_0px_#FF00FF]'
                        : 'bg-neutral-800 text-white/20 border-white/5 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>SECURE CUSTOM STACK</span>
                  </button>
               </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #121212;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>

    </section>
  );
}

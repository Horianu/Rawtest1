import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, Beaker, ShoppingBag, Eye, X, Check, Heart, HelpCircle } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface FeaturedRoutinesProps {
  onAddToCart: (prod: Product) => void;
}

export default function FeaturedRoutines({ onAddToCart }: FeaturedRoutinesProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedPreview, setSelectedPreview] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <section id="featured-routines" className="bg-white border-b-4 border-raw-charcoal py-16 md:py-24 relative overflow-hidden">
      
      {/* Absolute graphic background dots */}
      <div className="absolute inset-0 bg-radial-at-t from-[#121212]/5 to-transparent bg-[size:16px_16px] pointer-events-none opacity-20" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-1 font-mono text-xs font-black tracking-widest bg-toxic-lime border-2 border-raw-charcoal px-3 py-1.5 uppercase rotate-[-2deg] mb-4">
            <span>PRE-FORMULATED SHELF SYNC</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight uppercase leading-none">
            PICK YOUR RAW ROUTINE
          </h2>
          <p className="font-space text-base md:text-lg text-raw-charcoal/70 mt-4 font-bold">
            Uncomplicate your vanity. One box, three steps, total cellular resolution.
          </p>
        </div>

        {/* Collection Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {PRODUCTS.map((kit) => {
            const isHovered = hoveredCard === kit.id;
            const isFav = favorites.includes(kit.id);

            // Styling colors based on the theme configurations
            const theme = kit.colorTheme;

            return (
              <motion.div
                key={kit.id}
                onMouseEnter={() => setHoveredCard(kit.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative border-4 border-raw-charcoal bg-raw-neutral flex flex-col justify-between transition-all duration-300 transform rounded-none cursor-pointer overflow-hidden ${
                  isHovered ? 'shadow-[12px_12px_0px_#121212] -translate-y-2' : 'shadow-[6px_6px_0px_#121212]'
                }`}
                style={{
                  borderColor: '#121212'
                }}
              >
                {/* Sale / Benefit Sticky Badge */}
                <div className="absolute top-4 left-4 z-20 flex flex-col items-start gap-1">
                  <span className={`px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wider border border-raw-charcoal shadow-sm ${theme.pillBg} rounded-none`}>
                    SAVE {Math.round(((kit.originalPrice! - kit.price) / kit.originalPrice!) * 100)}%
                  </span>
                  {kit.stars >= 4.9 && (
                    <span className="bg-white text-raw-charcoal px-2 py-0.5 border border-raw-charcoal font-mono text-[8px] font-bold uppercase rounded-none">
                      ★ BEST-SELLER
                    </span>
                  )}
                </div>

                {/* Love Button */}
                <button
                  onClick={(e) => toggleFavorite(kit.id, e)}
                  className={`absolute top-4 right-4 z-20 p-2 border-2 border-raw-charcoal rounded-none transition-all duration-150 ${
                    isFav ? 'bg-hot-magenta text-white shadow-sm' : 'bg-white text-raw-charcoal hover:bg-neutral-150'
                  }`}
                >
                  <Heart className={`w-4 h-4 stroke-[2.5] ${isFav ? 'fill-white' : ''}`} />
                </button>

                {/* Vertical Graphic Segment (Beautiful pure CSS cosmetics display) */}
                <div className={`h-[320px] relative overflow-hidden flex items-end justify-center border-b-4 border-raw-charcoal ${theme.primaryBg} py-6`}>
                  
                  {/* Styled isometric visual grids pattern inside back-grid */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                  {/* Pure CSS Packstack illustration */}
                  <div className="relative w-full h-[220px] flex items-end justify-center px-4 max-w-[280px]">
                    
                    {/* Visual Shadows on floor */}
                    <div className="absolute bottom-1 w-48 h-5 bg-black/15 blur-sm rounded-full transform -rotate-1" />

                    {/* Left: Box */}
                    <div className="absolute left-[15%] bottom-2 w-[100px] h-[190px] bg-white border-3 border-raw-charcoal shadow-md rounded-none flex flex-col justify-between p-2.5 z-10 transition-transform duration-300 group-hover:skew-y-1">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[8px] border border-raw-charcoal bg-[#121212] text-toxic-lime px-1 rounded-none scale-90">RAW</span>
                        <HelpCircle className="w-2.5 h-2.5 text-neutral-400" />
                      </div>
                      
                      <div className="my-auto text-left leading-none font-display font-extrabold text-[#121212] uppercase tracking-tighter text-xl scale-y-110">
                        {kit.name.split(' ')[0]}<br />O{idxToVowel(kit.id)}X
                      </div>

                      <div className="border-t border-dashed border-raw-charcoal/20 pt-1 text-[7px] font-mono uppercase font-black tracking-widest text-[#121212]/60">
                        Physio-lipids
                      </div>
                    </div>

                    {/* Right: Round Canister overlapping box */}
                    <div className={`absolute right-[12%] bottom-1 w-[85px] h-[160px] ${kit.id === 'calm-kit' ? 'bg-deep-violet text-white' : 'bg-raw-charcoal text-toxic-lime'} border-3 border-raw-charcoal shadow-lg rounded-t-3xl rounded-b-[15px] z-20 transition-transform duration-300 transform origin-bottom hover:scale-105`}>
                      <div className="w-10 h-4 bg-neutral-300 border-2 border-raw-charcoal rounded-t-md mx-auto transform -translate-y-2 shadow" />
                      
                      <div className="flex flex-col h-[calc(100%-14px)] justify-between items-center py-2 px-1">
                        <span className="font-mono text-[7px] bg-hot-magenta text-white px-1 font-bold rounded-none scale-80">ACTIVE</span>
                        <span className="font-display font-black text-xl tracking-tighter scale-y-110 select-none block text-center leading-none">
                          R<br />AW
                        </span>
                        <div className="text-center leading-[0.5] pb-1">
                          <span className="font-mono text-[6px] opacity-60 uppercase block">Liquid cure</span>
                          <span className="font-mono text-[7px] font-bold block mt-1 uppercase text-electric-cyan">30ml E</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating active bubbles on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <>
                          <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="absolute -top-4 left-6 bg-hot-magenta text-white font-mono text-[8px] font-black uppercase px-2 py-0.5 border border-raw-charcoal z-30 transform -rotate-6"
                          >
                            🛡️ {kit.actives[0]}
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ delay: 0.1 }}
                            className="absolute top-8 right-0 bg-toxic-lime text-raw-charcoal font-mono text-[8px] font-black uppercase px-2 py-0.5 border border-raw-charcoal z-30 transform rotate-12"
                          >
                            ⚡ {kit.actives[1]}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>

                  </div>

                </div>

                {/* Detail Segment */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  
                  <div>
                    {/* Star Rating & Volume */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1.5 font-mono text-xs font-bold text-raw-charcoal">
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          ))}
                        </div>
                        <span>({kit.reviews})</span>
                      </div>
                      <span className="font-mono text-[10px] font-black text-raw-charcoal/40 uppercase tracking-widest">{kit.volume}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-raw-charcoal leading-none">
                      {kit.name}
                    </h3>

                    {/* Benefit Line */}
                    <p className="font-sans text-xs font-semibold text-neutral-500 mt-1 mb-4 h-8 overflow-hidden">
                      {kit.subtitle}
                    </p>

                    {/* Split list of key targeted deliverables */}
                    <div className="space-y-1.5 border-t border-dashed border-raw-charcoal/20 pt-3 mb-4">
                      {kit.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-start space-x-2 text-[11.5px] font-sans text-raw-charcoal/80 font-medium">
                          <span className={`w-3.5 h-3.5 rounded-full ${theme.primaryBg} border border-raw-charcoal flex items-center justify-center shrink-0 mt-0.5 text-[8px] font-black`}>
                            ✓
                          </span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Grid */}
                  <div className="pt-4 border-t-2 border-raw-charcoal mt-auto">
                    <div className="flex items-baseline justify-between mb-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="font-mono text-2xl font-black text-raw-charcoal">
                          {kit.price}€
                        </span>
                        {kit.originalPrice && (
                          <span className="font-mono text-sm text-neutral-400 line-through">
                            {kit.originalPrice}€
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-[9px] font-bold text-hot-magenta bg-hot-magenta/15 px-2 py-0.5 tracking-wider uppercase border border-hot-magenta/20">
                        FREE INSURED SHIPPING
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedPreview(kit); }}
                        className="p-3 border-2 border-raw-charcoal bg-neutral-100 text-raw-charcoal font-space text-xs font-black uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-1.5 rounded-none"
                      >
                        <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>QUICK SPECS</span>
                      </button>

                      <button 
                        onClick={(e) => { e.stopPropagation(); onAddToCart(kit); }}
                        className={`p-3 border-2 border-raw-charcoal font-space text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center justify-center space-x-1.5 rounded-none hover:shadow-[3px_3px_0px_#121212] cursor-pointer ${theme.primaryBg} ${theme.accentText}`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>BUY KIT</span>
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Styled Grid SVG Pattern helper */}
      <style>{`
        .bg-grid-pattern {
          background-size: 15px 15px;
          background-image: 
            linear-gradient(to right, #000000 1px, transparent 1px),
            linear-gradient(to bottom, #000000 1px, transparent 1px);
        }
      `}</style>

      {/* Quick Specs Drawer / Overlay Dialog */}
      <AnimatePresence>
        {selectedPreview && (
          <div className="fixed inset-0 bg-raw-charcoal/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="w-full max-w-4xl bg-raw-neutral border-4 border-raw-charcoal p-6 md:p-8 raw-border-pixel-lg relative max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedPreview(null)}
                className="absolute top-4 right-4 p-2 border-2 border-raw-charcoal bg-white hover:bg-hot-magenta hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              <div className="inline-flex items-center space-x-2 bg-raw-charcoal text-white px-2.5 py-1 text-[10px] font-mono font-bold uppercase mb-4 rounded-none">
                <ShieldCheck className="w-3.5 h-3.5 text-toxic-lime" />
                <span>FORMAL CLINICAL BIO-DECK</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-2">
                
                {/* Visual side */}
                <div className={`border-4 border-raw-charcoal p-6 rounded-none ${selectedPreview.colorTheme.primaryBg} relative flex flex-col items-center justify-center min-h-[300px]`}>
                  <div className="absolute top-4 right-4 font-mono text-xs font-black bg-raw-charcoal text-white px-2 py-0.5">
                    {selectedPreview.volume}
                  </div>
                  <h3 className="font-display font-extrabold text-[#121212] text-6xl xl:text-7xl uppercase select-none tracking-tighter leading-none mb-6">
                    {selectedPreview.name.split(' ')[0]}
                  </h3>
                  <div className="space-y-2 w-full max-w-xs bg-white/40 border-2 border-raw-charcoal p-4 backdrop-blur-sm text-xs font-mono font-bold uppercase text-raw-charcoal leading-snug">
                    <p className="border-b border-raw-charcoal/10 pb-1.5"><span className="text-hot-magenta">TARGET:</span> {selectedPreview.subtitle}</p>
                    <p className="border-b border-raw-charcoal/10 py-1.5"><span className="text-hot-magenta">KEY ACTIVE:</span> {selectedPreview.actives.join(', ')}</p>
                    <p className="pt-1.5"><span className="text-hot-magenta">RESULT SPEED:</span> RECONSTRUCTS CELLS IN ~7 DAYS</p>
                  </div>
                </div>

                {/* Info side */}
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-display font-black text-3xl uppercase tracking-tight text-raw-charcoal leading-none">
                      {selectedPreview.name}
                    </h3>
                    <p className="font-sans text-sm font-bold text-hot-coral mt-1.5">{selectedPreview.subtitle}</p>

                    <div className="mt-6">
                      <h4 className="font-space text-xs font-black tracking-wider text-raw-charcoal/40 uppercase mb-2">What&apos;s inside the box:</h4>
                      <div className="space-y-1">
                        {selectedPreview.items.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-white px-3 py-2 border-2 border-raw-charcoal text-xs font-mono font-bold">
                            <span className="w-5 h-5 bg-raw-charcoal text-toxic-lime flex items-center justify-center font-black rounded text-[9px]">0{idx + 1}</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-space text-xs font-black tracking-wider text-raw-charcoal/40 uppercase mb-2">Clinically Formed Benefits:</h4>
                      <ul className="space-y-1.5 text-xs font-semibold text-raw-charcoal/80">
                        {selectedPreview.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-toxic-lime font-black shrink-0 mt-0.5">●</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t-2 border-dashed border-raw-charcoal/30 pt-4 mt-6 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] text-raw-charcoal/40 uppercase font-black">SUGGESTED RETAIL</p>
                      <div className="flex items-baseline space-x-2 mt-1">
                        <span className="font-mono text-3xl font-black text-raw-charcoal">{selectedPreview.price}€</span>
                        <span className="font-mono text-sm text-neutral-400 line-through">{selectedPreview.originalPrice}€</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedPreview(null)}
                        className="px-4 py-3.5 border-2 border-raw-charcoal font-space text-xs font-black uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                      >
                        CLOSE DESCRIPTION
                      </button>

                      <button 
                        onClick={() => {
                          onAddToCart(selectedPreview);
                          setSelectedPreview(null);
                        }}
                        className={`px-6 py-3.5 border-2 border-raw-charcoal font-space text-xs font-black uppercase tracking-wider transition-all hover:shadow-[3px_3px_0px_#121212] ${selectedPreview.colorTheme.primaryBg} ${selectedPreview.colorTheme.accentText}`}
                      >
                        ADD TO BAG
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

// Helpers for illustrative render calculations
function idxToVowel(id: string) {
  if (id === 'barrier-kit') return 'B';
  if (id === 'glow-kit') return 'G';
  return 'C';
}

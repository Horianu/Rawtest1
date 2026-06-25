import React, { useState } from 'react';
import { Search, User, ShoppingBag, X, Menu, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearchOpen: () => void;
  onNavigate: (sectionId: string) => void;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  onQuickAdd: (prod: Product) => void;
}

export default function Header({ 
  cartCount, 
  onCartClick, 
  onSearchOpen, 
  onNavigate,
  searchTerm,
  setSearchTerm,
  onQuickAdd
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { label: 'Why RAW', id: 'why-raw' },
    { label: 'Shop Kits', id: 'featured-routines' },
    { label: 'Routines', id: 'how-it-works' },
    { label: 'Inside', id: 'ingredient-band' },
    { label: 'The Stack', id: 'bundle-builder' },
  ];

  return (
    <>
      <div className="w-full bg-raw-charcoal text-white py-2 overflow-hidden select-none border-b border-raw-charcoal z-50">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] text-[10px] md:text-xs font-mono tracking-widest uppercase">
          <span className="mx-8 font-semibold text-toxic-lime">💥 SPECIAL OFFER: USE CODE &quot;RAW3&quot; FOR 20% OFF ALL KITS</span>
          <span className="mx-8 text-white">⚡ FREE SHIPPING OVER 49€</span>
          <span className="mx-8 text-electric-cyan">🔬 30-DAY RAW RESULTS GUARANTEE</span>
          <span className="mx-8 text-hot-magenta font-semibold">📢 ZERO DRA-MA SKINCARE</span>
          
          {/* Duplicate to ensure seamless looping */}
          <span className="mx-8 font-semibold text-toxic-lime">💥 SPECIAL OFFER: USE CODE &quot;RAW3&quot; FOR 20% OFF ALL KITS</span>
          <span className="mx-8 text-white">⚡ FREE SHIPPING OVER 49€</span>
          <span className="mx-8 text-electric-cyan">🔬 30-DAY RAW RESULTS GUARANTEE</span>
          <span className="mx-8 text-hot-magenta font-semibold">📢 ZERO DRA-MA SKINCARE</span>
        </div>
      </div>

      <header id="raw-header" className="sticky top-0 bg-raw-neutral/95 backdrop-blur-md z-40 border-b-2 border-raw-charcoal shadow-sm transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          
          {/* Left: Brand Logo Wordmark */}
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-3xl md:text-4xl font-serif font-black tracking-tighter italic scale-y-125 inline-block origin-left group-hover:scale-y-130 transition-transform select-none">
              RAW
            </span>
            <span className="font-mono text-[9px] font-bold bg-toxic-lime text-raw-charcoal px-1 py-0.5 border border-raw-charcoal rounded transform rotate-6 scale-90">
              TM
            </span>
          </div>

          {/* Center: Main Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-space text-sm font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="relative py-2 text-raw-charcoal/80 hover:text-raw-charcoal transition-colors duration-150 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-hot-magenta transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3 md:space-x-5">
            <button 
              onClick={() => { setSearchOpen(true); onSearchOpen(); }}
              className="p-2 border-2 border-raw-charcoal hover:bg-toxic-lime text-raw-charcoal rounded-none transition-colors duration-150 hover:shadow-[2px_2px_0px_#121212] cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button 
              className="hidden sm:block p-2 border-2 border-raw-charcoal hover:bg-electric-cyan text-raw-charcoal rounded-none transition-colors duration-150 hover:shadow-[2px_2px_0px_#121212] cursor-pointer"
              aria-label="Account"
            >
              <User className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button 
              onClick={onCartClick}
              className="p-2 border-2 border-raw-charcoal bg-[#121212] hover:bg-[#252525] text-toxic-lime rounded-none flex items-center space-x-2 transition-all duration-150 hover:shadow-[2px_2px_0px_#ff4757] relative cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
              <span className="font-mono text-xs font-black bg-hot-magenta text-white px-1.5 py-0.5 rounded-full absolute -top-2 -right-2 border-2 border-raw-charcoal shadow-sm">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 border-2 border-raw-charcoal hover:bg-neutral-200 rounded-none transition-colors cursor-pointer"
              aria-label="Mobile Menu"
            >
              <Menu className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Styled Marquee CSS (standard tailwind animations don't include marquee by default) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Slide-out Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-raw-charcoal/80 backdrop-blur-sm z-50 lg:hidden flex justify-end"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="w-full max-w-[320px] bg-raw-neutral h-full border-l-4 border-raw-charcoal flex flex-col p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-raw-charcoal/20">
                <span className="font-serif font-black text-3xl tracking-tighter italic scale-y-125 inline-block origin-left uppercase self-center">RAW</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 border-2 border-raw-charcoal hover:bg-hot-magenta hover:text-white rounded-none transition-colors"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="flex flex-col space-y-4 font-space text-lg font-bold uppercase tracking-wider">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      // wait a little bit for panel to slide out
                      setTimeout(() => onNavigate(link.id), 300);
                    }}
                    className="w-full text-left py-3 border-b-2 border-raw-charcoal/10 hover:border-raw-charcoal hover:pl-2 transition-all duration-150 flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-5 h-5 text-raw-charcoal opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>

              <div className="mt-auto space-y-4 pt-6 border-t border-raw-charcoal/20">
                <div className="flex items-center justify-around">
                  <span className="font-mono text-xs font-semibold text-raw-charcoal/60">© RAW SKINCARE 2026</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-out / Modal Search Panel */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-raw-charcoal/75 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-2xl bg-raw-neutral border-4 border-raw-charcoal p-6 md:p-8 raw-border-pixel-lg relative"
            >
              <button 
                onClick={() => setSearchOpen(false)}
                className="absolute top-4 right-4 p-2 border-2 border-raw-charcoal hover:bg-hot-magenta hover:text-white transition-colors"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              <div className="mb-4">
                <span className="font-mono text-[10px] bg-toxic-lime font-black px-2 py-1 uppercase rounded border border-raw-charcoal">REALIST SKINCRAFT INSTA-SEARCH</span>
                <h3 className="font-display font-extrabold text-3xl tracking-tight uppercase mt-3 mb-1">SEARCH RAW STOCK</h3>
                <p className="font-mono text-xs text-raw-charcoal/60">Find kits, singular actives, ingredient libraries, or routines.</p>
              </div>

              <div className="relative mt-6">
                <input 
                  type="text"
                  placeholder="Type active ingredients (Ceramides, Centella...) or kits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border-4 border-raw-charcoal p-4 pr-12 text-lg font-bold placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-electric-cyan/30"
                  autoFocus
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-raw-charcoal w-6 h-6 stroke-[2.5]" />
              </div>

              <div className="mt-6">
                <h4 className="font-space text-xs font-black tracking-widest text-raw-charcoal/40 uppercase mb-3">Popular Fast-Tracks</h4>
                <div className="flex flex-wrap gap-2">
                  {['Barrier', 'Glow', 'Calm', 'Ceramides', 'Niacinamide', 'Centella'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1.5 font-mono text-xs font-bold border-2 border-raw-charcoal bg-white hover:bg-toxic-lime hover:skew-y-1 transition-all rounded-none"
                    >
                      #{tag.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Minimal Results Show */}
              {searchTerm && (
                <div className="mt-6 pt-4 border-t-2 border-dashed border-raw-charcoal/20">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-500 mb-2">
                    <span>RESULTS MATCHING &quot;{searchTerm.toUpperCase()}&quot;:</span>
                    <button onClick={() => setSearchTerm("")} className="text-hot-magenta hover:underline">Clear</button>
                  </div>
                  <div className="space-y-2 max-h-[180px] overflow-y-auto">
                    {/* Show simple results */}
                    {['barrier-kit', 'glow-kit', 'calm-kit']
                      .filter(k => k.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm.toLowerCase().includes('kit'))
                      .map(kitId => {
                        const kit = kitId === 'barrier-kit' ? { name: 'BARRIER KIT', price: 52, active: 'Ceramides (3%)', col: 'bg-toxic-lime' } : 
                                    kitId === 'glow-kit' ? { name: 'GLOW KIT', price: 58, active: 'Niacinamide (10%)', col: 'bg-electric-cyan' } :
                                    { name: 'CALM KIT', price: 49, active: 'Centella (50%)', col: 'bg-neon-orange' };

                        return (
                          <div key={kitId} className="flex items-center justify-between p-3 border-2 border-raw-charcoal bg-white">
                            <div className="flex items-center space-x-3">
                              <span className={`w-4 h-4 rounded-full ${kit.col} border border-raw-charcoal`} />
                              <div>
                                <h5 className="font-display font-bold text-sm tracking-tight">{kit.name}</h5>
                                <p className="font-mono text-[10px] text-raw-charcoal/60">{kit.active}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="font-mono text-sm font-extrabold">{kit.price}€</span>
                              <button 
                                onClick={() => {
                                  // Quick add!
                                  const prod = kitId === 'barrier-kit' ? PRODUCTS[0] : kitId === 'glow-kit' ? PRODUCTS[1] : PRODUCTS[2];
                                  onQuickAdd(prod);
                                  setSearchOpen(false);
                                }}
                                className="px-2 py-1 bg-raw-charcoal text-toxic-lime font-mono text-[10px] font-black hover:bg-neutral-800 transition`colors cursor-pointer"
                              >
                                BUY
                              </button>
                            </div>
                          </div>
                        );
                      })
                    }
                    {['barrier-kit', 'glow-kit', 'calm-kit'].filter(k => k.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm.toLowerCase().includes('kit')).length === 0 && (
                      <p className="font-mono text-xs text-neutral-400 py-2">No heavy kits match. Try exploring single elements or scrolling below!</p>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Make the products array accessible for simple local mapping inside search
import { PRODUCTS } from '../data';

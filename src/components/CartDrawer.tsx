import React, { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShieldCheck, Lock, ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemove: (productId: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove
}: CartDrawerProps) {
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [cartListRef] = useAutoAnimate();

  // Math
  const subtotal = items.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
  const freeShippingThreshold = 49;
  const progressPercent = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const missingForFree = freeShippingThreshold - subtotal;

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setCheckoutComplete(true);
    }, 2000);
  };

  const handleResetCheckout = () => {
    setCheckoutComplete(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-raw-charcoal/80 backdrop-blur-xs z-50 cursor-pointer"
          />

          {/* Sliding Side Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-[440px] bg-raw-neutral border-l-4 border-raw-charcoal z-50 flex flex-col justify-between shadow-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b-4 border-raw-charcoal bg-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
                <h3 className="font-display font-black text-xl md:text-2xl uppercase tracking-tighter">
                  RAW DECK BAG ({items.reduce((sum, i) => sum + i.quantity, 0)})
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 border-2 border-raw-charcoal hover:bg-hot-magenta hover:text-white transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Core Body Container */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              
              {checkoutComplete ? (
                // Checkout Success Mode
                <motion.div 
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-6 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-toxic-lime border-3 border-raw-charcoal flex items-center justify-center animate-bounce shadow">
                    <Check className="w-8 h-8 text-raw-charcoal stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-mono text-xs bg-raw-charcoal text-toxic-lime px-2 py-0.5 tracking-widest font-bold">SHOPIFY ORDER CONNECTED</span>
                    <h4 className="font-display font-black text-2xl uppercase tracking-tighter mt-3">TRANSACTION ENCRYPTED</h4>
                    <p className="font-sans text-xs font-semibold text-neutral-500 mt-2 max-w-xs leading-relaxed">
                      Custom bundle routes set correctly. Your high-impact elements are being boxed in Copenhagen right now.
                    </p>
                  </div>
                  
                  <button
                    onClick={handleResetCheckout}
                    className="w-full py-3 border-2 border-raw-charcoal bg-white text-raw-charcoal font-space text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
                  >
                    CONTINUE STUDYING
                  </button>
                </motion.div>
              ) : items.length === 0 ? (
                // Empty state
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-raw-charcoal/30 flex items-center justify-center text-neutral-400">
                    Ø
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg uppercase text-raw-charcoal">Your bag is raw and dry</h4>
                    <p className="font-sans text-xs font-semibold text-neutral-400 mt-1 max-w-xs">
                      Reset your 10-step routine. Browse routines, custom stack configs, and add barrier protection items.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 border-2 border-raw-charcoal bg-toxic-lime text-raw-charcoal font-space text-xs font-black uppercase tracking-wider hover:shadow-[3px_3px_0px_#121212] transition-colors"
                  >
                    RETURN TO VAULT
                  </button>
                </div>
              ) : (
                // Live product item lists
                <>
                  {/* Dynamic Free Shipping bar */}
                  <div className="bg-white border-3 border-raw-charcoal p-4 raw-border-pixel-sm">
                    <div className="flex items-center justify-between text-xs font-mono font-black uppercase mb-2">
                      <span>FREE WORLDWIDE SHIPPING TARGET</span>
                      <span className="text-hot-magenta">
                        {subtotal >= freeShippingThreshold ? 'ACHIEVED! 📦' : `${missingForFree}€ AWAY`}
                      </span>
                    </div>

                    <div className="h-3 bg-raw-neutral border-2 border-raw-charcoal w-full rounded-none overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 0.5 }}
                        className="bg-toxic-lime h-full"
                      />
                    </div>
                    
                    <p className="font-mono text-[9px] text-[#121212]/50 mt-2 uppercase">
                      {subtotal >= freeShippingThreshold 
                        ? '🎉 Secure tracked shipping is fully covered by RAW Lab!' 
                        : `Add €${missingForFree} more to qualify for complimentary priority shipping.`}
                    </p>
                  </div>

                  {/* Products Map Group */}
                  <div ref={cartListRef} className="space-y-3">
                    {items.map((item, idx) => {
                      const kit = item.product;
                      const isCustom = kit.id.includes('custom-stack');

                      return (
                        <div 
                          key={kit.id} 
                          className="border-3 border-raw-charcoal bg-white p-4 flex gap-4 rounded-none relative overflow-hidden"
                        >
                          {/* Left visual representation */}
                          <div className={`w-16 h-16 shrink-0 border-2 border-raw-charcoal bg-neutral-100 flex items-center justify-center rounded-none shadow-sm ${kit.colorTheme?.primaryBg || 'bg-toxic-lime'}`}>
                            <span className="font-display font-black text-raw-charcoal text-lg select-none leading-none">
                              {isCustom ? 'STK' : kit.name.substring(0, 3)}
                            </span>
                          </div>

                          {/* Detail details */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start gap-2">
                                <h4 className="font-display font-extrabold text-sm uppercase text-raw-charcoal leading-tight">
                                  {kit.name}
                                </h4>
                                <button
                                  onClick={() => onRemove(kit.id)}
                                  className="text-neutral-400 hover:text-hot-magenta p-1 transition-colors"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="w-3.5 h-3.5 stroke-[2]" />
                                </button>
                              </div>

                              <p className="font-sans text-[10px] text-neutral-400 font-bold block mt-0.5 leading-tight">
                                {kit.subtitle}
                              </p>

                              {isCustom && (
                                <div className="mt-1.5 flex flex-wrap gap-1 font-mono text-[8px] font-bold">
                                  {kit.actives.map((act, aIdx) => (
                                    <span key={aIdx} className="bg-toxic-lime text-raw-charcoal px-1 py-0.5 border border-raw-charcoal">
                                      {act.split(' ')[0]}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            <div className="flex justify-between items-center mt-3 pt-2 border-t border-dashed border-raw-charcoal/10">
                              {/* Quantity selectors */}
                              <div className="flex items-center border border-raw-charcoal font-mono bg-neutral-50 px-1 py-0.5">
                                <button
                                  onClick={() => onUpdateQuantity(kit.id, item.quantity - 1)}
                                  className="p-1 hover:bg-neutral-200 transition-colors"
                                >
                                  <Minus className="w-2.5 h-2.5" />
                                </button>
                                <span className="px-3 text-xs font-black">{item.quantity}</span>
                                <button
                                  onClick={() => onUpdateQuantity(kit.id, item.quantity + 1)}
                                  className="p-1 hover:bg-neutral-200 transition-colors"
                                >
                                  <Plus className="w-2.5 h-2.5" />
                                </button>
                              </div>

                              {/* Price */}
                              <span className="font-mono text-sm font-black text-raw-charcoal">
                                {kit.price * item.quantity}€
                              </span>
                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

            </div>

            {/* Footer Summary (if not complete) */}
            {!checkoutComplete && items.length > 0 && (
              <div className="p-5 border-t-4 border-raw-charcoal bg-white space-y-4">
                
                <div className="space-y-2 text-xs font-mono font-bold text-raw-charcoal/60">
                  <div className="flex justify-between">
                    <span>SUGGESTED DECK TOTAL:</span>
                    <span className="text-raw-charcoal font-black text-sm">{subtotal}€</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>CLINICAL PACKING FEE:</span>
                    <span className="text-toxic-lime bg-raw-charcoal px-1 rounded-none font-bold">0.00€ (FREE)</span>
                  </div>

                  <div className="flex justify-between">
                    <span>COMPLIMENTARY SHIPPING:</span>
                    <span className="text-raw-charcoal">
                      {subtotal >= freeShippingThreshold ? '0.00€ (FREE)' : '4.90€'}
                    </span>
                  </div>
                </div>

                <div className="border-t-2 border-dashed border-raw-charcoal/20 pt-3 flex justify-between items-baseline">
                  <span className="font-display font-black text-base uppercase text-raw-charcoal">TOTAL ESTIMATE</span>
                  <span className="font-mono text-3xl font-black text-raw-charcoal">
                    {subtotal >= freeShippingThreshold ? subtotal : subtotal + 4.9}€
                  </span>
                </div>

                {/* Secure clinical guarantee sign */}
                <div className="flex items-center justify-center space-x-1.5 bg-neutral-50 border border-raw-charcoal/15 py-1.5 font-mono text-[8.5px] text-raw-charcoal/50 leading-none">
                  <ShieldCheck className="w-3.5 h-3.5 text-toxic-lime" />
                  <span>30-DAY LAB TEST WARRANTY COMPLIANCE ENCRYPTED</span>
                </div>

                {/* Main checkout handle button */}
                <button
                  onClick={handleCheckout}
                  disabled={checkingOut}
                  className="w-full py-4 border-2 border-raw-charcoal bg-[#121212] hover:bg-neutral-800 hover:shadow-[3px_3px_0px_#ff4757] text-toxic-lime hover:border-[#ff4757] font-space text-sm font-black uppercase tracking-wider transition-all rounded-none flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4 stroke-[2.5]" />
                  <span>{checkingOut ? 'CONNECTING SHOPIFY STRIPE SECURE...' : 'PROCEED TO CLINICAL CE'}</span>
                </button>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

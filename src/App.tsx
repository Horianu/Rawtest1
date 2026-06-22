/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldCheck, Flame, ChevronRight, X, Info } from 'lucide-react';
import { Product, CartItem } from './types';

// Importing Custom RAW Components
import Header from './components/Header';
import Hero from './components/Hero';
import ThreePillars from './components/ThreePillars';
import FeaturedRoutines from './components/FeaturedRoutines';
import HowItWorks from './components/HowItWorks';
import IngredientBand from './components/IngredientBand';
import UgcCarousel from './components/UgcCarousel';
import BundleBuilder from './components/BundleBuilder';
import BlogTeaser from './components/BlogTeaser';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [cookieConsentHidden, setCookieConsentHidden] = useState(false);

  // Smooth scroll navigate helper
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 80; // approximate height of sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Add standard kit to cart
  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setToast(`⚡ ADDED ${product.name} TO BAG!`);
    setCartOpen(true);
    setTimeout(() => setToast(null), 3000);
  };

  // Add custom bundle stack to cart
  const handleAddCustomStack = (items: any[], totalPrice: number) => {
    const titles = items.map(i => i.name.split(' ')[0]);
    const bundleName = `CUSTOM STACK: ${titles.join(' + ')}`;

    // Synthetic custom stack product structure mapping
    const customStackProduct: Product = {
      id: `custom-stack-${Date.now()}`,
      name: "CUSTOM ACTIVE STACK",
      subtitle: `${titles.join(' + ')} Layering`,
      price: totalPrice,
      stars: 5.0,
      reviews: 1,
      volume: `${items.length} Custom Products`,
      benefits: [
        "Specifically matched to active barrier variables",
        "Buffered cellular identical elements"
      ],
      actives: items.map(i => i.active),
      items: items.map(i => i.name),
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

    setCart(prev => [...prev, { product: customStackProduct, quantity: 1 }]);
    setToast(`🎉 STACK ADDED TO BAG! (15% Savings applied!)`);
    setCartOpen(true);
    setTimeout(() => setToast(null), 4000);
  };

  // Update item quantity inside slide-out bag
  const handleUpdateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.product.id === productId 
        ? { ...item, quantity: qty } 
        : item
    ));
  };

  // Remove individual item
  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  // Search trigger quick add callback bridge
  const handleSearchQuickAdd = (product: Product) => {
    handleAddToCart(product);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-toxic-lime selection:text-raw-charcoal bg-raw-neutral text-raw-charcoal relative">
      
      {/* Header and top ticker */}
      <Header 
        cartCount={cart.reduce((acc, curr) => acc + curr.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
        onSearchOpen={() => {}}
        onNavigate={handleScrollToSection}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onQuickAdd={handleSearchQuickAdd}
      />

      <main className="flex-1 w-full max-w-[1440px] mx-auto border-l-4 border-r-4 border-raw-charcoal bg-[#fff]">
        
        {/* Hero split layout */}
        <Hero 
          onShopClick={() => handleScrollToSection('featured-routines')}
          onHowItWorksClick={() => handleScrollToSection('how-it-works')}
        />

        {/* 3 Pillars info strip */}
        <ThreePillars />

        {/* Featured Kits Collection */}
        <FeaturedRoutines 
          onAddToCart={handleAddToCart}
        />

        {/* How it works 1-2-3 */}
        <HowItWorks />

        {/* Ingredients Color Block horizontal band */}
        <IngredientBand />

        {/* Direct Stack custom Bundle builders teaser */}
        <BundleBuilder 
          onAddCustomStack={handleAddCustomStack}
        />

        {/* Social Proof comments and review close up carousels */}
        <UgcCarousel />

        {/* Informative micro lecture teaser articles */}
        <BlogTeaser />

      </main>

      {/* Footer categorized details & Newsletter forms */}
      <Footer />

      {/* Global Shoppable Drawer Bag */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />

      {/* Floating Global Micro Toast notification alerts */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 bg-[#121212] border-3 border-toxic-lime text-white p-4 font-mono text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_#ff007f] flex items-center space-x-3 pointer-events-none"
          >
            <div className="w-2 h-2 rounded-full bg-toxic-lime animate-ping" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle floating shopify setup helper banner overlay card */}
      <AnimatePresence>
        {!cookieConsentHidden && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-40 max-w-sm bg-white border-4 border-raw-charcoal p-4 shadow-[6px_6px_0px_#121212] flex gap-3 text-raw-charcoal"
          >
            <Info className="w-5 h-5 text-hot-magenta shrink-0" />
            <div>
              <p className="font-space text-xs font-black uppercase tracking-tight">SHOPIFY ONLINE STORE 2.0 STYLE DECK</p>
              <p className="font-sans text-[10.5px] font-semibold text-neutral-500 mt-1 leading-normal">
                This mockup features a high-fidelity preset of customizable schemas, section blocks, interactive multi-discount stackers, and slide bags. Build target completed.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-mono text-[9px] bg-toxic-lime px-1.5 py-0.5 border border-raw-charcoal rounded text-raw-charcoal font-black">THEME PREVIEW READY</span>
                <button 
                  onClick={() => setCookieConsentHidden(true)}
                  className="font-mono text-[9px] font-black underline text-raw-charcoal hover:text-hot-magenta"
                >
                  DISMISS INFO
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

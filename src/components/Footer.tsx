import React, { useState } from 'react';
import { ArrowUpRight, Flame, ShieldAlert, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const footerLinks = {
    shop: [
      { name: 'Routine Kits', href: '#featured-routines' },
      { name: 'Singular Elements', href: '#bundle-builder' },
      { name: 'Custom Stacks', href: '#bundle-builder' },
      { name: 'RAW Gift Cards', href: '#' },
    ],
    help: [
      { name: 'Interactive FAQ', href: '#' },
      { name: 'Global Shipping Info', href: '#' },
      { name: '30-Day Dermal Results Return', href: '#' },
      { name: 'Direct Lab Support', href: '#' },
    ],
    about: [
      { name: 'The Barrier Story', href: '#' },
      { name: 'Stabilized Raw Actives', href: '#ingredient-band' },
      { name: 'Eco-Cylinder Recycling', href: '#' },
      { name: 'Physiological Science', href: '#' },
    ]
  };

  return (
    <footer id="raw-footer" className="bg-[#121212] text-white border-t-4 border-raw-charcoal pt-16 pb-8 relative overflow-hidden">
      
      {/* Absolute decorative backglows */}
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 rounded-full bg-toxic-lime/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-96 h-96 rounded-full bg-hot-magenta/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          
          {/* Left Large Column (Brand identity and socials) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-1 cursor-pointer select-none">
                <span className="font-display font-extrabold text-[#fff] text-4xl tracking-tighter uppercase inline-block scale-y-115">
                  RAW
                </span>
                <span className="font-mono text-[9px] font-black bg-toxic-lime text-raw-charcoal px-1 py-0.5 border border-raw-charcoal rounded transform rotate-6 scale-90">
                  TM
                </span>
              </div>

              <p className="font-sans text-xs lg:text-sm font-semibold text-white/60 leading-relaxed mt-6 max-w-sm">
                RAW is an independent skin-formulation laboratory. We construct high-impact 3-step routines that reset the barrier matrix and eliminate over-treatment. No synthetic scents, no drama.
              </p>
            </div>

            {/* Social Circle Buttons */}
            <div className="mt-8">
              <span className="font-mono text-[9px] text-white/40 block font-black uppercase tracking-widest mb-3">RAW COMMUNICATION MATRIX</span>
              <div className="flex space-x-3">
                {[
                  { name: 'IG', color: 'hover:bg-hot-magenta hover:text-white', iconText: 'IG' },
                  { name: 'TK', color: 'hover:bg-toxic-lime hover:text-raw-charcoal', iconText: 'TK' },
                  { name: 'YT', color: 'hover:bg-electric-cyan hover:text-raw-charcoal', iconText: 'YT' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center font-mono text-xs font-black transition-all ${social.color} select-none`}
                  >
                    {social.iconText}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Categorized Links and Newsletter Column */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Shop Links */}
            <div>
              <h4 className="font-display font-extrabold text-xs text-toxic-lime uppercase tracking-widest border-b border-white/10 pb-2.5 mb-4">
                SHOP RAW
              </h4>
              <ul className="space-y-3 font-space text-[12.5px] font-bold">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors flex items-center space-x-1 group">
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-toxic-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="font-display font-extrabold text-xs text-electric-cyan uppercase tracking-widest border-b border-white/10 pb-2.5 mb-4">
                HELP CENTER
              </h4>
              <ul className="space-y-3 font-space text-[12.5px] font-bold">
                {footerLinks.help.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors flex items-center space-x-1 group">
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h4 className="font-display font-extrabold text-xs text-hot-magenta uppercase tracking-widest border-b border-white/10 pb-2.5 mb-4">
                LAB STORY
              </h4>
              <ul className="space-y-3 font-space text-[12.5px] font-bold">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors flex items-center space-x-1 group">
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-hot-magenta opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest border-b border-white/10 pb-2.5 mb-4">
                RAW INSIDER
              </h4>
              <p className="font-sans text-xs font-semibold text-white/50 leading-relaxed mb-4">
                Get RAW early drops &amp; skin hacks. Drops twice monthly. No fluff.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-2">
                <input 
                  type="email"
                  placeholder="HEX-EMAIL-STAMP..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 p-3 text-xs font-bold text-white uppercase placeholder-white/30 focus:outline-none focus:border-toxic-lime rounded-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-toxic-lime text-raw-charcoal font-space text-xs font-black uppercase tracking-wider hover:bg-white hover:text-raw-charcoal transition-all rounded-none cursor-pointer"
                >
                  {subscribed ? '✓ JOINED MATRIX' : 'GET DROPS'}
                </button>
              </form>

              {subscribed && (
                <div className="mt-2 flex items-center space-x-1 font-mono text-[9px] text-toxic-lime font-black">
                  <Check className="w-3.5 h-3.5" />
                  <span>MATRIX ENLISTMENT CONFIRMED</span>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Lower Metadata copyright line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="font-mono text-[10px] text-white/40">© RAW SKINCARE INC, COPENHAGEN, 2026</span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-toxic-lime" />
            <span className="hidden md:inline-block font-mono text-[9px] text-white/35">ONLINE STORE 2.0 INTEGRATION STANDARD</span>
          </div>

          <div className="flex space-x-6 font-mono text-[9px] text-white/40 font-bold uppercase select-none">
            <a href="#" className="hover:text-toxic-lime transition-colors">Safety sheet</a>
            <a href="#" className="hover:text-toxic-lime transition-colors">Privacy codes</a>
            <a href="#" className="hover:text-toxic-lime transition-colors">Vessel Recycler</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

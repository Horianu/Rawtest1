import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Star, ArrowLeft, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';
import { UGC_REVIEWS } from '../data';

export default function UgcCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      // Delay check scroll positions to match scroll completion
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section id="ugc-carousel" className="bg-white border-b-4 border-raw-charcoal py-16 md:py-24 relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-[15%] right-[5%] w-72 h-72 bg-hot-magenta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs font-black bg-raw-charcoal text-toxic-lime px-3 py-1 uppercase rounded border border-raw-charcoal inline-block rotate-[1deg]">
              UNFILTERED DERMAL DECK
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight mt-4">
              RAW RESULTS IN THE WILD
            </h2>
            <p className="font-sans text-sm font-semibold text-neutral-400 mt-1 max-w-xl">
              Zero airbrushing. Zero aesthetic filter layers. Just high-impact physiological repair documented by real skin owners.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex space-x-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 border-2 border-raw-charcoal rounded-none transition-colors ${
                canScrollLeft 
                  ? 'bg-white text-raw-charcoal hover:bg-toxic-lime hover:shadow-[2px_2px_0px_#121212] cursor-pointer' 
                  : 'bg-neutral-100 text-neutral-350 border-neutral-300 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 border-2 border-raw-charcoal rounded-none transition-colors ${
                canScrollRight 
                  ? 'bg-white text-raw-charcoal hover:bg-toxic-lime hover:shadow-[2px_2px_0px_#121212] cursor-pointer' 
                  : 'bg-neutral-100 text-neutral-350 border-neutral-300 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Outer Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto space-x-6 pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {UGC_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="w-[290px] md:w-[380px] shrink-0 border-4 border-raw-charcoal bg-raw-neutral hover:border-toxic-lime hover:shadow-[8px_8px_0px_#121212] transition-all duration-300 rounded-none cursor-pointer flex flex-col justify-between snap-start group"
            >
              <div>
                {/* UGC Image block */}
                <div className="relative aspect-video border-b-4 border-raw-charcoal overflow-hidden bg-neutral-150">
                  <img 
                    src={review.authorPicUrl} 
                    alt={review.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-95 opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Before / After label tags */}
                  <div className="absolute top-3 left-3 flex gap-1 font-mono text-[8px] font-black uppercase text-raw-charcoal z-15 select-none">
                    <span className="bg-white border border-raw-charcoal px-2 py-0.5">BEFORE: COMPROMISED</span>
                    <span className="bg-toxic-lime border border-raw-charcoal px-2 py-0.5">AFTER: RAW REBUILT</span>
                  </div>

                  {/* Corner check sign */}
                  <div className="absolute top-3 right-3 bg-raw-charcoal border border-white text-toxic-lime p-1 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-raw-charcoal stroke-[2.5]" />
                  </div>

                  {/* Product Referenced Tag Sticker */}
                  <div className="absolute bottom-3 left-3 bg-[#121212] text-[#fff] border border-neutral-500 font-mono text-[8.5px] font-bold px-2 py-0.5 uppercase tracking-wide">
                    📦 IN-USE: {review.productTag}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  
                  {/* Rating Section */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    
                    <span className="font-mono text-[9px] font-black bg-raw-charcoal text-white px-2 py-0.5 tracking-wider uppercase">
                      VERIFIED SKIN OWNER
                    </span>
                  </div>

                  {/* Quote text */}
                  <div className="relative">
                    <Quote className="absolute -top-3 -left-2 text-hot-magenta/15 w-8 h-8 pointer-events-none" />
                    <p className="font-sans text-xs lg:text-sm font-semibold text-raw-charcoal/80 italic leading-relaxed relative z-10 pl-2">
                      &quot;{review.quote}&quot;
                    </p>
                  </div>

                </div>
              </div>

              {/* Author handle */}
              <div className="px-6 py-4 bg-white border-t-2 border-dashed border-raw-charcoal/30 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-sm text-raw-charcoal uppercase leading-none">
                    {review.name}
                  </h4>
                  <span className="font-mono text-[10px] text-raw-charcoal/50 font-bold block mt-1">
                    {review.handle}
                  </span>
                </div>

                <span className="font-mono text-[9px] bg-electric-cyan text-raw-charcoal font-black border border-raw-charcoal px-2 py-1 transform -rotate-2 select-none">
                  {review.skinType.toUpperCase()}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

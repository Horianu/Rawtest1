import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { ARTICLES } from '../data';

export default function BlogTeaser() {
  return (
    <section id="blog-teaser" className="bg-[#fff] border-b-4 border-raw-charcoal py-16 md:py-24 relative overflow-hidden">
      
      {/* Decorative vertical packaging outline stripes */}
      <div className="absolute left-[3%] inset-y-0 w-1 bg-raw-charcoal/5 hidden xl:block" />
      <div className="absolute left-[4%] inset-y-0 w-0.5 bg-raw-charcoal/5 hidden xl:block" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs font-black bg-raw-charcoal text-white px-3 py-1 uppercase rounded border border-raw-charcoal inline-block rotate-[-1deg] select-none">
              RAW INTEL LABS
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight mt-4">
              LEARN TO STOP OVER-TREATING
            </h2>
            <p className="font-sans text-sm font-semibold text-neutral-400 mt-1 max-w-lg">
              Knowledge is the best active ingredient. Discover why high percentage layer combos cause chemical barriers to snap.
            </p>
          </div>

          <button className="px-5 py-3 border-2 border-raw-charcoal bg-white font-space text-xs font-black uppercase tracking-wider hover:bg-toxic-lime hover:shadow-[3px_3px_0px_#121212] transition-colors flex items-center space-x-1.5 rounded-none self-start md:self-auto cursor-pointer">
            <BookOpen className="w-4 h-4 stroke-[2.5]" />
            <span>ACCESS LIBRARY (140+)</span>
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-raw-neutral border-4 border-raw-charcoal flex flex-col justify-between transition-all duration-300 rounded-none cursor-pointer overflow-hidden shadow-[6px_6px_0px_#121212] hover:shadow-[10px_10px_0px_#121212] group"
            >
              
              {/* Graphic Title Header Block using RAW Color Block language */}
              <div className={`aspect-video p-6 border-b-4 border-raw-charcoal flex flex-col justify-between relative overflow-hidden ${article.colorClass}`}>
                
                {/* Diagonal strip background inside card heads for active packaging vibe */}
                <div className="absolute inset-0 bg-[linear-gradient(-45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] bg-[size:15px_15px] pointer-events-none" />

                <div className="flex items-center justify-between relative z-10 select-none">
                  <span className="font-mono text-[9px] font-black bg-raw-charcoal text-white px-2 py-0.5 border border-raw-charcoal tracking-wide">
                    {article.tag}
                  </span>
                  
                  <div className="flex items-center space-x-1.5 font-mono text-[9px] font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Big decorative packaging scale-y word */}
                <span className="absolute bottom-[10%] left-[5%] font-display text-[90px] font-black text-black/5 leading-none select-none tracking-widest leading-none">
                  RAW
                </span>

                <h3 className="font-display font-black text-xl lg:text-2xl uppercase tracking-tight leading-snug text-current mt-8 relative z-10 group-hover:scale-[1.01] transition-transform">
                  {article.title}
                </h3>

              </div>

              {/* Card Footer detail */}
              <div className="p-6 bg-white flex flex-col justify-between h-full flex-1">
                <p className="font-sans text-xs font-semibold text-neutral-500 leading-relaxed mb-6">
                  Over-stripping. Excess chemical peel combos. How standard cosmetic marketing pushes products that counteract each other, and how RAW formula standards restore alignment.
                </p>

                <div className="border-t border-dashed border-raw-charcoal/20 pt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 font-mono text-[10px] text-raw-charcoal/40 font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>

                  <span className="font-space text-xs font-black uppercase text-raw-charcoal group-hover:text-hot-magenta transition-colors flex items-center space-x-1">
                    <span>READ BRIEF</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

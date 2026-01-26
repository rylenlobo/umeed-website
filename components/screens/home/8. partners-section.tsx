"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Marquee, MarqueeContent, MarqueeItem, MarqueeFade } from "@/components/ui/marquee";
import { motion } from "motion/react";

// Helper to generate logo objects
const generatePartners = (start: number, end: number) => {
  const partners = [];
  for (let i = start; i <= end; i++) {
    partners.push({
      id: i,
      name: `Partner ${i}`,
      image: `/assets/logos/${i}.webp`
    });
  }
  return partners;
};

// Partner Logos from Design Context
const LOGOS_ROW_1 = generatePartners(1, 7);
const LOGOS_ROW_2 = generatePartners(8, 15);
const LOGOS_ROW_3 = generatePartners(16, 21);

export default function PartnersSection() {
  return (
    <section className="w-full py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16 lg:mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-6xl mx-auto flex flex-col items-center gap-6"
        >
          <div className="flex flex-col gap-4">
             <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground font-semibold">
               Our Partners
             </p>
             <h2 className="font-serif text-4xl  text-pretty md:text-5xl lg:text-6xl text-[#101828] font-regular">
               Our Partners & Collaborators
             </h2>
          </div>
          
          <p className="font-sans text-lg lg:text-xl text-pretty text-[#4a5565] leading-relaxed max-w-4xl">
            We collaborate with corporates, non profits, think tanks, philanthropies, changemakers, 
            development professionals, community leaders, artists, and dreamers. Anyone with the 
            heart and courage to uplift women joins our tribe!
          </p>
        </motion.div>
      </div>

          <motion.div
              initial={{ opacity: 0,  scale:0.95}}
              whileInView={{ opacity: 1, scale:1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" , delay:0.2 }}
              className="relative flex flex-col gap-12 lg:gap-16">
        {/* Row 1 - Left */}
        <Marquee >
          <MarqueeFade side="left" />
          <MarqueeContent loop={0} speed={40}>
            {LOGOS_ROW_1.map((partner, i) => (
              <MarqueeItem key={`r1-${i}`} className="mx-8 lg:mx-12">
                 <img 
                   src={partner.image} 
                   alt={partner.name}
                   className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply" 
                 />
              </MarqueeItem>
            ))}
             {LOGOS_ROW_1.map((partner, i) => (
              <MarqueeItem key={`r1-dup-${i}`} className="mx-8 lg:mx-12">
                 <img 
                   src={partner.image} 
                   alt={partner.name}
                   className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply" 
                 />
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeFade side="right" />
        </Marquee>

         {/* Row 2 - Right (Reverse) */}
         <Marquee>
          <MarqueeFade side="left" />
          <MarqueeContent loop={0} speed={35} direction="right">
            {LOGOS_ROW_2.map((partner, i) => (
              <MarqueeItem key={`r2-${i}`} className="mx-8 lg:mx-12">
                 <img 
                   src={partner.image} 
                   alt={partner.name}
                   className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply" 
                 />
              </MarqueeItem>
            ))}
            {LOGOS_ROW_2.map((partner, i) => (
              <MarqueeItem key={`r2-dup-${i}`} className="mx-8 lg:mx-12">
                 <img 
                   src={partner.image} 
                   alt={partner.name}
                   className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply" 
                 />
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeFade side="right" />
        </Marquee>

         {/* Row 3 - Left */}
         <Marquee>
          <MarqueeFade side="left" />
          <MarqueeContent loop={0} speed={30}>
            {LOGOS_ROW_3.map((partner, i) => (
              <MarqueeItem key={`r3-${i}`} className="mx-8 lg:mx-12">
                 <img 
                   src={partner.image} 
                   alt={partner.name}
                   className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply" 
                 />
              </MarqueeItem>
            ))}
             {LOGOS_ROW_3.map((partner, i) => (
              <MarqueeItem key={`r3-dup-${i}`} className="mx-8 lg:mx-12">
                 <img 
                   src={partner.image} 
                   alt={partner.name}
                   className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply" 
                 />
              </MarqueeItem>
            ))}
          </MarqueeContent>
          <MarqueeFade side="right" />
        </Marquee>
      </motion.div>
    </section>
  );
}

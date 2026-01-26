"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { MapPin } from "lucide-react";

// Assets from Figma
const ASSETS = {
  // Telangana Map with Photo
  telanganaMap:
    "/assets/telangana-map.png",
  // India Map Outline (Background)
  indiaMap:
    "/assets/india-map.svg",
};

export default function WhereWeWorkSection({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "bg-primary relative overflow-hidden py-24 px-4 md:px-8 bg-linear-to-b from-[#9B0258] to-[#6E003C]",
        className,
      )}
      {...props}
    >
      {/* Background Graphic - India Map with animated pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[70%] opacity-5 pointer-events-none select-none">
        <motion.img
          src={ASSETS.indiaMap}
          alt=""
          className="w-full h-full object-contain"
          animate={{ scale: [1, 1.02, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Decorative blurred orbs */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        {/* Text Content in a Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 text-primary-foreground"
        >
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 text-white/80 font-sans text-sm tracking-widest uppercase">
              <MapPin className="w-4 h-4" />
              <span>Our Presence</span>
            </div>
            <h2 className="text-shadow-xs text-white font-serif text-4xl md:text-5xl whitespace-nowrap font-bold leading-[1.1]">
              Where We Work?
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-pretty">
            <p className="font-sans text-lg md:text-xl leading-relaxed text-white/90">
              We Are Based In India And Currently Work In The State Of{" "}
              <span className="font-bold">Telangana</span>, Where Our
              Initiatives Are Rooted In Empowering Women.
            </p>

            <p className="font-sans text-justify  lg:pr-10 text-base md:text-lg leading-relaxed text-white/80">
              Within <span className="font-bold text-white">Telangana</span>, We
              Have A Strong Presence Across 24 Districts Namely Hyderabad, Ranga
              Reddy, Sangareddy, Mahabubnagar, Medchal Malkajgiri, Karimnagar,
              Warangal, Adilabad, Hanumakonda, Jongulamba Gadwal, Wanaparthy,
              Nagarkurnool, Khammam, Peddapalli, Nizambad, Kamareddy,
              Kothagudem, Jagityal, Siddipet, Nalgonda, Mahabubabad, Jangon,
              Medak, Mulugu
            </p>
          </div>
        </motion.div>

        {/* Image Content - Telangana Map with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, }}
          whileInView={{ opacity: 1, scale: 1,  }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className=" flex justify-center lg:justify-end perspective-1000"
        >
          <div className="relative w-full max-w-[650px] aspect-square group">
            

            <img
              src={ASSETS.telanganaMap}
              alt="Map of Telangana showing our work locations"
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform duration-700  z-10"
            />

            {/* Floating stats badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-10 md:bottom-20 md:left-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg z-20 max-w-[150px]"
            >
              <p className="text-primary font-bold text-4xl mb-0.5">24+</p>
              <p className="text-zinc-600 text-xs uppercase tracking-wider font-semibold">
                Districts Covered
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


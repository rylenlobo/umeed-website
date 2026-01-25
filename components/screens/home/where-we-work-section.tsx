"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

// Assets from Figma
const ASSETS = {
  // Telangana Map with Photo
  telanganaMap: "http://localhost:3845/assets/c9a0a1c07dcf0c337ec5fb56222b458285cd9baa.png",
  // India Map Outline (Background)
  indiaMap: "http://localhost:3845/assets/06af5ca63df2f362f0c2e4a4047ae80830b397cd.svg",
}

export default function WhereWeWorkSection({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "bg-primary relative overflow-hidden py-20 px-4 md:px-8",
        className,
      )}
      {...props}
    >
      {/* Background Graphic - India Map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[80%] opacity-10 pointer-events-none select-none">
        <img
          src={ASSETS.indiaMap}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 text-primary-foreground"
        >
          <h2 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize  lg:block text-left">
            Where We Work?
          </h2>

          <div className="flex flex-col gap-6 text-justify">
            <p className="font-sans text-lg md:text-xl leading-relaxed text-white/90">
              We Are Based In India And Currently Work In The State Of{" "}
              <span className="font-bold">Telangana</span>, Where Our
              Initiatives Are Rooted In Empowering Women.
            </p>

            <p className="font-sans text-base md:text-lg leading-relaxed text-white/80">
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

        {/* Image Content - Telangana Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[600px] aspect-square">
            <img
              src={ASSETS.telanganaMap}
              alt="Map of Telangana showing our work locations"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

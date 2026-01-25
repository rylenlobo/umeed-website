"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion } from "motion/react"

// Assets
const ASSETS = {
  backgroundPoster: "http://localhost:3845/assets/ef3084a9df2e151bc0121f43940c3a509c55edab.png", 
  video: "https://videos.pexels.com/video-files/5200378/5200378-uhd_2560_1440_25fps.mp4" 
}

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.3,
      delayChildren: 1.5 // Wait for overlay to fade in
    } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
}

export default function TestimonialSection({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "relative w-full h-[900px] flex flex-col items-center justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* Dark Overlay - Animates in after delay */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-black/60 z-10" 
        />
        
        {/* Gradient Overlay - Animates in with dark overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/60 to-slate-950/50 z-10" 
        />
        
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={ASSETS.backgroundPoster}
          className="w-full h-full object-cover"
        >
          <source src={ASSETS.video} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <motion.div 
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-20 w-full max-w-5xl px-4 flex flex-col items-center gap-12"
      >
        {/* Quote Block */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium italic leading-tight text-white max-w-4xl text-pretty drop-shadow-md">
            "I had never even imagined making a CV. But after that one session,
            my priorities changed and so did my confidence."
          </p>
        </motion.div>

        {/* Author Details */}
        <motion.div variants={itemVariants} className="w-full max-w-4xl flex flex-col items-center lg:items-end text-right text-white/90 gap-1 pr-4 md:pr-12">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-wide">
            — Shaziya Sultana
          </div>
          <div className="text-sm md:text-base font-sans font-light tracking-wide text-white/80">
            FirstLeaper 2021
          </div>
          <div className="text-xs md:text-sm font-sans italic text-primary font-medium mt-1">
            Career Aspiration: Job in Finance
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mt-8 items-center">
          <Button 
            size="lg" 
            shape="pill"
          >
            <Play className="mr-2 size-4 fill-current" />
            Watch Full Film
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

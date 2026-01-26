"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion, stagger } from "motion/react";
import Link from "next/link";

// Assets
const ASSETS = {
  backgroundPoster: "/assets/testimonial-poster.png",
  video: "/assets/video-trailer.mp4",
  ytLink: "https://youtu.be/4yKhaFRraL0?si=L3kY9Xc6mKUYgZOK",
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: stagger(0.2, {
        ease: "easeIn",
        startDelay: 1.5,
      }),
      duration: 0.6,
    },
  },
};

export default function TestimonialSection({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "relative w-full h-[650px] flex flex-col items-center justify-center overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
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
          className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent z-10"
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
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-20 w-full max-w-5xl px-4 flex flex-col items-center gap-12"
      >
        {/* Quote Block */}
        <motion.div
          variants={itemVariants as any}
          className="flex flex-col gap-6 items-center text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium italic leading-tight text-white max-w-4xl text-pretty drop-shadow-md">
            "I had never even imagined making a CV. But after that one session,
            my priorities changed and so did my confidence."
          </p>
        </motion.div>

        {/* Author Details */}
        <motion.div
          variants={itemVariants as any}
          className="w-full max-w-4xl flex flex-col items-center lg:items-end text-right text-white/90 gap-1 pr-4 md:pr-12"
        >
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
        <motion.div
          variants={itemVariants as any}
          className="flex flex-col sm:flex-row gap-5 mt-8 items-center"
        >
          <Link target="_blank" href={ASSETS.ytLink}>
            <Button size="lg" shape="pill">
              <Play className="mr-2 size-4 fill-current" />
              Watch Full Film
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

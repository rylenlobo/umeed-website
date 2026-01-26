"use client";


import { Button } from "@/components/ui/button";
import { Sparkles, HeartHandshake, HandHeart } from "lucide-react";
import { motion, stagger } from "motion/react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/f8dea032-b5ca-4498-acca-9001af9a044a.png" // Placeholder image of diverse women
          alt="Empowering Women"
          className="object-cover w-full h-full object-[50%_0%]"
        />
        {/* Gradient Overlay using the colors from Figma */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-linear-to-r from-[rgba(134,16,67,0.95)] via-[rgba(89,22,139,0.85)] via-60% to-[rgba(89,22,139,0.4)] lg:to-transparent"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6  relative z-10 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delayChildren: stagger(0.25, {
              ease: "easeIn",
              startDelay: 0.3,
            }),
          }}
          className="max-w-4xl space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Empowering Women Since 2014</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl  lg:text-6xl   font-serif text-white leading-[1.1] text-pretty text-left"
          >
            Together, Let's Break Down Barriers and unlock the true potential of
            women
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl font-light leading-relaxed"
          >
            Join us in creating opportunities, building confidence, and
            fostering growth in communities worldwide.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              variant="outline"
              size="lg"
              shape="pill"
              className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white h-14 px-8 text-base group"
            >
              Donate Here
              <HandHeart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>

            <Link href="/get-involved">
              <Button
                variant="default"
                size="lg"
                shape="pill"
                className="bg-[#E91E63] hover:bg-[#D81B60] text-white border-none h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all group"
              >
                Give your time
                <HeartHandshake className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

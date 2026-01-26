"use client";

import { Button } from "@/components/ui/button";
import { Heart, HandHeart } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function SupportBanner() {
  return (
    <section className="relative w-full py-20 lg:py-24 overflow-hidden bg-primary/5">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/f8dea032-b5ca-4498-acca-9001af9a044a.png" // Using the same placeholder/asset as CTA for now, as it fits the theme
          alt="Support Our Mission"
          className="object-cover w-full h-full object-top opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-primary/60 mix-blend-multiply" />
      </div>

      <div className="container mx-auto max-w-4xl px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <Heart className="w-8 h-8 text-white fill-white/20" />
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight"
        >
          Support Our Mission Today!
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light"
        >
          Your contribution can help women gain the skills, confidence, and opportunity to succeed — turning potential into progress and progress into empowerment.
        </motion.p>

        <div className="flex flex-col items-center gap-6 w-full">
            <span className="text-white/80 font-medium tracking-wide uppercase text-sm">Get Involved</span>
            <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
            <Link href="/get-involved">
                <Button
                variant="outline"
                size="lg"
                shape="pill"
                className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary h-12 px-8 min-w-[160px] font-medium"
                >
                Volunteer
                </Button>
            </Link>

            <Button
                variant="outline"
                size="lg"
                shape="pill"
                className="bg-transparent text-white border-white/60 hover:bg-white/10 hover:border-white h-12 px-8 min-w-[160px] font-medium group"
            >
                Donate
                <HandHeart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

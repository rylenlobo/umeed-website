"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

// --- Types ---

export interface ProgramPillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProgramStat {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

export interface ProgramSectionProps {
  id: string;
  title: string;
  subtitle: string;
  contentTitle?: string;
  description: React.ReactNode;
  pillarsTitle?: string;
  pillars: ProgramPillar[];
  images: string[];
  statsTitle?: string;
  statsSubtitle?: string;
  statsDescription?: string;
  stats: ProgramStat[];
  brochureLink?: string;
  videoLink?: string;
  videoText?: string;
  reverse?: boolean;
  className?: string;
}

// --- Animation Variants ---

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween" as const,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "tween" as const,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// --- Component ---

export function ProgramSection({
  id,
  title,
  subtitle,
  contentTitle,
  description,
  pillarsTitle = "Core Pillars",
  pillars,
  images,
  statsTitle = "Impact Highlights",
  statsSubtitle = "Measurable Change, Real-World Results",
  statsDescription,
  stats,
  brochureLink = "#",
  videoLink = "#",
  videoText = "Watch Overview",
  reverse = false,
  className,
}: ProgramSectionProps & { contentTitle?: string }) {
  return (
    <section
      id={id}
      className={cn("flex flex-col bg-white overflow-hidden", className)}
    >
      {/* Top Header */}
      <div className="text-center py-16 lg:pb-24 bg-white  px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-serif text-primary mb-6"
        >
          {title}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
          className="text-xl lg:text-2xl sm:max-w-xl text-pretty md:max-w-4xl mx-auto leading-relaxed text-foreground/80 font-serif italic"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Main Content Area */}
      <div className="bg-white">
        <div
          className={cn(
            "flex flex-col-reverse lg:flex-row gap-16 items-start mb-24 container mx-auto px-4 md:px-6",
            reverse ? "lg:flex-row-reverse" : "lg:flex-row",
          )}
        >
          {/* Content Column */}
          <div className="w-full lg:w-[50%] space-y-10">
            {/* Description Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {contentTitle && (
                <motion.div
                  variants={fadeInUp}
                  className="border-l-[3px] border-primary pl-6 py-1 mb-6"
                >
                  <h3 className="text-3xl text-pink-800 font-normal font-serif leading-[1.4]">
                    {contentTitle}
                  </h3>
                </motion.div>
              )}
              <motion.div
                variants={fadeInUp}
                className="prose prose-lg text-muted-foreground leading-relaxed"
              >
                {description}
              </motion.div>
            </motion.div>

            {/* Pillars Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="pt-4"
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <h4 className="text-2xl font-serif text-foreground mb-2">
                  {pillarsTitle}
                </h4>
                <p className="text-muted-foreground">
                  To ensure a complete transition into professional life, we
                  focus on key areas:
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="p-6 rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-4 h-full group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {React.isValidElement(pillar.icon)
                        ? React.cloneElement(
                            pillar.icon as React.ReactElement<any>,
                            { size: 22 },
                          )
                        : pillar.icon}
                    </div>
                    <div>
                      <h5 className="font-serif text-lg text-foreground mb-2">
                        {pillar.title}
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4 pt-4"
            >
              {brochureLink && (
                <Button
                  size="lg"
                  shape="pill"
                  className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-medium shadow-md group"
                >
                  Read our brochure
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
              {videoLink && videoText && (
                <Button
                  variant="outline"
                  size="lg"
                  shape="pill"
                  className="w-full border-primary/30 text-primary hover:bg-pink-50 hover:text-primary h-14 text-lg font-medium"
                >
                  <Play className="mr-2 w-5 h-5 fill-current" />
                  {videoText}
                </Button>
              )}
            </motion.div>
          </div>

          {/* Image Collage Column */}
          <motion.div
            className="w-full lg:w-[46%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-4 mt-8 md:mt-20">
                {" "}
                {/* Offset for collage effect */}
                {images[0] && (
                  <motion.div
                    variants={scaleIn}
                    className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96"
                  >
                    <img
                      src={images[0]}
                      alt="Program highlight"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                )}
                {images[1] && (
                  <motion.div
                    variants={scaleIn}
                    className="rounded-2xl overflow-hidden shadow-xl h-48 md:h-64"
                  >
                    <img
                      src={images[1]}
                      alt="Program highlight"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                )}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                {images[3] && (
                  <motion.div
                    variants={scaleIn}
                    className="rounded-2xl overflow-hidden shadow-xl h-56 md:h-72"
                  >
                    <img
                      src={images[3]}
                      alt="Program highlight"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                )}
                {images[4] && (
                  <motion.div
                    variants={scaleIn}
                    className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96"
                  >
                    <img
                      src={images[4]}
                      alt="Program highlight"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section with simple parallax background hint or just nice spacing */}
        <div className="bg-gradient-to-b from-white to-rose-50/80 w-screen py-20 lg:py-28 relative">
          {/* Decorative element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>

          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl lg:text-5xl font-serif text-primary mb-6">
                {statsTitle}
              </h3>
              <p className="text-xl lg:text-2xl text-foreground font-medium mb-4 font-serif">
                {statsSubtitle}
              </p>
              {statsDescription && (
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {statsDescription}
                </p>
              )}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-white/80 backdrop-blur-xs rounded-2xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-pink-100 rounded-2xl">
                    {React.isValidElement(stat.icon)
                      ? React.cloneElement(
                          stat.icon as React.ReactElement<any>,
                          { size: 32, strokeWidth: 1.5 },
                        )
                      : stat.icon}
                  </div>
                  <div className="text-4xl lg:text-5xl font-serif text-foreground font-medium mb-3">
                    {stat.value}
                  </div>
                  <div className="text-lg font-medium text-foreground/80 mb-4 font-serif">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

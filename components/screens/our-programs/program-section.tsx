"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, ArrowRight, Download, Users, Briefcase, GraduationCap, TrendingUp, HandHeart, Heart, Smile, MonitorPlay, Trophy, Lightbulb, UserCheck, MessageCircle } from "lucide-react"; // Import common icons, will be passed as components or strings
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

// Define the shape of our data
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
  id: string; // for scrolling/navigation
  title: string;
  subtitle: string;
  description: React.ReactNode; // rich text or string
  pillarsTitle?: string;
  pillars: ProgramPillar[];
  images: string[]; // Array of image URLs
  statsTitle?: string;
  statsSubtitle?: string;
  stats: ProgramStat[];
  brochureLink?: string;
  videoLink?: string; 
  videoText?: string;
  reverse?: boolean; // If true, images on left, content on right
  className?: string;
}

export function ProgramSection({
  id,
  title,
  subtitle,
  description,
  pillarsTitle = "Core Pillars",
  pillars,
  images,
  statsTitle = "Impact Highlights",
  statsSubtitle = "Measurable Change, Real-World Results",
  stats,
  brochureLink = "#",
  videoLink = "#",
  videoText = "Watch Overview",
  reverse = false,
  className,
}: ProgramSectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-32 overflow-hidden", className)}>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Top Header - Title & Subtitle */}
        <div className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-serif text-primary mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-foreground/80 font-serif italic"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Main Content Area: Split Layout */}
        <div className={cn(
          "flex flex-col gap-12 lg:gap-20 items-start",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>
          
          {/* Text & Pillars Column */}
          <div className="w-full lg:w-1/2 space-y-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg text-muted-foreground leading-relaxed"
            >
              <div className="text-lg md:text-xl border-l-4 border-primary/30 pl-6 py-1">
                {description}
              </div>
            </motion.div>

            {/* Pillars Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-medium text-foreground">{pillarsTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {pillar.icon}
                    </div>
                    <h4 className="font-serif text-lg font-bold mb-2">{pillar.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" shape="pill" className="bg-primary hover:bg-primary/90 text-white min-w-[200px] h-14 text-base">
                Read our brochure
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" shape="pill" className="border-primary/20 text-primary hover:bg-primary/5 min-w-[200px] h-14 text-base">
                <Play className="mr-2 w-4 h-4 fill-current" />
                {videoText}
              </Button>
            </div>
          </div>

          {/* Image Collage Column */}
          <div className="w-full lg:w-1/2 relative">
             <div className="columns-2 gap-4 space-y-4">
                {images.map((src, i) => (
                   <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative rounded-2xl overflow-hidden break-inside-avoid shadow-lg first:mt-12"
                   >
                     <img 
                       src={src} 
                       alt={`Program image ${i+1}`}
                       className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                     />
                   </motion.div>
                ))}
             </div>
          </div>
        </div>

        {/* Impact Highlights Section (Bottom) */}
        <div className="mt-32 pt-16 border-t border-border/40">
           <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-serif text-primary mb-3">{statsTitle}</h3>
              <p className="text-muted-foreground">{statsSubtitle}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white rounded-3xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50 hover:border-primary/20 transition-colors relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-16 h-16 mx-auto mb-6 text-primary flex items-center justify-center">
                    {React.isValidElement(stat.icon) ? React.cloneElement(stat.icon as React.ReactElement<any>, { size: 40, strokeWidth: 1.5 }) : stat.icon}
                  </div>
                  
                  <div className="text-4xl lg:text-5xl font-serif text-foreground font-medium mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-medium text-foreground/80 mb-4">{stat.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px] mx-auto">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}

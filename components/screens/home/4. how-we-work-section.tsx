"use client";

import { motion, stagger } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Assets from Figma
const imgGridItem4 = "/assets/how-we-work-1.png";
const imgGridItem8 = "/assets/how-we-work-2.png";
const imgGridItem9 = "/assets/how-we-work-3.png";
const imgGridItem5 = "/assets/how-we-work-4.png";

// Updated variants for simpler fade animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger animations for children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.2, {
        ease: "easeInOut",
        startDelay: 0.5,
      }),
      duration: 1,
    },
  },
};

export default function HowWeWorkSection() {
  return (
    <section className="bg-linear-to-b from-primary/10 via-10%-primary/5 via-20%-white to-white py-20 px-4 md:px-10 lg:py-32 lg:px-[120px] overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
        {/* Mobile/Tablet Title */}
        <motion.div
          className="lg:hidden w-full mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">
            Our Approach
          </span>
          <h2 className="text-4xl text-shadow-xs md:text-5xl font-serif font-bold text-foreground">
            How We Work?
          </h2>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full items-center"
        >
          {/* Left: Masonry Grid */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Row 1 */}
            <div className="flex flex-row gap-4 sm:gap-6 items-end w-full">
              <motion.div
                className="relative h-[180px] sm:h-[300px] w-1/2 rounded-2xl overflow-hidden shrink-0 group"
                variants={imageVariants}
              >
                <img
                  fetchPriority="high"
                  src={imgGridItem4}
                  alt="Grassroots Level"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
              <motion.div
                className="relative h-[220px] sm:h-[340px] w-1/2 rounded-2xl overflow-hidden flex-1 group"
                variants={imageVariants}
              >
                <img
                  fetchPriority="high"
                  src={imgGridItem8}
                  alt="System Level"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-row gap-4 sm:gap-6 items-start w-full">
              <motion.div
                className="relative h-[220px] sm:h-[340px] w-[45%] rounded-2xl overflow-hidden shrink-0 group"
                variants={imageVariants}
              >
                <img
                  fetchPriority="high"
                  src={imgGridItem9}
                  alt="Skill Building"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
              <motion.div
                className="relative h-[180px] sm:h-[300px] flex-1 rounded-2xl overflow-hidden group"
                variants={imageVariants}
              >
                <img
                  src={imgGridItem5}
                  fetchPriority="high"
                  alt="Empowerment"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            </div>
          </div>

          {/* Right: Text Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col gap-8 lg:text-left text-center items-center lg:items-start"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6 w-full">
              {/* Desktop Title */}
              <div className="hidden lg:block">
                <span className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block">
                  Our Approach
                </span>
                <h2 className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                  How We Work?
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We run{" "}
                  <span className="text-foreground font-medium">
                    skill building and empowerment programs
                  </span>{" "}
                  both at a grassroots and system level.
                </p>

                <ul className="flex flex-col gap-4 text-left">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span>Enable women with knowledge to build careers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span>confidence to make and sustain their choices.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span>
                      Foster gender awareness for systems-level change.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/our-programs">
              <Button
                size="lg"
                className="mt-4 bg-primary hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-white font-sans font-medium text-lg py-4 px-8 rounded-full flex items-center gap-3 group cursor-pointer"
              >
                <span>Explore Our Programs</span>
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

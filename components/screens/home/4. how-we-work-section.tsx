"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Assets from Figma
const imgGridItem4 = "http://localhost:3845/assets/35af9258fff1537f39d0f35d576120af04422292.png";
const imgGridItem8 = "http://localhost:3845/assets/10bcc5cbc1f0f0d0dce6ae41c2f57f39fb589fb1.png";
const imgGridItem9 = "http://localhost:3845/assets/2d337517380d633bebf454989f866008deabcb7a.png";
const imgGridItem5 = "http://localhost:3845/assets/23bac9a8f6a6814981f5540c893a55828fc11932.png";

// Updated variants for simpler fade animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger animations for children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#fdf9fb] py-16 px-4 md:py-20 md:px-10 lg:py-36 lg:px-[120px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center">
        
        {/* Mobile/Tablet Title: Visible only on smaller screens */}
        <motion.h2 
          className="text-primary font-serif text-3xl md:text-5xl font-bold leading-tight capitalize text-center mb-10 lg:hidden w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How We Work?
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 w-full items-center justify-center">
          {/* Left: Masonry Grid */}
          <motion.div 
            className="w-full lg:w-[692px] flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* 
              Responsive structural change: 
              Using flex layout on ALL screen sizes as per user request.
              - Mobile/Tablet will now mirror the Desktop asymmetric layout.
              - Using percentages for widths on smaller screens to maintain the ratio.
            */}
            
            {/* Row 1 */}
            <motion.div className="flex flex-row gap-4 sm:gap-6 items-end w-full" variants={itemVariants}>
              <div className="relative h-[158px] sm:h-[288px] w-[55%] lg:w-[387px] rounded-2xl overflow-hidden shrink-0">
                <img 
                  src={imgGridItem4} 
                  alt="How we work 1" 
                  className="absolute inset-0 size-full object-cover" 
                />
              </div>
              <div className="relative h-[158px] sm:h-[288px] flex-1 rounded-2xl overflow-hidden">
                <img 
                  src={imgGridItem8} 
                  alt="How we work 2" 
                  className="absolute inset-0 size-full object-cover scale-[1.5]" 
                />
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div className="flex flex-row gap-4 sm:gap-6 items-start w-full" variants={itemVariants}>
              <div className="relative h-[158px] sm:h-[288px] w-[40%] lg:w-[280px] rounded-2xl overflow-hidden shrink-0">
                <img 
                  src={imgGridItem9} 
                  alt="How we work 3" 
                  className="absolute inset-0 size-full object-cover scale-[1.3]" 
                />
              </div>
              <div className="relative h-[158px] sm:h-[288px] flex-1 rounded-2xl overflow-hidden">
                <img 
                  src={imgGridItem5} 
                  alt="How we work 4" 
                  className="absolute inset-0 size-full object-cover scale-[1.2]" 
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            className="w-full lg:w-[452px] flex flex-col gap-8 items-center lg:items-start relative mt-6 lg:mt-0 text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6 lg:gap-8 w-full">
              {/* Desktop Title: Hidden on mobile */}
              <h2 className="text-primary font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize hidden lg:block text-left">
                How We Work?
              </h2>
              <div className="font-sans text-[#444444] text-base leading-relaxed text-justify max-w-[600px] lg:max-w-none mx-auto">
                <p>
                  We run skill building and empowerment programs both at a grassroots and system level that enable women with the knowledge to build their career and confidence to make and sustain their choices, while also fostering gender awareness and sensitivity for systems-level change.
                </p>
              </div>
            </div>
            
            <button className="bg-primary hover:bg-primary-hover transition-colors text-white font-sans font-medium text-base py-3 px-6 rounded-full flex items-center gap-2.5 group cursor-pointer">
              <span>Learn More</span>
              <div className="relative w-4 h-4 overflow-hidden">
               <ArrowUpRight className="w-full h-full transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

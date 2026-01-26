"use client";

import { motion, MotionConfig, useInView } from "motion/react";
import NumberFlow, { useCanAnimate } from "@number-flow/react";
import { LucideIcon } from "lucide-react";
import { useRef } from "react";

const MotionNumberFlow = motion.create(NumberFlow);

interface ImpactCardProps {
  icon: LucideIcon;
  count: string;
  label: string;
  desc: string;

}

export function ImpactCard({
  icon: Icon,
  count,
  label,
  desc,

}: ImpactCardProps) {
  const numericValue = parseInt(count.replace(/,/g, ""));
  const suffix = count.replace(/[0-9,]/g, "");
  const ref = useRef<HTMLDivElement | null>(null);
  const canAnimate = useCanAnimate();

  const inView = useInView(ref, { once: true, margin:"-200px" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin:"-200px" }}
      ref={ref}
      className="flex flex-col items-center text-center group"
    >
      <div className="mb-6 p-3 rounded-full bg-pink-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>

      <MotionConfig
      >
        <MotionNumberFlow
          value={inView ? numericValue : 0}
          className="font-serif text-3xl font-bold text-[#252a34] mb-2"
          suffix={suffix || undefined}
          layout
          layoutRoot
          transition={{ delay: 0.6, duration: 8, ease: "easeIn" }} // Custom duration as requested
        />
      </MotionConfig>

      <h4 className="font-serif text-lg font-bold text-[#252a34] mb-3">
        {label}
      </h4>
      <p className="text-sm text-gray-600 leading-relaxed max-w-[300px]">
        {desc}
      </p>
    </motion.div>
  );
}

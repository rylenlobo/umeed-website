"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  motion,
  useScroll,
  useTransform,
  cubicBezier,
  stagger,
} from "motion/react";
import Link from "next/link";

export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  title1: string;
  title2: string;
  description: string;
  ctaText?: string;
  ctaIcon?: React.ReactNode;
  ctaLink?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  image?: {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt?: string;
  };
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: stagger(0.2, {
        ease: "easeIn",
        startDelay: 0.2,
      }),
      duration: 1,
    },
  },
};

export function HeroSection({
  className,
  badgeText,
  badgeIcon,
  title1,
  title2,
  description,
  ctaText,
  ctaIcon,
  ctaLink,
  onCtaClick,
  backgroundImage,
  image,
  ...props
}: HeroSectionProps) {
  const imgSrc = image?.src || backgroundImage;
  const containerRef = React.useRef(null);

  // Parallax Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"], {
    ease: cubicBezier(0.55, 0.085, 0.68, 0.53),
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0], {
    ease: cubicBezier(0.55, 0.085, 0.68, 0.53),
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-full w-full items-end lg:items-center overflow-hidden bg-background",
        className,
      )}
      {...props}
    >
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="w-full h-full"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "linear" }}
        >
          {imgSrc && (
            <picture>
              {props.mobileBackgroundImage && (
                <source
                  media="(max-width: 768px)"
                  srcSet={props.mobileBackgroundImage}
                />
              )}
              <img
                src={imgSrc}
                alt={image?.alt || "Hero Background"}
                className="h-full w-full object-cover object-center"
              />
            </picture>
          )}
        </motion.div>
      </div>

      {/* Sophisticated Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="absolute inset-0 z-0 bg-linear-to-r from-[#5a0032] via-[#5a0032]/80 to-transparent opacity-90"
      />
      <div className="absolute inset-0 z-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />

      {/* Content - Restored Original Design Layout & Typography */}
      <motion.div
        style={{ opacity }}
        className="container relative z-10 mx-auto px-4 pb-6 text-white lg:mt-48"
      >
        <motion.div
          className="max-w-7xl flex flex-col items-start"
          variants={variants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          {(badgeText || badgeIcon) && (
            <motion.div
              variants={variants}
              className="mb-4 flex font-sans items-center gap-2 text-sm md:text-base"
            >
              {badgeIcon && (
                <span className="shrink-0 text-white">{badgeIcon}</span>
              )}
              {badgeText && <span>{badgeText}</span>}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={variants}
            className="mb-6 text-4xl text-pretty leading-tight md:text-5xl lg:text-7xl font-serif"
          >
            {title1}
            <br />
            {title2}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={variants}
            className="mb-6 sm:max-w-xl lg:max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-white/90 lg:text-xl"
          >
            {description}
          </motion.p>

          {/* CTA Button - Original Design */}
          {ctaText && (
            <motion.div variants={variants}>
              <Link href={ctaLink || "#"}>
                <Button
                  variant="outline"
                  shape="oval"
                  size="lg"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-primary h-12 px-8 text-base shadow-none transition-colors"
                  onClick={onCtaClick}
                >
                  {ctaText}
                  {ctaIcon}
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    badgeText?: string
    badgeIcon?: React.ReactNode
    title1: string
    title2: string
    description: string
    ctaText?: string
    ctaIcon?: React.ReactNode
    onCtaClick?: () => void
    backgroundImage?: string // Deprecated, kept for backward compatibility if needed, or mapped to src
    image?: {
        src: string
        srcSet?: string
        sizes?: string
        alt?: string
    }
}

export function HeroSection({
    className,
    badgeText,
    badgeIcon,
    title1,
    title2,
    description,
    ctaText,
    ctaIcon,
    onCtaClick,
    backgroundImage, // Keeping for backward compatibility as simple src
    image,
    ...props
}: HeroSectionProps) {
    // Resolve image props
    const imgSrc = image?.src || backgroundImage;
    const imgSrcSet = image?.srcSet;
    const imgSizes = image?.sizes || "100vw";
    const imgAlt = image?.alt || "Hero Background";

    return (
      <div
        className={cn(
          "relative flex h-full w-full items-end lg:items-center overflow-hidden bg-background",
          className,
        )}
        {...props}
      >
        {/* Background Image */}
        {imgSrc && (
          <img
            src={imgSrc}
            srcSet={imgSrcSet}
            sizes={imgSizes}
            alt={imgAlt}
            className="absolute inset-0 z-0 h-full w-full object-cover object-center "
            {...({
              fetchPriority: "high",
            } as React.ImgHTMLAttributes<HTMLImageElement>)}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-(image:--hero-gradient) animate-fade-in duration-300" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 pb-6 text-white lg:mt-45">
          <div className="max-w-7xl">
            {/* Badge */}
            {(badgeText || badgeIcon) && (
              <div className="mb-4 flex font-sans items-center gap-2 text-sm  md:text-base animate-fade-in-up">
                {badgeIcon && (
                  <span className="shrink-0 text-white">{badgeIcon}</span>
                )}
                {badgeText && <span>{badgeText}</span>}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-6 text-4xl text-pretty leading-tight md:text-5xl lg:text-7xl font-serif animate-fade-in-up delay-200">
              {title1}
              <br />
              {title2}
            </h1>

            {/* Description */}
            <p className="mb-6 sm:max-w-xl lg:max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-white/90 lg:text-xl animate-fade-in-up delay-300">
              {description}
            </p>

            {/* CTA Button */}
            {ctaText && (
              <Button
                variant="outline"
                shape="oval"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary h-12 px-8 text-base shadow-none transition-colors animate-fade-in-up delay-500"
                onClick={onCtaClick}
              >
                {ctaText}
                {ctaIcon}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
}

"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Heart } from "lucide-react";
import { motion, stagger } from "motion/react";
import Link from "next/link";

// Assets from Figma MCP
const ASSETS = {
  groupPhoto: "/assets/mission-group.png",
  whoWeAre: "/assets/mission-who-we-are.png",
  whatWeDo: "/assets/mission-what-we-do.png",
};

interface MissionCardProps {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  onCtaClick?: () => void;
}

const MISSION_CARDS: MissionCardProps[] = [
  {
    image: ASSETS.whoWeAre,
    title: "Who we are",
    description:
      "Founded in 2014, Umeed is a non-profit dedicated to inspiring transformative change in how women perceive themselves and are perceived by society. Our programs, along with our lifelong network of trust and support, equip women with life skills, a progressive mindset and exposure to the world of opportunities around them.",
    ctaText: "Learn More",
    ctaLink: "/about-us",
  },
  {
    image: ASSETS.whatWeDo,
    title: "What we do",
    description:
      "We give women from marginalised communities the tools & opportunities to become empowered, valued and equal members of society; to rise out of the oppression of societal norms and build better futures for themselves and the generations of women to come.",
    ctaText: "Learn More",
    ctaLink: "/our-programs",
  },
];

function MissionCard({
  image,
  title,
  description,
  ctaText,
  ctaLink,
}: MissionCardProps) {
  return (
    <div className=" flex flex-col gap-4 h-full">
      <div className="aspect-video w-full rounded-2xl overflow-hidden shrink-0 bg-muted relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block absolute inset-0"
        />
      </div>
      <div className="flex flex-col gap-4 flex-1 ">
        <h3 className="text-[28px] text-shadow-xs md:text-[32px] font-serif font-bold text-foreground leading-normal">
          {title}
        </h3>
        <p className="text-zinc-700 text-base font-sans text-justify">
          {description}
        </p>
        <div className="mt-auto">
          <Link href={ctaLink}>
            <Button
              variant="outline"
              className="rounded-full px-6 border-primary text-primary hover:bg-primary/5 group h-9"
            >
              {ctaText}
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: stagger(0.25, {
        ease: "easeIn",
        startDelay: 0.4,
      }),
      duration: 1,
    },
  },
};

export default function MissionSection({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn("py-24 px-4 md:px-8 relative overflow-hidden", className)}
      {...props}
    >
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, margin: "-300px" }}
        className="absolute w-full h-[20%]  sm:h-[17%] lg:h-[30%] inset-0 bg-linear-to-b from-primary/15 via-10%-primary/5 via-20%-white to-white pointer-events-none"
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-10 relative z-10"
      >
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-8 max-w-6xl mx-auto">
          <motion.div
            variants={variants}
            className="bg-white text-primary drop-shadow-md rounded-full py-2 px-4 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Transforming Lives Together</span>
          </motion.div>

          <motion.h2
            variants={variants}
            className="text-4xl md:text-5xl lg:text-7xl text-shadow-xs font-serif text-foreground leading-[1.1]"
          >
            We inspire women to lead with{" "}
            <span className="text-transparent bg-clip-text bg-primary font-bold italic pr-2">
              confidence & purpose
            </span>
          </motion.h2>

          <motion.p
            variants={variants}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty"
          >
            Making women take{" "}
            <span className="text-foreground font-medium">better control</span>{" "}
            of their wellbeing, become self-reliant, and contribute meaningfully
            to their communities.
          </motion.p>

          <motion.div
            variants={variants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/get-involved">
              <Button size="lg" className="drop-shadow-md" shape="pill">
                Join Our Movement
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Main Image */}
        <motion.div
          variants={variants}
          className="w-full max-w-6xl rounded-4xl overflow-hidden drop-shadow-md "
        >
          <div className="aspect-[1/1.2] sm:aspect-video w-full bg-gray-200">
            <img
              src={ASSETS.groupPhoto}
              alt="Umeed Community of Women"
              className="w-full h-full object-cover "
            />
          </div>
        </motion.div>

        {/* Cards Section */}
        <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl ">
          {MISSION_CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4 + index * 0.2,
              }}
              className="h-full"
            >
              <MissionCard {...card} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

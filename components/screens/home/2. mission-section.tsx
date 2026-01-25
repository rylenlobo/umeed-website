"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { motion } from "motion/react"

// Assets from Figma MCP
const ASSETS = {
  groupPhoto: "http://localhost:3845/assets/e8d65bfacad4ac2d7e0c8c3e49b0322040592ec2.png",
  whoWeAre: "http://localhost:3845/assets/20e5b31f10b0be56a49b930bf61f2c2701ee8288.png",
  whatWeDo: "http://localhost:3845/assets/e1e40c185e3c94d63ca4dea5b6784479ec2dccb1.png",
}

interface MissionCardProps {
  image: string
  title: string
  description: string
  ctaText: string
  onCtaClick?: () => void
}

const MISSION_CARDS: MissionCardProps[] = [
  {
    image: ASSETS.whoWeAre,
    title: "Who we are",
    description: "Founded in 2014, Umeed is a non-profit dedicated to inspiring transformative change in how women perceive themselves and are perceived by society. Our programs, along with our lifelong network of trust and support, equip women with life skills, a progressive mindset and exposure to the world of opportunities around them.",
    ctaText: "Learn More",
  },
  {
    image: ASSETS.whatWeDo,
    title: "What we do",
    description: "We give women from marginalised communities the tools & opportunities to become empowered, valued and equal members of society; to rise out of the oppression of societal norms and build better futures for themselves and the generations of women to come.",
    ctaText: "Learn More",
  },
]

function MissionCard({ image, title, description, ctaText }: MissionCardProps) {
  return (
    <div className="bg-white rounded-[32px] border-2 border-zinc-200 flex flex-col gap-5 h-full">
      <div className="aspect-video w-full rounded-2xl overflow-hidden shrink-0 bg-muted relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block absolute inset-0"
        />
      </div>
      <div className="flex flex-col gap-4 flex-1 p-4">
        <h3 className="text-[28px] md:text-[32px] font-serif font-bold text-foreground leading-normal">{title}</h3>
        <p className="text-zinc-700 text-base font-sans leading-relaxed text-justify">
          {description}
        </p>
        <div className="mt-auto">
          <Button variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary/5 group h-9">
            {ctaText}
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}


export default function MissionSection({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "bg-[#fdf9fb] py-20 px-4 md:px-8 mx-auto  flex flex-col items-center gap-11 relative overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Header Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 max-w-7xl text-center z-10"
      >
        {/* Badge */}
        <div className="bg-primary/10 rounded-full py-2 px-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary fill-primary" />
          <span className="text-primary font-medium font-sans text-sm">
            Transforming Lives Together
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl text-pretty lg:text-6xl font-serif text-foreground leading-tight">
          At <span className="text-primary font-bold">UMEED</span>, we inspire
          women to lead with{" "}
          <span className="text-primary font-bold">confidence and purpose</span>
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-pretty text-base md:text-lg leading-relaxed max-w-2xl">
          Making women take better control of their wellbeing, become
          self-reliant, and contribute meaningfully to their learning journey,
          family, and community.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button shape="pill" size="lg">
            Get Involved
            <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" shape="pill" size="lg">
            Our Impact
          </Button>
        </div>
      </motion.div>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut",delay: 0.2 }}
        className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-xl"
      >
        <div className="relative aspect-[1/1.2] sm:aspect-video w-full bg-gray-200">
          <img
            src={ASSETS.groupPhoto}
            alt="Umeed Community of Women"
            className="w-full h-full object-cover block"
          />
        </div>
      </motion.div>

      {/* Cards Section */}
      <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl mt-4">
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
    </section>
  );
}

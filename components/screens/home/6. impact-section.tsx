"use client";


import { 
  Users, 
  Home, 
  MessageSquare, 
  ShieldCheck, 
  Megaphone, 
  TrendingUp, 
  Network, 
  GraduationCap, 
  HandHeart 
} from "lucide-react";
import { motion } from "motion/react";
import { ImpactCard } from "./components/9.cta-section/impact-card";



const stats = [
  { 
    icon: Users, 
    count: "286", 
    label: "Empowered Women", 
    desc: "Strengthening women through skill-building, mentorship, and personalized growth programs." 
  },
  { 
    icon: Home, 
    count: "280", 
    label: "Families Uplifted", 
    desc: "Creating stable, thriving homes through economic and emotional empowerment initiatives for families." 
  },
  { 
    icon: MessageSquare, 
    count: "1M+", 
    label: "Informed Voices", 
    desc: "Reaching thousands with our InfoSeries, delivering clarity, safety, and community awareness." 
  },
  { 
    icon: ShieldCheck, 
    count: "65%", 
    label: "Decision Confidence", 
    desc: "Participants gained the confidence to lead their personal and professional lives." 
  },
  { 
    icon: Megaphone, 
    count: "88%", 
    label: "Program Advocates", 
    desc: "Our proud community members recommend and champion our programs to their peers and neighbors." 
  },
  { 
    icon: TrendingUp, 
    count: "77%", 
    label: "Self-Growth Focus", 
    desc: "We cultivate a community that actively invests in lifelong learning and personal development." 
  },
  { 
    icon: Network, 
    count: "95%", 
    label: "Professional Networks", 
    desc: "Nurturing connections that help members actively network and build professional pathways." 
  },
  { 
    icon: GraduationCap, 
    count: "80,000+", 
    label: "Educator Reach", 
    desc: "Impacting 80,000 students through comprehensive State Education Department programs." 
  },
  { 
    icon: HandHeart, 
    count: "100+", 
    label: "Sahyog", 
    desc: "Dedicated initiatives support women's livelihoods and foster strong community collaboration." 
  },
];




export default function ImpactSection() {
  return (
    <section
      className="bg-[#fdf9fb] py-16 md:py-24 px-4 md:px-8 lg:px-20 overflow-hidden"
  
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8,ease: "easeIn" }}
          className="font-serif font-bold text-4xl md:text-5xl  max-w-5xl leading-tight text-center text-pretty text-[#252a34] mb-16 md:mb-24"
        >
          Together, We're Empowering Women To Rise And Thrive.
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-16 lg:gap-y-20 w-full mb-24">
          {stats.map((stat, i) => (
            <ImpactCard
              key={i}
              icon={stat.icon}
              count={stat.count}
              label={stat.label}
              desc={stat.desc}
        
            />
          ))}
        </div>

        {/* SDG Card */}
        <motion.div
          initial={{ opacity: 0, y: 30,  }}
          whileInView={{ opacity: 1, y: 0,  }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full bg-primary rounded-[24px] max-w-6xl p-8 md:p-12 lg:px-16 lg:py-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden"
        >
          {/* Content */}
          <div className="text-white z-10 max-w-xl text-center md:text-left">
            <h3 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              SDGs we impact through our Work
            </h3>
            <p className="text-white/90 text-lg leading-relaxed font-light">
              Our mission directly contributes to the United Nations'
              Sustainable Development Goals, focusing on creating a more
              equitable and just world for all.
            </p>
          </div>

          {/* SDG 5 Graphic Replica */}

          <img
            src="/assets/2a54bbaa-7d12-4f7e-acd9-8df92ec4811d.png"
            width={200}
            height={200}
          />
        </motion.div>
      </div>
    </section>
  );
}

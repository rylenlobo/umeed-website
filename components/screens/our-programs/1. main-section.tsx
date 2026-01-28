"use client"
import { HeroSection } from "../components/hero-section";
import { ArrowBigDown, ArrowDown, Book, HeartHandshake, Venus } from "lucide-react";

export default function MainSection() {
    const handleCtaClick = () => {
      if(typeof window !== "undefined") {
         window.scrollTo({
            top: document.getElementById("first-leap")?.offsetTop,
            behavior: "smooth",
         });
      }
   };

  return (
    <main
      className=" h-[calc(100svh-100px)]
    lg:min-h-screen
    lg:supports-[height:100svh]:min-h-svh"
    >
      <HeroSection
        badgeText="Our Programs"
        badgeIcon={<Book className="size-5" />}
        title1="Creating Pathways."
        title2="Building Futures."
        description="At UMEED, our programs guide women from confidence-building to financial independence, turning everyday challenges into pathways for dignity and long-term empowerment."
        ctaText="View Our Programs"
        ctaIcon={<ArrowDown className="size-5" />}
        onCtaClick={handleCtaClick}
        backgroundImage="/assets/hero-bg.png"
        mobileBackgroundImage="/assets/hero-mobile-bg.png"
      />
    </main>
  );
}

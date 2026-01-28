import React from 'react'
import { HeroSection } from '../components/hero-section';
import { HeartHandshake, Venus } from 'lucide-react';

export default function MainSection() {
  return (
    <main
      className=" h-[calc(100svh-100px)]
    lg:min-h-screen
    lg:supports-[height:100svh]:min-h-svh"
    >
      <HeroSection
        badgeText="Over 266+ women empowered since 2014"
        badgeIcon={<Venus className="size-5" />}
        title1="Empower Women."
        title2="Change Lives."
        description="UMEED aspires to radically alter the gender mindsets that exist within society and bring about an immediate and lasting difference; one of dignity, security and HOPE for women."
        ctaText="Get Involved"
        ctaIcon={<HeartHandshake className="size-5" />}
        ctaLink="/get-involved"
        backgroundImage="/assets/hero-bg.png"
        mobileBackgroundImage="/assets/hero-mobile-bg.png"
      />
    </main>
  );
}

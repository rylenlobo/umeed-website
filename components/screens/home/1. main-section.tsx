import React from 'react'
import { HeroSection } from '../components/hero-section';
import { HeartHandshake, Venus } from 'lucide-react';

export default function MainSection() {
  return (
    <main className="h-[calc(100dvh-100px)] lg:h-svh">
      <HeroSection
        badgeText="Over 266+ women empowered since 2014"
        badgeIcon={<Venus className="size-5" />}
        title1="Empower Women."
        title2="Change Lives."
        description="UMEED aspires to radically alter the gender mindsets that exist within society and bring about an immediate and lasting difference; one of dignity, security and HOPE for women."
        ctaText="Get Involved"
        ctaIcon={<HeartHandshake className="size-5" />}
        backgroundImage="http://localhost:3845/assets/6ed316b8022295ab7a345c00d46176c9c29d1b11.png"
      />
    </main>
  );
}

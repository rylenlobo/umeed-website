import MainSection from "@/components/screens/home/1. main-section";
import MissionSection from "@/components/screens/home/2. mission-section";
import TestimonialSection from "@/components/screens/home/3. testimonial-section";
import HowWeWorkSection from "@/components/screens/home/4. how-we-work-section";
import WhereWeWorkSection from "@/components/screens/home/where-we-work-section";

export default function Home() {
  return (
    <div className="min-h-svh">
      <MainSection />
      <MissionSection />
      <TestimonialSection />
      <HowWeWorkSection />
      <WhereWeWorkSection />
    </div>
  );
}

import MainSection from "@/components/screens/home/1. main-section";
import MissionSection from "@/components/screens/home/2. mission-section";
import ImpactSection from "@/components/screens/home/6. impact-section";
import FeedbackSection from "@/components/screens/home/7. feedback-section";
import PartnersSection from "@/components/screens/home/8. partners-section";
import TestimonialSection from "@/components/screens/home/3. testimonial-section";
import HowWeWorkSection from "@/components/screens/home/4. how-we-work-section";
import WhereWeWorkSection from "@/components/screens/home/5. where-we-work-section";
import CTASection from "@/components/screens/home/9. cta-section";

export default function Home() {
  return (
    <div className="min-h-svh">
      <MainSection />
      <MissionSection />
      <TestimonialSection />
      <HowWeWorkSection />
      <WhereWeWorkSection />
      <ImpactSection />
      <FeedbackSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
}

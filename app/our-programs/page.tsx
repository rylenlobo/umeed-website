import MainSection from "@/components/screens/our-programs/1. main-section";
import FirstLeapProgramSection from "@/components/screens/our-programs/2. first-leap-program-section";
import SahyogProgramSection from "@/components/screens/our-programs/3. sahyog-program-section";
import BTBProgramSection from "@/components/screens/our-programs/4. btb-program-section";

export default function OurProgramsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col">
        <MainSection />
        <FirstLeapProgramSection />
        <SahyogProgramSection />
        <BTBProgramSection />
      </div>
    </main>
  );
}

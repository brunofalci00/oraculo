import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import AmplifySection from "@/components/AmplifySection";
import SolutionSection from "@/components/SolutionSection";
import PowersSection from "@/components/PowersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <ProblemSection />
      <AmplifySection />
      <SolutionSection />
      <PowersSection />
      <TestimonialsSection />
      <OfferSection />
    </main>
  );
};

export default Index;

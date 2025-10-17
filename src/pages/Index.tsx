import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import AmplifySection from "@/components/AmplifySection";
import SolutionSection from "@/components/SolutionSection";
import PowersSection from "@/components/PowersSection";
import WhatsAppDemoSection from "@/components/WhatsAppDemoSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import OfferSection from "@/components/OfferSection";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <ProblemSection />
      <AmplifySection />
      <SolutionSection />
      <PowersSection />
      <WhatsAppDemoSection />
      <ComparisonSection />
      <TestimonialsSection />
      <FAQSection />
      <OfferSection />
    </main>
  );
};

export default Index;

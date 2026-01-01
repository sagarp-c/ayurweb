import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import SafetySection from "@/components/SafetySection";
import TherapistsSection from "@/components/TherapistsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. HERO: Immediate clarity & emotional hook */}
        <HeroSection />
        
        {/* 2. TRUST BAR: Quick legitimacy signals */}
        <TrustBar />
        
        {/* 3. HOW IT WORKS: Remove uncertainty, show simplicity */}
        <HowItWorks />
        
        {/* 4. SERVICES: Showcase offerings with easy booking */}
        <ServicesSection />
        
        {/* 5. PRICING: Transparency builds trust */}
        <PricingSection />
        
        {/* 6. SAFETY: Address hygiene & professional concerns */}
        <SafetySection />
        
        {/* 7. THERAPISTS: Human connection & expertise */}
        <TherapistsSection />
        
        {/* 8. TESTIMONIALS: Social proof from real clients */}
        <TestimonialsSection />
        
        {/* 9. FAQ: Handle remaining objections */}
        <FAQSection />
        
        {/* 10. FINAL CTA: Low-friction booking */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CTASection } from "@/components/landing/CTASection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { DoodleBackground } from "@/components/ui/DoodleBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <DoodleBackground />
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

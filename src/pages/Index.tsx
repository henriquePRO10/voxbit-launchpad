import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;

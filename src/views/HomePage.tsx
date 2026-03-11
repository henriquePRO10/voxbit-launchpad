"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LighthouseSection from "@/components/LighthouseSection";
import TechMarquee from "@/components/TechMarquee";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LighthouseSection />
      <TechMarquee />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default HomePage;

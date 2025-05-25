import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CareersSection } from "@/components/CareersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <VideoBackground />
      <Navbar />
      <main className="flex-grow">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="why-choose-us">
          <WhyChooseUsSection />
        </div>
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <div id="careers">
          <CareersSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import React from "react";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <VideoBackground />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Our Services</h1>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;

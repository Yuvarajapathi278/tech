
import React from "react";
import { Navbar } from "@/components/Navbar";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <VideoBackground />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Our Portfolio</h1>
        </div>
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

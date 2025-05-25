
import React from "react";
import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <VideoBackground />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Contact Us</h1>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

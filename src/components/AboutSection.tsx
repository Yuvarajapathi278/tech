import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { RotatingQuotes } from "./RotatingQuotes";

export function AboutSection() {
  const features = [
    "Innovative digital solutions",
    "Expert team of professionals",
    "Customer-centered approach",
    "Quality-driven development",
    "Reliable support & maintenance",
    "Timely project delivery"
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-neon-purple mb-3">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Ideas into <span className="gradient-text">Digital Excellence</span>
          </h3>
          <p className="text-muted-foreground">
            We are a passionate team of experts dedicated to delivering cutting-edge solutions
            that help businesses thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-lg">
                Founded in 2024 by Dr. Dev and Dr. Chirag, DAMODARA SMART TECH has been at the forefront of digital innovation,
                helping businesses of all sizes embrace technology and achieve their goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-gradient-blue-purple rounded-full p-1 flex-shrink-0">
                      <Check size={16} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Abstract design */}
              <div className="aspect-video overflow-hidden glass-card rounded-2xl border border-white/10 shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20"></div>
                <div className="p-8 relative z-10 h-full flex flex-col">
                  <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                  <p className="mb-6 text-muted-foreground">
                    "At Damodara Smart Tech, our mission is to align smartness with service — to humanity and to the planet."
                  </p>
                  <p className="mb-6 text-muted-foreground">
                    We believe technology must serve not just profits, but also people and the planet. This is how true smartness looks.
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-pastel-gradient flex items-center justify-center">
                        <span className="font-bold">DS</span>
                      </div>
                      <div>
                        <p className="font-medium">DAMODARA SMART TECH</p>
                        <p className="text-sm text-muted-foreground">Founded in 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-pink-orange rounded-xl -z-10 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Our Founders</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-pastel-gradient flex items-center justify-center text-xl font-bold">
                  Dr
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Dr. Dev</h4>
                  <p className="text-sm text-neon-blue">Co-founder & CEO</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                With extensive experience in technological innovation, Dr. Dev brings visionary leadership 
                and strategic direction to DAMODARA SMART TECH.
              </p>
            </div>
            
            {/* Founder 2 */}
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-pastel-gradient flex items-center justify-center text-xl font-bold">
                  Dr
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Dr. Chirag</h4>
                  <p className="text-sm text-neon-purple">Co-founder & CTO</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                A brilliant technologist with a passion for innovation, Dr. Chirag leads the technical 
                development and research initiatives at DAMODARA SMART TECH.
              </p>
            </div>
          </div>
        </div>

        {/* Rotating Quotes */}
        <div className="mt-16">
          <RotatingQuotes />
        </div>
      </div>
    </section>
  );
}

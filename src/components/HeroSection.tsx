import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function HeroSection() {
  const { theme } = useTheme();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[hsl(var(--dusty-rose))]/20 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[hsl(var(--sage))]/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[hsl(var(--peach))]/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Business With 
                <span className="block mt-2 text-[hsl(var(--navy))]">
                  Damodara Smart Tech
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We help forward-thinking companies build stunning digital experiences 
                that drive growth and delight users. Founded in 2024.
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-float-slow" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square w-full max-w-[500px] mx-auto relative">
              {/* Abstract design elements */}
              <div className="absolute inset-0 bg-[hsl(var(--soft-blue))]/30 rounded-full animate-pulse opacity-70"></div>
              
              {/* 3D Visual element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 glass-card rounded-2xl flex items-center justify-center overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <div className="w-full h-full bg-[hsl(var(--lavender))]/30">
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-4xl md:text-5xl font-bold tracking-tighter text-center text-[hsl(var(--navy))]">
                        Damodara<br />Smart Tech
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
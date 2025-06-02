import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-neon-pink/20 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-green/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-neon-orange/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Business With 
                <span className="block mt-2 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-green bg-clip-text text-transparent animate-gradient-shift live-glow">
                  Damodara Smart Tech
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We help forward-thinking companies build stunning digital experiences 
                that drive growth and delight users. Founded in 2024.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-gradient-blue-purple hover:opacity-90 transition-opacity text-lg py-6 px-8"
              >
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Button>
              
              <Button 
                variant="outline" 
                className={`border-white/20 hover:border-white/40 text-lg py-6 px-8 ${theme === 'light' ? '!border-black/20 hover:!border-black/40' : ''}`}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-float-slow" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square w-full max-w-[500px] mx-auto relative">
              {/* Abstract design elements */}
              <div className="absolute inset-0 bg-gradient-radial from-neon-blue/30 to-transparent rounded-full animate-pulse opacity-70"></div>
              
              {/* 3D Visual element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 glass-card rounded-2xl flex items-center justify-center overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-neon-purple/30 to-neon-pink/30 animate-gradient-shift">
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-4xl md:text-5xl neon-glow text-white/90 font-display font-bold tracking-tighter text-center">
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
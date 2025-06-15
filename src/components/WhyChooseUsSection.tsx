import React, { useState, useCallback, memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Sparkles,
  CheckCircle,
  TrendingUp
} from "lucide-react";

// Memoize the features array to prevent unnecessary re-renders
const features = [
  {
    icon: Zap,
    title: "Lightning Fast Development",
    description: "We deliver projects 3x faster than industry standards without compromising quality",
    stat: "3x Faster",
    color: "text-[hsl(var(--accent-gold))]",
    bgColor: "bg-[hsl(var(--peach))]"
  },
  {
    icon: Shield,
    title: "99.9% Security Guarantee",
    description: "Enterprise-grade security with advanced encryption and vulnerability testing",
    stat: "99.9% Secure",
    color: "text-[hsl(var(--accent-green))]",
    bgColor: "bg-[hsl(var(--sage))]"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support with average response time under 30 minutes",
    stat: "<30min Response",
    color: "text-[hsl(var(--accent-blue))]",
    bgColor: "bg-[hsl(var(--soft-blue))]"
  }
] as const;

// Memoized Feature Card component
const FeatureCard = memo(({ 
  feature, 
  index, 
  isHovered, 
  onHover 
}: { 
  feature: typeof features[number]; 
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}) => {
  const IconComponent = feature.icon;
  
  return (
    <Card 
      className={`glass-card hover:shadow-2xl transition-all duration-300 cursor-pointer ${
        isHovered ? 'scale-105 ring-2 ring-[hsl(var(--soft-blue))]/30' : ''
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${feature.bgColor}`}>
            <IconComponent className={`h-6 w-6 ${feature.color}`} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <Badge variant="secondary" className="text-xs">
                {feature.stat}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

FeatureCard.displayName = 'FeatureCard';

// Memoized Call to Action component
const CallToAction = memo(() => (
  <div className="text-center">
    <Card className="glass-card max-w-2xl mx-auto">
      <CardContent className="p-8">
        <CheckCircle className="h-12 w-12 text-[hsl(var(--accent-green))] mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-muted-foreground mb-6">
          Join the revolution and experience why 95% of our clients renew their contracts. 
          Get started with a free consultation today!
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="mailto:damodarasmarttech@gmail.com" 
            className="text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--accent-blue))]/80 transition-colors"
          >
            via email
          </a>
          <span className="text-muted-foreground">|</span>
          <a 
            href="https://wa.me/919342832456" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[hsl(var(--accent-green))] hover:text-[hsl(var(--accent-green))]/80 transition-colors"
          >
            via WhatsApp
          </a>
        </div>
      </CardContent>
    </Card>
  </div>
));

CallToAction.displayName = 'CallToAction';

export function WhyChooseUsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Memoize the hover handler
  const handleHover = useCallback((index: number | null) => {
    setHoveredCard(index);
  }, []);

  return (
    <section id="why-choose-us" className="py-20 px-4 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-blue-purple text-white">
            <Sparkles className="h-4 w-4 mr-2" />
            Why Choose Us
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied clients who've transformed their business with our 
            cutting-edge solutions and unmatched expertise.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isHovered={hoveredCard === index}
              onHover={handleHover}
            />
          ))}
        </div>

        <CallToAction />
      </div>
    </section>
  );
}
import React, { useState } from "react";
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
  TrendingUp,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Development",
    description: "We deliver projects 3x faster than industry standards without compromising quality",
    stat: "3x Faster",
    color: "text-yellow-400"
  },
  {
    icon: Shield,
    title: "99.9% Security Guarantee",
    description: "Enterprise-grade security with advanced encryption and vulnerability testing",
    stat: "99.9% Secure",
    color: "text-green-400"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support with average response time under 30 minutes",
    stat: "<30min Response",
    color: "text-blue-400"
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Trusted by startups to Fortune 500 companies across 40+ countries",
    stat: "500+ Clients",
    color: "text-purple-400"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning solutions recognized by tech leaders and industry experts",
    stat: "15+ Awards",
    color: "text-orange-400"
  },
  {
    icon: TrendingUp,
    title: "ROI Guaranteed",
    description: "Average 300% ROI within 6 months or we refund the difference",
    stat: "300% ROI",
    color: "text-pink-400"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow",
    quote: "Damodara Smart Tech transformed our outdated system into a modern powerhouse. ROI was 400% in just 4 months!",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, StartupX",
    quote: "The fastest development team I've ever worked with. They delivered our MVP in 3 weeks instead of 3 months.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Product Manager, InnovateCorp",
    quote: "Their 24/7 support is incredible. They fixed a critical issue at 2 AM on a Sunday. Amazing dedication!",
    rating: 5
  }
];

export function WhyChooseUsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-blue-purple text-white">
            <Sparkles className="h-4 w-4 mr-2" />
            Why Choose Us
          </Badge>
          <h2 className="text-4xl font-bold mb-4 live-glow">
            Experience the Damodara Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied clients who've transformed their business with our 
            cutting-edge solutions and unmatched expertise.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`glass-card hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  hoveredCard === index ? 'scale-105 ring-2 ring-neon-blue/30' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-accent to-accent/50`}>
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
          })}
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Heart key={i} className="h-4 w-4 fill-red-400 text-red-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join the revolution and experience why 95% of our clients renew their contracts. 
                Get started with a free consultation today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-blue-purple hover:opacity-90 transition-opacity">
                  Start Free Consultation
                </Button>
                <Button variant="outline">
                  View Success Stories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
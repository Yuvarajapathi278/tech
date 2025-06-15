import React from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] group">
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${color}`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
    </div>
  );
};

export function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Custom-built websites and web applications tailored to your unique business requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--accent-blue))]"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
      ),
      color: "bg-[hsl(var(--soft-blue))]"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user engagement and deliver seamless experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--accent-purple))]"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
      ),
      color: "bg-[hsl(var(--lavender))]"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications with cutting-edge features and functionality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--accent-green))]"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
      ),
      color: "bg-[hsl(var(--mint))]"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that increase visibility and drive conversions for your business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-orange"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
      ),
      color: "bg-gradient-to-br from-neon-orange/30 to-neon-green/30"
    },
    {
      title: "API Integration",
      description: "Seamless connection of your systems with third-party services and applications for enhanced functionality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green"><path d="M15 12h2a2 2 0 0 1 0 4h-2"></path><path d="M7 12H5a2 2 0 0 0 0 4h2"></path><path d="M9 16V8"></path><path d="M15 16V8"></path><line x1="9" y1="12" x2="15" y2="12"></line></svg>
      ),
      color: "bg-gradient-to-br from-neon-green/30 to-neon-blue/30"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services tailored for performance, security, and reliability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
      ),
      color: "bg-gradient-to-br from-neon-blue/30 to-neon-purple/30"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h3>
          <p className="text-muted-foreground">
            We offer a wide range of services to help your business grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

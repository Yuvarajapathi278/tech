
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Financial Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Interactive financial analytics dashboard with real-time data visualization."
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Full-featured online store with product management and payment integration."
  },
  {
    id: 3,
    title: "Health & Fitness App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Mobile application for tracking fitness goals and health metrics."
  },
  {
    id: 4,
    title: "Branding Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Comprehensive digital marketing campaign that increased brand awareness by 78%."
  }
];

export function PortfolioSection() {
  const [filter, setFilter] = useState("all");
  
  const categories = ["all", "Web App", "Web Development", "Mobile App", "Digital Marketing"];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm uppercase tracking-wider text-neon-green mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h3>
          <p className="text-muted-foreground">
            Browse through our collection of successful projects that showcase our expertise
            and dedication to delivering exceptional results.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${filter === category ? "bg-gradient-blue-purple text-white" : "border border-white/20 text-foreground"}`}
              onClick={() => setFilter(category)}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="overflow-hidden rounded-lg glass-card relative">
                <div className="h-64 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                </div>
                <div className="p-6 relative">
                  <span className="text-xs uppercase tracking-wider text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full mb-3 inline-block">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-0">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-white/20 hover:border-white/40"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "About", href: "/", sectionId: "about" },
  { label: "Services", href: "/", sectionId: "services" },
  { label: "Why Choose Us", href: "/", sectionId: "why-choose-us" },
  { label: "Portfolio", href: "/", sectionId: "portfolio" },
  { label: "Careers", href: "/", sectionId: "careers" },
  { label: "Contact", href: "/", sectionId: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    setMobileMenuOpen(false);
    
    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first
      navigate("/");
      // Then scroll to section after navigation
      setTimeout(() => {
        if (item.sectionId) {
          const element = document.getElementById(item.sectionId);
          if (element) {
            const headerHeight = 80; // Approximate header height
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({ 
              top: elementPosition, 
              behavior: "smooth" 
            });
          }
        }
      }, 100);
    } else {
      // If on homepage, just scroll to section
      if (item.sectionId) {
        const element = document.getElementById(item.sectionId);
        if (element) {
          const headerHeight = 80; // Approximate header height
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({ 
            top: elementPosition, 
            behavior: "smooth" 
          });
        }
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold neon-glow text-neon-blue"
        >
          Damodara<span className="text-neon-purple"> Smart Tech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-muted-foreground hover:text-foreground transition-colors neon-border py-1 px-2 bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
          <Button 
            variant="default" 
            className="bg-gradient-blue-purple hover:opacity-90 transition-opacity"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-background z-40 p-6 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-lg py-2 border-b border-muted hover:text-neon-blue transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="mt-4 w-full bg-gradient-blue-purple hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
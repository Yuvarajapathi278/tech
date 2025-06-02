import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-background to-secondary/20 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-display font-bold neon-glow text-neon-blue mb-4 inline-block">
              DAMODARA<span className="text-neon-purple"> SMART TECH</span>
            </Link>
            <p className="text-muted-foreground mt-2 mb-6">
              Founded in 2024 by Dr. Dev and Dr. Chirag, creating innovative digital solutions for forward-thinking businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-pink transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mobile Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>dr.devuc@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>9342832456</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Damodara Smart Tech, Thalambur SIPCOT Road, Siruseri, Chennai-603103</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DAMODARA SMART TECH Inc. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

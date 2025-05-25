
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-purple/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-neon-orange mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="gradient-text-alt">Connect</span>
          </h3>
          <p className="text-muted-foreground">
            Have a project in mind or want to learn more about our services? 
            We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="glass-card rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6">Send us a message</h4>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="John Doe"
                      className="bg-secondary/50 border-white/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-secondary/50 border-white/10"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-secondary/50 border-white/10"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-secondary/50 border-white/10 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-blue-purple hover:opacity-90 transition-opacity"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="glass-card rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-blue-purple flex-shrink-0 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm text-muted-foreground mb-1">Email Us</h5>
                    <p className="font-medium">info@company.com</p>
                    <p className="font-medium">support@company.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-pink-orange flex-shrink-0 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm text-muted-foreground mb-1">Call Us</h5>
                    <p className="font-medium">+1 (555) 123-4567</p>
                    <p className="font-medium">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-neon-blue flex-shrink-0 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm text-muted-foreground mb-1">Visit Us</h5>
                    <p className="font-medium">123 Tech Lane</p>
                    <p className="font-medium">Digital City, DC 10101</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6">Business Hours</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

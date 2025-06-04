import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Users, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function CareersSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/el/activate/damodarasmarttech@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Profile Submitted!",
          description: "Thank you for your interest. We'll keep your profile on file for future opportunities.",
        });
        form.reset();
      } else {
        throw new Error("Failed to submit profile");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-purple/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-neon-orange mb-3">Join Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Build Your <span className="gradient-text-alt">Future</span> With Us
          </h3>
          <p className="text-muted-foreground">
            We're always looking for talented individuals who are passionate about technology and innovation.
            Join our team and be part of something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users size={24} />
                  Submit Your Profile
                </CardTitle>
                <CardDescription>
                  Fill out the form below to submit your profile. We'll keep your details on file for future openings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Honeypot */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  
                  {/* Disable Captcha */}
                  <input type="hidden" name="_captcha" value="false" />
                  
                  {/* Subject for Career Applications */}
                  <input type="hidden" name="_subject" value="New Career Application" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name *</label>
                      <Input
                        name="name"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input
                        name="phone"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Years of Experience</label>
                      <Input
                        name="experience"
                        placeholder="e.g., 3 years"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Portfolio/GitHub URL</label>
                    <Input
                      name="portfolio"
                      placeholder="https://your-portfolio.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Cover Letter</label>
                    <Textarea
                      name="coverLetter"
                      placeholder="Tell us about yourself..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-blue-purple hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Profile"}
                    <Send size={16} className="mr-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-neon-blue/20">
            <CardContent className="p-8">
              <Briefcase size={48} className="mx-auto mb-4 text-neon-blue" />
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join a team that values innovation, creativity, and professional growth. 
                We offer competitive compensation, flexible working arrangements, and exciting projects.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>📧 Applications will be sent to: <strong>damodarasmarttech@gmail.com</strong></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
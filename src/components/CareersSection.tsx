import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Users, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function CareersSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    coverLetter: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Sheets Web App URL - Replace with your actual Google Sheets Web App URL
      const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

      const submissionData = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        portfolio: formData.portfolio,
        coverLetter: formData.coverLetter
      };

      // Submit to Google Sheets
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      toast({
        title: "Profile Submitted!",
        description: "Thank you for your interest. We'll keep your profile on file for future opportunities.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        portfolio: "",
        coverLetter: ""
      });

    } catch (error) {
      console.error("Error submitting profile:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 bg-gradient-blue-purple bg-clip-text text-transparent">
            Join Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're always looking for talented developers and freelancers to join our growing team. 
            Please submit your profile below and we'll reach out when a suitable opportunity arises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center">
          {/* Application Form */}
          <div className="lg:col-start-2">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Years of Experience</label>
                      <Input
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        placeholder="e.g., 3 years"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Portfolio/GitHub URL</label>
                    <Input
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange("portfolio", e.target.value)}
                      placeholder="https://your-portfolio.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Cover Letter</label>
                    <Textarea
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      placeholder="Tell us about yourself..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-blue-purple hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Submit Profile
                      </>
                    )}
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
                <p>📧 Applications will be sent to: <strong>careers@damodarasmartech.com</strong></p>
                <p className="mt-2">💡 Pro tip: Make sure to set up your Google Sheets integration for automatic form processing!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
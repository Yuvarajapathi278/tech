import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Users, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  skills: string[];
  description: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: "web-dev",
    title: "Frontend/Fullstack Web Developer",
    type: "Full-time / Part-time",
    location: "Remote / Hybrid",
    experience: "1-5 years",
    skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "JavaScript"],
    description: "Join our team to build cutting-edge web applications using modern technologies."
  },
  {
    id: "java-dev",
    title: "Java Developer",
    type: "Full-time",
    location: "Remote / On-site",
    experience: "2-6 years",
    skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "SQL"],
    description: "Develop robust backend systems and enterprise applications using Java technologies."
  },
  {
    id: "python-dev",
    title: "Python Developer",
    type: "Full-time / Contract",
    location: "Remote",
    experience: "1-4 years",
    skills: ["Python", "Django/Flask", "Data Analysis", "AI/ML", "PostgreSQL"],
    description: "Build scalable applications and work with data science projects using Python."
  },
  {
    id: "freelancer",
    title: "Freelance Developers",
    type: "Project-based",
    location: "Remote",
    experience: "Any level",
    skills: ["Various Technologies", "Self-motivated", "Communication"],
    description: "Join our freelancer network for exciting project opportunities across different technologies."
  }
];

export function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<string>("");
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
    
    if (!selectedJob || !formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a position.",
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
        position: jobOpenings.find(job => job.id === selectedJob)?.title || selectedJob,
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
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
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
      setSelectedJob("");

    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again.",
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
            Explore exciting opportunities in web development, Java, Python, and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Job Openings */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Current Openings</h3>
            {jobOpenings.map((job) => (
              <Card 
                key={job.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedJob === job.id ? 'ring-2 ring-neon-blue shadow-lg' : ''
                }`}
                onClick={() => setSelectedJob(job.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="mt-2">{job.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.experience}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Application Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users size={24} />
                  Apply Now
                </CardTitle>
                <CardDescription>
                  Fill out the form below to apply for any position. Freelancers are always welcome!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Position *</label>
                    <select 
                      value={selectedJob}
                      onChange={(e) => setSelectedJob(e.target.value)}
                      className="w-full p-2 border rounded-md bg-background"
                      required
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.id}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>

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
                      placeholder="Tell us why you'd be a great fit for this role..."
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
                        Submit Application
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
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <PortfolioSection />
            <CareersSection />
            <ContactSection />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

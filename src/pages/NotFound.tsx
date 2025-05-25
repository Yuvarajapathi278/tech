
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background relative">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="glass-card rounded-xl p-8 md:p-12 text-center relative z-10 max-w-md w-full">
        <h1 className="text-8xl font-bold gradient-text mb-6">404</h1>
        <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Button asChild className="bg-gradient-blue-purple hover:opacity-90 transition-opacity">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

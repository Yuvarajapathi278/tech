import React, { useState, useEffect } from "react";

interface Quote {
  text: string;
  author: string;
}

export function RotatingQuotes() {
  const quotes: Quote[] = [
    {
      text: "We solve the unsolved. We simplify the complex.",
      author: "Dr. Dev, Co-founder"
    },
    {
      text: "Your problem is our blueprint for innovation.",
      author: "Dr. Dev, Co-founder"
    },
    {
      text: "Empowering industries to think, act, and grow smart.",
      author: "Dr. Dev, Co-founder"
    }
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");
      
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFadeState("fade-in");
      }, 500);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [quotes.length]);

  return (
    <div className="py-8 px-4 max-w-2xl mx-auto text-center">
      <div className={`animate-${fadeState} min-h-[120px] flex flex-col justify-center`}>
        <blockquote className="text-xl italic mb-4">"{quotes[currentQuoteIndex].text}"</blockquote>
        <cite className="text-neon-purple">— {quotes[currentQuoteIndex].author}</cite>
      </div>
    </div>
  );
}

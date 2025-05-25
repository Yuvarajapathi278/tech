
import React from 'react';

interface PulsatingDotProps {
  color?: string;
  size?: string;
  delay?: string;
}

export function PulsatingDot({ 
  color = "bg-neon-blue", 
  size = "w-2 h-2", 
  delay = "0s" 
}: PulsatingDotProps) {
  return (
    <div className="relative flex items-center justify-center">
      <div 
        className={`${color} ${size} rounded-full animate-ping absolute`}
        style={{ animationDelay: delay, animationDuration: "3s" }}
      ></div>
      <div className={`${color} ${size} rounded-full`}></div>
    </div>
  );
}

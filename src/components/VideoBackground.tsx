
import React from 'react';
import { useTheme } from './ThemeProvider';

export function VideoBackground() {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/40' : 'bg-white/40'} backdrop-blur-sm z-10`}></div>
      
      <video 
        className="absolute w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src={theme === 'dark' 
            ? "https://cdn.gpteng.co/videos/abstract-dark.mp4" 
            : "https://cdn.gpteng.co/videos/abstract-light.mp4"} 
          type="video/mp4" 
        />
      </video>
    </div>
  );
}

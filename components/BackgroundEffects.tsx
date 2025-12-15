import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Deep purple gradient form top right */}
      <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen animate-pulse-slow" />
      
      {/* Secondary accent blob */}
      <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/10 blur-[100px] mix-blend-screen" />
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
      }} />
    </div>
  );
};

export default BackgroundEffects;
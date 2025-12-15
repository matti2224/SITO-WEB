import React from 'react';

const AbstractShape: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
      {/* 
        This is a complex SVG construction to simulate a 3D glass 'W' shape.
        It uses gradients, blur filters, and multiple paths to create depth.
      */}
      <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_50px_rgba(139,92,246,0.3)]">
        <defs>
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="50%" stopColor="rgba(124, 58, 237, 0.2)" />
            <stop offset="100%" stopColor="rgba(88, 28, 135, 0.8)" />
          </linearGradient>
          
          <linearGradient id="rimLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="20%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Back shape (Depth) */}
        <path 
          d="M100,150 Q150,400 250,250 Q350,100 400,350" 
          fill="none" 
          stroke="url(#glassGrad)" 
          strokeWidth="120" 
          strokeLinecap="round"
          className="opacity-60 blur-sm"
        />

        {/* Main shape - The W-ish form */}
        <path 
          d="M100,150 Q150,450 250,250 T400,350" 
          fill="none" 
          stroke="url(#glassGrad)" 
          strokeWidth="100" 
          strokeLinecap="round"
          filter="url(#glow)"
        />
        
        {/* Highlights / Rim Light */}
        <path 
          d="M105,150 Q155,445 250,255 T395,350" 
          fill="none" 
          stroke="white" 
          strokeWidth="4" 
          strokeLinecap="round"
          className="opacity-60 mix-blend-overlay"
        />
        
        <circle cx="120" cy="160" r="20" fill="white" className="opacity-30 blur-xl animate-pulse" />
        <circle cx="380" cy="340" r="30" fill="violet" className="opacity-40 blur-xl animate-pulse" />

      </svg>
      
      {/* Decorative overlaid gradient for extra glass realism */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-full mix-blend-overlay pointer-events-none" />
    </div>
  );
};

export default AbstractShape;
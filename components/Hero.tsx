import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import AbstractShape from './AbstractShape';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      
      {/* Left Column: Text */}
      <div className="flex flex-col items-start max-w-2xl z-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
          <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">Trusted by 100+ telehealth brands</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
          The operating system for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-200">digital clinics.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
          The AI-powered platform for intake, charting, treatments, pharmacy, provider coverage, labs, wearables, and payments.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="group relative px-7 py-3.5 bg-white text-wizlo-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]">
            See Continuum in Action
            <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-110 transition-transform">
               <Play size={10} fill="currentColor" className="ml-0.5" />
            </div>
          </button>
          
          <button className="px-7 py-3.5 bg-wizlo-surface border border-purple-500/30 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-purple-900/20 hover:border-purple-500/60 transition-all">
            Book a Call
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Right Column: Visual */}
      <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center lg:justify-end z-10 perspective-1000">
        {/* Glow behind the object */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse-slow"></div>
        
        {/* The 3D Object Component */}
        <div className="relative animate-float">
            <AbstractShape />
            
            {/* Floating Particles */}
            <Particle className="top-0 left-0" delay="0s" />
            <Particle className="bottom-10 right-10" delay="1s" />
            <Particle className="top-1/2 -right-10" delay="2s" />
            <Particle className="bottom-0 left-20" delay="3s" />
        </div>
      </div>
    </section>
  );
};

const Particle = ({ className, delay }: { className: string, delay: string }) => (
  <div 
    className={`absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse ${className}`} 
    style={{ animationDelay: delay }}
  />
);

export default Hero;
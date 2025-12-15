import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import BackgroundEffects from './components/BackgroundEffects';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden selection:bg-purple-500 selection:text-white">
      {/* Background Gradients and Effects */}
      <BackgroundEffects />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Hero />
          <TrustedBy />
        </main>
      </div>
      
      {/* Footer Simulation (Just spacing for scrolling) */}
      <div className="h-24 w-full relative z-10"></div>
    </div>
  );
};

export default App;
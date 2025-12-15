import React from 'react';

// Using simple SVG placeholders or text for logos as per "monochrome" request
const TrustedBy: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pb-20">
      {/* Separator Line with Text */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <span className="text-sm font-medium text-gray-500 uppercase tracking-widest whitespace-nowrap">
          Trusted by 500+ companies nationwide
        </span>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      {/* Logos Grid */}
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
        <LogoPlaceholder text="OMENS" />
        <LogoPlaceholder text="MENS" bold />
        <LogoPlaceholder text="WOMENS" />
        <LogoPlaceholder text="yupMD" icon />
        <LogoPlaceholder text="ellie" script />
      </div>
    </section>
  );
};

interface LogoProps {
  text: string;
  bold?: boolean;
  icon?: boolean;
  script?: boolean;
}

const LogoPlaceholder: React.FC<LogoProps> = ({ text, bold, icon, script }) => (
  <div className="group cursor-pointer hover:opacity-100 transition-opacity duration-300">
    <div className={`flex items-center gap-2 text-xl md:text-2xl text-white ${script ? 'font-serif italic' : 'font-sans'} ${bold ? 'font-black' : 'font-medium'} tracking-tight`}>
      {icon && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-white">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
        </svg>
      )}
      <span className={script ? 'font-serif' : 'uppercase'}>{text}</span>
    </div>
  </div>
);

export default TrustedBy;
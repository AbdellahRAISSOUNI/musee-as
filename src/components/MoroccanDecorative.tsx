import React from 'react';

interface PremiumDecorativeProps {
  className?: string;
}

const PremiumDecorative: React.FC<PremiumDecorativeProps> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-5 bg-gradient-premium"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
    </div>
  );
};

export default PremiumDecorative; 
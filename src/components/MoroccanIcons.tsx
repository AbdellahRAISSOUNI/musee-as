import React from 'react';
import { FaStar, FaCircle, FaSquare } from 'react-icons/fa';

interface PremiumIconProps {
  className?: string;
  size?: number;
}

export const PremiumStar: React.FC<PremiumIconProps> = ({ className = '', size = 24 }) => {
  return (
    <div className={`inline-flex text-accent-gold ${className}`}>
      <FaStar size={size} />
    </div>
  );
};

export const PremiumPattern: React.FC<PremiumIconProps> = ({ className = '', size = 24 }) => {
  // Create a small premium pattern with basic shapes
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div className="relative">
        <FaSquare className="text-premium-black" size={size} />
        <FaCircle className="text-slate absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" size={size * 0.5} />
        <FaStar className="text-accent-gold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" size={size * 0.3} />
      </div>
    </div>
  );
};

// This component creates a border with premium pattern
export const PremiumBorder: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="h-px flex-grow bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
      <PremiumPattern className="mx-2" size={16} />
      <div className="h-px flex-grow bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
    </div>
  );
}; 
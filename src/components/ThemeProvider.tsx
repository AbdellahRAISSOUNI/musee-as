"use client";

import React, { ReactNode, useEffect } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Force dark mode on mount and when theme changes
  useEffect(() => {
    // Add dark class to document
    document.documentElement.classList.add('dark');
    
    // Override any system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    
    const handleChange = () => {
      document.documentElement.classList.add('dark');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  return <>{children}</>;
};

export default ThemeProvider; 
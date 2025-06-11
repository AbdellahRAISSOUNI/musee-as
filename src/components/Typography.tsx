import React, { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const TitleGrand: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`font-title-grand font-bodoni-regular ${className}`}>
      {children}
    </h1>
  );
};

export const SequenceText: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`font-sequence font-bodoni-regular ${className}`}>
      {children}
    </h2>
  );
};

export const CommentLabel: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return (
    <p className={`font-comment font-bodoni-regular ${className}`}>
      {children}
    </p>
  );
};

export const ItalicText: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return (
    <span className={`font-bodoni-italic ${className}`}>
      {children}
    </span>
  );
};

export const BoldText: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return (
    <span className={`font-bodoni-bold ${className}`}>
      {children}
    </span>
  );
}; 
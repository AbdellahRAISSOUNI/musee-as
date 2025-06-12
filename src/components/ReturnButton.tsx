import React from 'react';
import Link from 'next/link';

interface ReturnButtonProps {
  href: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ href }) => {
  return (
    <div className="flex justify-end mb-10">
      <Link 
        href={href}
        className="inline-block bg-black text-white hover:bg-black/80 transition-colors px-6 py-3 font-bodoni"
      >
        Retour
      </Link>
    </div>
  );
};

export default ReturnButton; 
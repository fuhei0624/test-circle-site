
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"
    >
      <circle cx="50" cy="50" r="48" fill="#FEE2E2" />
      <path 
        d="M25 65 C 35 75, 65 75, 75 65" 
        stroke="#DC2626" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      <circle cx="35" cy="45" r="5" fill="#DC2626" />
      <circle cx="65" cy="45" r="5" fill="#DC2626" />
      <path 
        d="M30 30 Q 35 20, 40 30" 
        stroke="#DC2626" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
      <path 
        d="M70 30 Q 65 20, 60 30" 
        stroke="#DC2626" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
    </svg>
  );
};

export default Logo;

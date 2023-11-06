import React from 'react';

interface BackgroundVideoProps {
  children: React.ReactNode;
  className?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ children, className }) => {
  return (
    <video 
      loop
      autoPlay
      muted
      className={className}
    >
      {children}
    </video>
  );
};

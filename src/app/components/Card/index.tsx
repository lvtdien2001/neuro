import React, { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Root: React.FC<CardProps> = ({ children, className }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div 
      className={`${className} w-full h-[320px] bg-[#131316] border-[#3F3F46] rounded-lg border-2 border-solid p-4`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div className={`${isHover ? 'border-[#FF3D00]' : 'border-[#3F3F46]'} border-2 rounded w-full h-full px-3 py-8`}>
          <div className='flex justify-center mb-[32px]'>
            <img
              alt='develope'
              src='/static/images/group_267.svg'
            />
          </div>

          {children}

          <div className={`flex justify-center`}>
            <img
              alt='ellipse'
              src='/static/images/ellipse_white.svg'
            />
            <img
              alt='ellipse'
              src='/static/images/ellipse_gray.svg'
              className='ms-2 me-2'  />
            {isHover ? 
            <img
              alt='ellipse'
              src='/static/images/ellipse_orange.svg'
            />
            : <img
              alt='ellipse'
              src='/static/images/ellipse_gray.svg'
            />}
          </div>
      </div>
    </div>
  );
};

const Title: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${className} text-center mb-2`}>
      {children}
    </div>
  );
};

const Text: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${className} text-center mb-8`}>
      {children}
    </div>
  );
};

export const Card = {Root, Title, Text}
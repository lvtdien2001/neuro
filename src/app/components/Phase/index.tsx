import React, { createContext, useContext, useState } from 'react';

interface PhaseProps {
  children: React.ReactNode;
  className?: string;
}

const PhaseContext = createContext(false);

const Root: React.FC<PhaseProps> = ({ children, className }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div 
      className={`${className} h-[444px] w-[312px] bg-[#131316] rounded-lg border-[#3F3F46] border-2 border-solid p-5 cursor-pointer`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div className={`${isHover ? 'border-[#FF3D00]' : 'border-[#3F3F46]'} rounded border-2 w-full h-full p-4`}>
          <PhaseContext.Provider value={isHover}>
            {children}
          </PhaseContext.Provider>
      </div>
    </div>
  );
};

const Header: React.FC<PhaseProps> = ({ children, className }) => {
  return (
    <div className={`${className} grid grid-cols-2 mb-5`}>
      {children}
    </div>
  );
};

const Title: React.FC<PhaseProps> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

const Ellipse: any = () => {
  const isHover = useContext(PhaseContext);

  return (
    <div className={`flex items-center justify-end`}>
      {isHover && <img
        alt='ellipse'
        src='/static/images/ellipse_orange.svg'
        className='w-3 h-3 ms-2'  
      />}
      <img
        alt='ellipse'
        src='/static/images/ellipse_white.svg'
        className='w-3 h-3 ms-2'
      />
      {!isHover && <img
        alt='ellipse'
        src='/static/images/ellipse_gray.svg'
        className='w-3 h-3 ms-2'  
      />}
      <img
        alt='ellipse'
        src='/static/images/ellipse_gray.svg'
        className='w-3 h-3 ms-2'  
      />
    </div>
  )
}

const Text: React.FC<PhaseProps> = ({ children, className }) => {
  return (
    <div className={`${className} font-content`}>
      {children}
    </div>
  );
};

export const Phase = {Header, Title, Ellipse, Text, Root}

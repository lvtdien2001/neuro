import React, {useState} from 'react';

interface ButtonLogoProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonLogo: React.FC<ButtonLogoProps> = ({ children, className }) => {
  // const [border, setBorder] = useState('border-[#18181B]');
  const [isHover, setIsHover] = useState(false);

  return (
    <div 
      className={`${className} h-20 w-full px-10 py-5 ${isHover ? 'border-[#26272B]' : 'border-[#18181B]'} bg-[#131316] rounded border-4 border-solid flex items-center justify-center`}
      // onFocus={() => setBorder('border-[#26272B]')}
      // onBlur={() => setBorder('border-[#18181B]')}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {children}
    </div>
  );
};

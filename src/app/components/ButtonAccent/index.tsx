import React, {useState} from 'react';

interface ButtonAccentProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonAccent: React.FC<ButtonAccentProps> = ({ children, className }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div 
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className={`${className} p-2 cursor-pointer bg-[#18181B] rounded-[32px] border-2 border-[#26272B] border-solid flex-col justify-start items-start gap-[10px] inline-flex`}
    >
      <div className={`${isHover ? 'bg-[#FF3D00]' : 'bg-[#131316]'} px-12 py-2 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.24)] rounded-[32px] overflow-hidden border-2 border-[#FF3D00] border-solid justify-center items-center gap-2 inline-flex`}>
        <div className="text-center text-base font-content font-semibold break-words">
          {children}
        </div>
      </div>
    </div>
  );
};

import Image from 'next/image';
import React, { useState } from 'react';

interface ButtonVisualProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonVisual: React.FC<ButtonVisualProps> = ({
  children,
  className,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={`${className} w-[140px] h-[132px] mt-auto mb-auto`}>
      <div className="flex justify-center">
        <div
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          onBlur={() => 0}
          onFocus={() => 0}
          className={`${
            isHover ? 'bg-[#FF3D0080]' : 'bg-[#26272B]'
          } cursor-pointer flex items-center justify-center w-24 h-24 rounded-[80px]`}
        >
          <div
            className={`${
              isHover ? 'border-[#FF3D00]' : 'border-[#3F3F46]'
            } flex relative justify-center items-center border-solid rounded-[64px] border-[3px] bg-[#131316] p-3 w-20 h-20`}
          >
            <Image
              alt="layers"
              src="/static/images/layers.svg"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        onBlur={() => 0}
        onFocus={() => 0}
        className="font-heading cursor-pointer text-center font-extrabold text-xl break-words"
      >
        {children}
      </div>
    </div>
  );
};

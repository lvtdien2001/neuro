import Image from 'next/image';
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
      onBlur={() => 0}
      onFocus={() => 0}
    >
      <div
        className={`${
          isHover ? 'border-[#FF3D00]' : 'border-[#3F3F46]'
        } border-2 rounded w-full h-full px-3 py-8`}
      >
        <div className="flex justify-center mb-[32px]">
          <Image
            alt="develope"
            src="/static/images/group_267.svg"
            width={80}
            height={80}
          />
        </div>

        {children}

        <div className="flex justify-center">
          <Image
            alt="ellipse"
            src="/static/images/ellipse_white.svg"
            width={12}
            height={12}
          />
          <Image
            alt="ellipse"
            src="/static/images/ellipse_gray.svg"
            className="ms-2 me-2"
            width={12}
            height={12}
          />
          {isHover ? (
            <Image
              alt="ellipse"
              src="/static/images/ellipse_orange.svg"
              width={12}
              height={12}
            />
          ) : (
            <Image
              alt="ellipse"
              src="/static/images/ellipse_gray.svg"
              width={12}
              height={12}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Title: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${className} text-center mb-2`}>{children}</div>;
};

const Text: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${className} text-center mb-8`}>{children}</div>;
};

export const Card = { Root, Title, Text };
